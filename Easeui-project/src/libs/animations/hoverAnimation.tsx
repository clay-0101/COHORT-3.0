import gsap from "gsap";

export const hoverAnimations = {
  jiggle: (el: HTMLElement) => {
    gsap.killTweensOf(el);
    gsap.to(el, {
      keyframes: [
        { scale: 1.1, rotation: 2, duration: 0.15, ease: "power1.out" },
        { scale: 0.95, rotation: -2, duration: 0.15, ease: "power1.inOut" },
        { scale: 1.05, rotation: 1, duration: 0.15, ease: "power1.out" },
        { scale: 1, rotation: 0, duration: 0.2, ease: "back.out(2)" },
      ],
    });
  },

  scale: (el: HTMLElement) => {
    gsap.to(el, { scale: 1.05, duration: 0.2, ease: "power1.out" });
  },

  bounce: (el: HTMLElement) => {
    gsap.to(el, {
      y: -5,
      duration: 0.3,
      ease: "bounce.out",
      yoyo: true,
      repeat: 1,
    });
  },

  shadowPulse: (el: HTMLElement) => {
    gsap.fromTo(
      el,
      { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
      {
        boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
        duration: 0.4,
        ease: "power2.inOut",
      }
    );
  },

  float3D: (el: HTMLElement) => {
    const img = el.querySelector("img");
    const title = el.querySelector("h3");
    const desc = el.querySelector("p");
    const footer = el.querySelector("div:last-child");

    // Base card lift + tilt
    gsap.to(el, {
      // y: -10,
      scale: 1.03,
      rotateX: 5,
      rotateY: 2,
      transformPerspective: 700,
      duration: 0.1,
      ease: "power3.out",
    });

    // Floating inner elements
    gsap.to(img, { y: -10, scale: 1.05, duration: 0.5, ease: "power3.out" });
    gsap.to(title, { y: -8, duration: 0.4, ease: "power3.out" });
    gsap.to(desc, { y: -6, duration: 0.4, ease: "power3.out" });
    gsap.to(footer, { y: -5, opacity: 1, duration: 0.4, ease: "power3.out" });
  },

  reset: (el: HTMLElement) => {
    const img = el.querySelector("img");
    const title = el.querySelector("h3");
    const desc = el.querySelector("p");
    const footer = el.querySelector("div:last-child");

    gsap.to(el, {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.1,
      ease: "power3.inOut",
    });

    gsap.to([img, title, desc, footer], {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power3.inOut",
    });
  },

  wobbleFollow: (el: HTMLElement) => {
    const rect = el.getBoundingClientRect();

    const handleMove = (e: MouseEvent) => {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * 5;
      const rotateY = ((x - centerX) / centerX) * 5;

      gsap.to(el, {
        rotationX: rotateX,
        rotationY: rotateY,
        transformPerspective: 800,
        transformOrigin: "center",
        ease: "power2.out",
        duration: 0.01,
      });
    };

    const handleLeave = () => {
      gsap.to(el, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)",
      });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  },

  none: () => {},
};
