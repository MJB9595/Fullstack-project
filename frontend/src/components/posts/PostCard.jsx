import React from 'react'
import { Link } from 'react-router-dom'
import PostTag from './PostTag' // PostTag 불러오기
import './PostComponentAll.scss'

const PostCard = ({ post }) => {
  return (
    <Link to={`/app/posts/${post.id}`} className='post-card'>
      <article>
        <div className="post-card-body">
          <p className='post-category'>{post.category}</p>
          <h3 className='post-title'>{post.title}</h3>
          
          {/* 기존 PostTag 컴포넌트 사용 */}
          <div className="tags">
            {(post.tags || []).map((tag, i) => (
              <PostTag key={i} tag={tag} />
            ))}
          </div>
          
        </div>
        <div className="img-wrap">
          <img src={post.thumbnail || '/images/placeholder.png'} alt={post.title} />
        </div>
      </article>
    </Link>
  )
}

export default PostCard