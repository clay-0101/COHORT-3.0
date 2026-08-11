import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RotatingWords = () => {
  const heroRef = useRef(null);
  const phrase1Ref = useRef(null);
  const phrase2Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      function buildPhrase(el, text) {
        el.innerHTML = "";

        text.split(" ").forEach((word) => {
          const wordSpan = document.createElement("span");

          wordSpan.className =
            "inline-flex mr-[0.22em] whitespace-nowrap";

          [...word].forEach((ch) => {
            const charSpan = document.createElement("span");

            charSpan.className =
              "char inline-block will-change-transform origin-[50%_100%]";

            charSpan.textContent = ch;
            wordSpan.appendChild(charSpan);
          });

          el.appendChild(wordSpan);
        });

        return el.querySelectorAll(".char");
      }

      const chars1 = buildPhrase(
        phrase1Ref.current,
        "SKILL ENGINE"
      );

      const chars2 = buildPhrase(
        phrase2Ref.current,
        "PASSION DRIVE"
      );

      gsap.set(chars1, {
        opacity: 0,
        yPercent: 70,
        rotateX: -70,
        transformPerspective: 800,
      });

      gsap.set(chars2, {
        opacity: 0,
        yPercent: 70,
        rotateX: -70,
        transformPerspective: 800,
      });

      gsap.set(phrase2Ref.current, {
        autoAlpha: 0,
      });

      const mm = gsap.matchMedia();

      mm.add("(min-width: 769px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 65%",
            end: "+=215%",
            scrub: 1,
          },
        });

        ScrollTrigger.create({
          trigger: heroRef.current,
          start: "top top",
          end: "+=150%",
          pin: true,
          anticipatePin: 1,
        });

        tl.to(chars1, {
          opacity: 1,
          yPercent: 0,
          rotateX: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.035,
        })
          .to(
            {},
            {
              duration: 0.45,
            }
          )
          .to(chars1, {
            opacity: 0,
            yPercent: -70,
            rotateX: 75,
            transformPerspective: 800,
            duration: 0.8,
            ease: "power2.in",
            stagger: 0.035,
          })
          .set(
            phrase2Ref.current,
            {
              autoAlpha: 1,
            },
            "<0.4"
          )
          .to(
            chars2,
            {
              opacity: 1,
              yPercent: 0,
              rotateX: 0,
              transformPerspective: 800,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.035,
            },
            "<0.4"
          )
          .to(
            {},
            {
              duration: 0.5,
            }
          )
          .to(chars2, {
            opacity: 0,
            yPercent: -70,
            rotateX: 75,
            transformPerspective: 800,
            duration: 0.8,
            ease: "power2.in",
            stagger: 0.035,
          })
          .set(phrase2Ref.current, {
            autoAlpha: 0,
          });
      });

      mm.add("(max-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "+=180%",
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        tl.to(chars1, {
          opacity: 1,
          yPercent: 0,
          rotateX: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.035,
        })
          .to(
            {},
            {
              duration: 0.35,
            }
          )
          .to(chars1, {
            opacity: 0,
            yPercent: -70,
            rotateX: 75,
            duration: 0.7,
            ease: "power2.in",
            stagger: 0.03,
          })
          .set(
            phrase2Ref.current,
            {
              autoAlpha: 1,
            },
            "<0.35"
          )
          .to(
            chars2,
            {
              opacity: 1,
              yPercent: 0,
              rotateX: 0,
              duration: 0.8,
              ease: "power3.out",
              stagger: 0.035,
            },
            "<0.35"
          )
          .to(
            {},
            {
              duration: 0.4,
            }
          )
          .to(chars2, {
            opacity: 0,
            yPercent: -70,
            rotateX: 75,
            duration: 0.7,
            ease: "power2.in",
            stagger: 0.03,
          })
          .set(phrase2Ref.current, {
            autoAlpha: 0,
          });
      });

      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });

      return () => {
        mm.revert();
      };
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="m-0 min-h-screen w-full overflow-x-hidden bg-black p-0 font-sans">
      <section
        ref={heroRef}
        className="relative flex h-[100svh] min-h-[500px] w-full items-center justify-center overflow-hidden bg-black"
      >
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden px-4 sm:px-6">
          <h1
            ref={phrase1Ref}
            className="
              avenir
              absolute
              left-1/2
              top-1/2
              flex
              w-full
              max-w-full
              -translate-x-1/2
              -translate-y-1/2
              flex-row
              items-center
              justify-center
              overflow-hidden
              whitespace-nowrap
              text-center
              text-[clamp(38px,11vw,195px)]
              leading-none
              tracking-[-0.055em]
              text-[#f5f5f5]
              m-0
              p-0
              sm:text-[clamp(55px,12vw,150px)]
              lg:text-[clamp(80px,13vw,195px)]
            "
          />

          <h1
            ref={phrase2Ref}
            className="
              avenir
              absolute
              left-1/2
              top-1/2
              flex
              w-full
              max-w-full
              -translate-x-1/2
              -translate-y-1/2
              flex-row
              items-center
              justify-center
              overflow-hidden
              whitespace-nowrap
              text-center
              text-[clamp(38px,11vw,195px)]
              leading-none
              tracking-[-0.055em]
              text-[#5B8DEF]
              m-0
              p-0
              sm:text-[clamp(55px,12vw,150px)]
              lg:text-[clamp(80px,13vw,195px)]
            "
          />
        </div>
      </section>
    </main>
  );
};

export default RotatingWords;