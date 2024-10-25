import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const App = () => (
    <div>App</div>
);
if (rootElement) {
    
    const root = createRoot(rootElement);
    root.render(<App />);
} else {
    console.error("Root element not found");
}
