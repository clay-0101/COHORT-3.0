import { createBrowserRouter, RouterProvider } from "react-router";
import { useEffect, Suspense, lazy } from "react";
import Lenis from "lenis";

const App = lazy(() => import("../App"));
const About = lazy(() => import("../Pages/About/About"));
const ShowCase = lazy(() => import("../Pages/Project/ShowCase"));

const PageFallback = () => <div className="h-screen w-full bg-black" />;

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
      path: "/",
      element: (
        <Suspense fallback={<PageFallback />}>
          <App />
        </Suspense>
      ),
    },
    {
      path: "/about",
      element: (
        <Suspense fallback={<PageFallback />}>
          <About />
        </Suspense>
      ),
    },
    {
      path: "/projects",
      element: (
        <Suspense fallback={<PageFallback />}>
          <ShowCase />
        </Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

export default MyRoute;