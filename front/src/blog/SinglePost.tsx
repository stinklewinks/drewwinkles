import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

const postsUrl = 'http://localhost:5000/api/posts/';

function SinglePost() {
  const { slug } = useParams();
  const [post, setPost] = useState({
    title: {
      rendered: ''
    },
    content: {
      rendered: ''
    },
    author: '',
    comments: [],
    date: '',
    tags: []
  })
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getPost() {
      try{
          const response = await fetch(`${postsUrl}/slug/${slug}`)
          const data = await response.json()
          console.log(data)
          setPost(data)
        }
      catch(error: any) {
        setError(error.message)
    }
  }
    getPost()
  }, [slug])
    return (
    <div className="w:90 m:auto flex col items:center">
        <h2 
        className="text:lg"
        dangerouslySetInnerHTML={{ __html: post.title.rendered}} />
        <p 
        className="w:80"
        dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  )
}

export default SinglePost