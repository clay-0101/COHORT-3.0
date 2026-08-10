import React, { useEffect } from 'react'
import Main from './Pages/Main/Main'
import SecondPage from './Pages/Second/SecondPage'
import Lenis from 'lenis'
import CardsGrid from './Pages/Second/components/CardGrid'


const App = () => {
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
    return (
        <div >
            <Main />
            <SecondPage />
        
        </div>
    )
}

export default App