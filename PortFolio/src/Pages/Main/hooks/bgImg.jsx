import React from 'react'
import { useEffect, useRef } from "react";

const useReveal = () => {

    const containerRef = useRef(null);
    const anatomyRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const anatomy = anatomyRef.current;

        if (!container || !anatomy) return;

        let targetX = 0;
        let targetY = 0;

        let currentX = 0;
        let currentY = 0;

        let animationFrame;

        const handleMouseMove = (e) => {
            const rect = container.getBoundingClientRect();

            targetX = e.clientX - rect.left;
            targetY = e.clientY - rect.top;

            anatomy.classList.add("opacity-100");
        };

        const handleMouseLeave = () => {
            anatomy.classList.remove("opacity-100");
        };

        const animate = () => {
            currentX += (targetX - currentX) * 0.12;
            currentY += (targetY - currentY) * 0.12;

            anatomy.style.setProperty("--mouse-x", `${currentX}px`);
            anatomy.style.setProperty("--mouse-y", `${currentY}px`);

            animationFrame = requestAnimationFrame(animate);
        };

        container.addEventListener("mousemove", handleMouseMove);
        container.addEventListener("mouseleave", handleMouseLeave);

        animate();

        return () => {
            container.removeEventListener("mousemove", handleMouseMove);
            container.removeEventListener("mouseleave", handleMouseLeave);

            cancelAnimationFrame(animationFrame);
        };
    }, []);


    return {
     containerRef ,
     anatomyRef  
    }
}

export default useReveal