import React, { Suspense, lazy } from "react";

const Main = lazy(() => import("./Pages/Main/Main"));
const SecondPage = lazy(() => import("./Pages/Second/SecondPage"));
const RotatingWords = lazy(() => import("./Pages/Third/RotatingWords"));
const Bio = lazy(() => import("./Pages/Bio/Bio"));
const Footer = lazy(() => import("./Pages/Footer/Footer"));

const App = () => {
  return (
    <div className="relative w-full bg-black">
      <div className="relative z-20 pointer-events-none">
        <div className="pointer-events-auto bg-black">
          <Suspense fallback={<div className="h-screen w-full bg-black" />}>
            <Main />
            <SecondPage />
            <RotatingWords />
            <Bio />
          </Suspense>
        </div>

        <div id="footer-trigger" className="h-screen w-full pointer-events-none" aria-hidden="true" />
      </div>

      <Suspense fallback={<div className="h-screen w-full bg-black" />}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default App;