import normalImage from "../../../assets/normal.png";
import anatomyImage from "../../../assets/anatomy.png";

import normalMobileImage from "../../../assets/normal-mobile.png";
import anatomyMobileImage from "../../../assets/anatomy-mobile.png";

import useReveal from "../hooks/bgImg";

function Background() {
  const { containerRef, anatomyRef } = useReveal();

  return (
    <main
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Normal Image */}
      <picture className="absolute inset-0 block w-full h-full">
        <source media="(max-width: 767px)" srcSet={normalMobileImage} />
        <img
          src={normalImage}
          alt="Normal"
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
        />
      </picture>

<div
  className="
    pointer-events-none
    absolute inset-0
    z-[1]
    bg-[linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)]
    bg-[size:160px_160px]
  "
/>

      {/* Anatomical Image */}
      <div
        ref={anatomyRef}
        className="
          absolute inset-0
          w-full h-full
          z-[2]
          opacity-0
          transition-opacity
          duration-200
          ease-out
          [mask-image:radial-gradient(circle_350px_at_var(--mouse-x)_var(--mouse-y),rgba(0,0,0,1)_0%,rgba(0,0,0,1)_45%,rgba(0,0,0,0.9)_58%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.25)_84%,rgba(0,0,0,0)_100%)]
          [-webkit-mask-image:radial-gradient(circle_350px_at_var(--mouse-x)_var(--mouse-y),rgba(0,0,0,1)_0%,rgba(0,0,0,1)_45%,rgba(0,0,0,0.9)_58%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.25)_84%,rgba(0,0,0,0)_100%)]
        "
      >
        <picture className="block w-full h-full">
          <source media="(max-width: 767px)" srcSet={anatomyMobileImage} />
          <img
            src={anatomyImage}
            alt="Anatomical"
            className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
          />
        </picture>
      </div>
    </main>
  );
}

export default Background;