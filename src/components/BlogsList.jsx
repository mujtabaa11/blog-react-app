import React from 'react'
import BlogCard from './BlogCard'

export default function BlogsList(props) {
  const { blogs } = props

  return (
    <div>
        <ul className='blogslist'>
            {blogs.map((blog, blogIndex) => {
                return (
                    <BlogCard {...props} key={blogIndex} index={blogIndex}>
                        <p>{blog}</p>
                    </BlogCard>
                )
            })}
        </ul>
    </div>
  )
}
