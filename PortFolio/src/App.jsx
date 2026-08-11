import React from "react";
import Main from "./Pages/Main/Main";
import SecondPage from "./Pages/Second/SecondPage";
import RotatingWords from "./Pages/Third/RotatingWords";
import Bio from "./Pages/Bio/Bio";
import Footer from "./Pages/Footer/Footer";

const App = () => {
  return (
    <div className="relative w-full bg-black">
      
  
      <div className="relative z-20 pointer-events-none">
 
        <div className="pointer-events-auto bg-black">
          <Main />
          <SecondPage />
          <RotatingWords />
          <Bio />
        </div>

       
        <div
          id="footer-trigger"
          className="h-screen w-full pointer-events-none"
          aria-hidden="true"
        />
      </div>

      <Footer />
    </div>
  );
};

export default App;