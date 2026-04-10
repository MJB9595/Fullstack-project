import React, { useEffect, useState } from 'react'
import { getPostById, deletePost } from '@/api/post.api'
import { useNavigate, useParams } from 'react-router-dom'
import { useAuth } from '@/store/auth.store'
import PostHeader from '@/components/posts/PostHeader'
import './PostDetail.scss'

const PostDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)

  const { member } = useAuth()

  const handleGoBack = () => navigate(-1)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await getPostById(Number(id))
        setPost({ ...data })
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchPost()
  }, [id])

  if (loading) return <div className="page layout-container">로딩중...</div>
  if (!post) return <div className="page layout-container">데이터 없음</div>

  const handlePostDelete = async () => {
    if (confirm('게시글을 정말 삭제하시겠습니까?')) {
      try {
        await deletePost(id)
        navigate('/app', { replace: true })
      } catch (error) {
        console.error('게시글 삭제 오류', error)
      }
    }
  }

  return (
    <section className='page post-section'>
      <div className="layout-container">
        <PostHeader
          title="게시글 보기"
          showButton
          onClick={handleGoBack}
          buttonText="← 뒤로가기" // 👇 화살표 추가됨
          buttonClass="back bl"
        />
        
        <div className="post-detail">
          <header className="post-header">
            <span className="category">{post.category}</span>
            <h1 className="title">{post.title}</h1>
          </header>

          {post.imageUrl && (
            <div className="post-thumbnail">
              <img src={post.imageUrl} alt={post.title} />
            </div>
          )}

          <div className="post-content">
            <p>{post.content}</p>
          </div>

          <footer className="post-footer">
            <div className="tags">
              {(post.tags || []).map((tag, i) => (
                <span className="post-tag-item" key={i}>#{tag.label || tag}</span>
              ))}
            </div>
            
            {member && member.id === post.memberId && (
              <div className="actions">
                <button className="edit" onClick={() => navigate(`/app/posts/${id}/edit`)}>
                  수정
                </button>
                <button className="delete" onClick={handlePostDelete}>
                  삭제
                </button>
              </div>
            )}
          </footer>
        </div>
      </div>
    </section>
  )
}

export default PostDetail