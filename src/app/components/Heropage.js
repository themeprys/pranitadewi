import React from 'react'
import Hero from './Hero'
import BookOrder from './BookOrder'
import LatestBlogPosts from './LatestBlogPosts'

const Heropage = () => {
  return (
    <div>
        <Hero />
        <LatestBlogPosts />
        <BookOrder />
    </div>    
  )
}

export default Heropage