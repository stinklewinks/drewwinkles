import { createRoot } from 'react-dom/client';
import theFetch from './util/fetch';
import BlogRoutes from './routes/routes'
import HomePage from './util/hcutil/HomePage';

interface Post {
    id: number;
    title: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
}



const rootElement = document.getElementById('root');
const App = () => (

    <div className="lobster">App
    <BlogRoutes />
    </div>
);

if (rootElement) {
    
    const root = createRoot(rootElement);
    root.render(<HomePage />);
} else {
    console.error("Root element not found");
}
