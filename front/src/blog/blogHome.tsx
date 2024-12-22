const getAllPosts = async () => {
    const response = fetch('http://localhost:5000/api/posts')
    const allPosts = await response;
    console.log(allPosts);
}; 


function BlogHome() {
    getAllPosts();
    return (
    <div>BlogHome</div>
  )
}

export default BlogHome