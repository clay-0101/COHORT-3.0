export const focusAnimations = {
  glow: (el: HTMLElement) => {
    gsap.fromTo(
      el,
      { boxShadow: "0 0 0 rgba(0,0,0,0)" },
      { boxShadow: "0 8px 30px rgba(59,130,246,0.12)", duration: 0.35 }
    );
  },
  reset: (el: HTMLElement) => {
    gsap.to(el, { boxShadow: "0 0 0 rgba(0,0,0,0)", duration: 0.3 });
  },
};
