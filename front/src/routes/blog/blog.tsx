import HomePage from "../../util/hcutil/HomePage";
import SinglePost from "../../blog/SinglePost";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function BlogRouter() {
    return (
        <BrowserRouter>
            <nav className="w:full h:10 bgc-black-300 tc-white-100 flex gap:1 items:center justify:center m:auto">
                {/* Example Links */}
                <Link className="tc-white-200 dec:none" to="/">Home</Link> | 
                <Link className="tc-white-200 dec:none" to="/contact">Contact Me</Link> | 
                <Link className="tc-white-200 dec:none" to="/blog/lets-talk-mathematics-linear-algebra">Example Blog Post</Link>
            </nav>
            
            <Routes>
                <Route path="/blog/:slug" element={<SinglePost />} />
                <Route path="/contact"element={<div>Under Construction</div>} />
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default BlogRouter;
