import { createBrowserRouter, RouterProvider } from "react-router";
import { useEffect } from "react";
import App from "../App";
import About from "../Pages/About/About";
import Lenis from 'lenis'
import ShowCase from "../Pages/Project/ShowCase";
import Bio from "../Pages/Bio/Bio";


const MyRoute = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            smoothTouch: false, 
            touchMultiplier: 2,
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
        }, {
            path: '/projects',
            element: <ShowCase />
        }
    ])
    return <RouterProvider router={router} />
}

export default MyRoute