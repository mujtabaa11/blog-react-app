import { useState, useEffect } from 'react'
import BlogsList from './components/BlogsList'
import BlogEntry from './components/BlogEntry'
import Header from './components/header'

function App() {
  //defining the main varabiles in the application. the blogs list and the new blog entry.
  const [blogs, setBlogs] = useState([])
  const [blogValue, setBlogValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('blogs', JSON.stringify({ blogs: newList }))
  }

  //process to add a new blog entry. the if statement will prevent adding empty entries.
  function handleAddBlog(newBlog) {
    const newBlogList = [...blogs, newBlog]
    if (newBlog.length > 0) {
    persistData(newBlogList)
    setBlogs(newBlogList)}}
  
  function handleDeleteBlog(index) {
    const newBlogList = blogs.filter((blog, blogIndex) => {
      return blogIndex !== index
    })
    persistData(newBlogList)
    setBlogs(newBlogList)
  }

  /*the edit option will bring the blog to the input area and will DELETE
  the saved blog so it is currently needed to be added again.*/
  function handleEditBlog(index) {
    const selectedBlog = blogs[index]
    setBlogValue(selectedBlog)
    handleDeleteBlog(index)
  }

  //
  useEffect(() => {
    if (!localStorage) {
      return
    }

    let localBlogs = localStorage.getItem('blogs')
    if (!localBlogs) {
      return
    }

    console.log(localBlogs)
    localBlogs = JSON.parse(localBlogs).blogs
    setBlogs(localBlogs)

  }, [])

  return (
    <>
      <h1>PlaceHolder</h1>
      <BlogEntry blogValue={blogValue} setBlogValue={setBlogValue} handleAddBlog={handleAddBlog} />
      <BlogsList handleEditBlog={handleEditBlog} handleDeleteBlog={handleDeleteBlog} blogs={blogs} />
    </>
  )
}

export default App
