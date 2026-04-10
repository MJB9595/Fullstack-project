import React from 'react'
import { getTagColor } from '@/hooks/useTagColor'

const PostTag = ({ tag, onClick }) => {
  return (
    <span className='post-tag' style={{ backgroundColor: getTagColor(tag) }}>
      <span>{tag}</span>
      
      {/* onClick 함수가 전달되었을 때만(즉, 생성/수정 페이지에서만) X 버튼 표시 */}
      {onClick && (
        <button 
          className='post-tag-delete' 
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onClick()
          }}
        >
          ✕
        </button>
      )}
    </span>
  )
}

export default PostTag