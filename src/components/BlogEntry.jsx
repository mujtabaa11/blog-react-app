import { useState } from "react"
import React from 'react'


export default function BlogEntry(props) {
  const {handleAddBlog, blogValue, setBlogValue} = props

  return (
    <div className='inputContainer'>
        <input placeholder='Write a new blog post' value={blogValue} onChange={(e)=> {
          setBlogValue(e.target.value) }}/>
        <button onClick= {() => {
          handleAddBlog(blogValue)
          setBlogValue('')
        }}>Add</button>
    </div>
  )
}
