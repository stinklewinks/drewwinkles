import { useEffect, useState } from "react"

const postsUrl = 'http://localhost:5000/api/posts/1';

function SinglePost() {
  const [post, setPost] = useState({
    title: '',
    content: '',
    author: '',
    comments: [],
    date: '',
    tags: []
  })
  
  useEffect(() => {
    async function getPost() {
      try{
          const response = await fetch(`${postsUrl}`)
          const data = await response.json()
          setPost(data)
        }
      catch(error) {
        console.log(error)
    }
  }
    getPost()
  }, [])
    return (
    <>
        <h2>{post.title}</h2>
        <div>
          {post.content}
        </div>
        {/* Semantic Author Box */}
        <div>
            <h3>Author Name</h3>
            <p>Author Bio</p>
        </div>
        <div>
            <h3>Comments</h3>
            <ul>
                <li>Comment 1</li>
                <li>Comment 2</li>
                <li>Comment 3</li>
            </ul>
        </div>
    </>
  )
}

export default SinglePost