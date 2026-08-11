import { createBrowserRouter, RouterProvider } from "react-router";
import { useEffect } from "react";
import App from "../App";
import About from "../Pages/About/About";
import Lenis from 'lenis'
import ProjectShowcase from "../Pages/Project/ShowCase";


const MyRoute = () => {
        useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />,

        }, {
            path: '/about',
            element: <About />
        },{
            path : '/project',
            element : <ProjectShowcase/>
        }
    ])
    return <RouterProvider router={router} />
}

export default MyRoute