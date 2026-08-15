import gsap from "gsap";

export const entranceAnimations = {
  fadeIn: (el: HTMLElement) =>
    gsap.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.8 }),
  scaleIn: (el: HTMLElement) =>
    gsap.fromTo(
      el,
      { scale: 0 },
      { scale: 1, duration: 0.6, ease: "back.out(1.7)" }
    ),
  slideUp: (el: HTMLElement) =>
    gsap.fromTo(el, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }),
  bounceIn: (el: HTMLElement) =>
    gsap.fromTo(
      el,
      { scale: 0 },
      { scale: 1, duration: 0.8, ease: "bounce.out" }
    ),
  none: () => {},
};
