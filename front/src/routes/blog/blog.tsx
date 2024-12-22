import SinglePost from "../../blog/SinglePost";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function BlogRouter() {
    return( 
    <BrowserRouter>
        <Routes>
            <Route path="/blog" element={<div>Blog</div>} />
            <Route path="/blog/:slug" element={<SinglePost />} />
            <Route path="/blog/:year/:month" element={<div>Blog</div>} />
        </Routes>
    </BrowserRouter>
    );

}

export default BlogRouter;