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
          wordSpan.className = "flex mr-[0.28em]";

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

      // Initial state
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

      // Main timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 65%",
          end: "+=215%",
          scrub: 1,
        },
      });

      // Pin section
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: "top top",
        end: "+=150%",
        pin: true,
        anticipatePin: 1,
      });

      // --------------------------------
      // SKILL ENGINE - ENTER
      // --------------------------------
      tl.to(chars1, {
        opacity: 1,
        yPercent: 0,
        rotateX: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.035,
      })

        // Hold
        .to(
          {},
          {
            duration: 0.45,
          }
        )

        // --------------------------------
        // SKILL ENGINE - EXIT
        // --------------------------------
        .to(chars1, {
          opacity: 0,
          yPercent: -70,
          rotateX: 75,
          transformPerspective: 800,
          duration: 0.8,
          ease: "power2.in",
          stagger: 0.035,
        })

        // Show PASSION DRIVE
        .set(
          phrase2Ref.current,
          {
            autoAlpha: 1,
          },
          "<0.4"
        )

        // --------------------------------
        // PASSION DRIVE - ENTER
        // --------------------------------
        .to(
          chars2,
          {
            opacity: 1,
            yPercent: 0,
            rotateX: 0,
            transformPerspective: 800,

            // Blue glow from your website
            color: "#62d9ff",
            textShadow:
              "0 0 18px rgba(98,217,255,.45), 0 0 45px rgba(98,217,255,.2)",

            duration: 0.8,
            ease: "power3.out",
            stagger: 0.035,
          },
          "<0.4"
        )

        // Hold
        .to(
          {},
          {
            duration: 0.5,
          }
        )

        // --------------------------------
        // PASSION DRIVE - EXIT
        // --------------------------------
        .to(chars2, {
          opacity: 0,
          yPercent: -70,
          rotateX: 75,
          transformPerspective: 800,

          // Remove glow while exiting
          textShadow: "0 0 0 transparent",

          duration: 0.8,
          ease: "power2.in",
          stagger: 0.035,
        })

        // Hide PASSION DRIVE
        .set(phrase2Ref.current, {
          autoAlpha: 0,
        });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="bg-black min-h-screen w-full overflow-x-hidden font-sans m-0 p-0">
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
      >
        <div className="relative w-full h-screen flex items-center justify-center">


          <h1
            ref={phrase1Ref}
            className="
              avenir
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-full
              text-[clamp(60px,13vw,195px)]
              tracking-[-0.04em]
              leading-none
              whitespace-nowrap
              flex
              flex-row
              justify-center
              items-center
              text-[#f5f5f5]
              m-0
              p-0
            "
          />

    
          <h1
            ref={phrase2Ref}
            className="
              avenir
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              w-full
              text-[clamp(60px,13vw,195px)]
              tracking-[-0.04em]
              leading-none
              whitespace-nowrap
              flex
              flex-row
              justify-center
              items-center
              text-[#62d9ff]
              m-0
              p-0
            "
          />

        </div>
      </section>
    </main>
  );
};

export default RotatingWords;