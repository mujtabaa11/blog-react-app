import React from 'react'

export default function BlogCard(props) {
  const { children, handleDeleteBlog, index, handleEditBlog } = props

  return (
  <li className='blogItem'>
      {children}
      <div className='actionsContainer'>
        <button onClick={() => {
            handleEditBlog(index)
        }}>
            <i className="fa-solid fa-pen-to-square"></i>
        </button>

        <button onClick={() => {
            handleDeleteBlog(index)
        }}>
            <i className="fa-regular fa-trash-can"></i>
        </button>

    </div>
  </li>


  )
}
