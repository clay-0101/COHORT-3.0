import React, { useEffect } from "react";
import gsap from "gsap";
import { useRef } from "react";

const BuildingBadge = () => {
    let sideText = useRef()

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(sideText.current, {
                y: 30,
                opacity: 0,
                duration: 0.5,
                delay : 1.9
            })
        })
        return ()=> ctx.revert()

    }, [])

    return (
        <div
            ref={sideText}
            className="pointer-events-none absolute bottom-6 right-6 z-10 text-right font-mono text-[10px] leading-relaxed text-black/80 sm:bottom-10 sm:right-10 sm:text-xs">
            <p>BUILDING THE</p>
            <p>NEXT VERSION</p>
            <p>IN PUBLIC</p>
        </div>
    );
};

export default BuildingBadge;