import { BrowserRouter, Route, Routes } from "react-router-dom";
import BlogRouter from "./blog/blog";
// Create a main routes thing with React Router 
// that can import other routes from other scripts in TypeScript
// and then export them to be used in the main App.tsx file

function BlogRoutes() {
    return (
        <BlogRouter />
    )
}

export default BlogRoutes;
