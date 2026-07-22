import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router'
import { ContextProvider } from './Context/MyContext.jsx'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <ContextProvider>
            <App />
            <ToastContainer
                position="bottom-right"
                autoClose={1000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="dark"
            />
        </ContextProvider>
    </BrowserRouter>
)
