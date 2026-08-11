import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { NavLink } from "react-router";

gsap.registerPlugin(ScrollToPlugin);

const BIO_SCROLL_Y = 15841.666015625;
const FOOTER_SCROLL_Y = 17090;

const RESUME_URL =
  "https://docs.google.com/document/d/1KS3Kr_ZzuLHcf9hX2zPu9z9HnlO2zLxI74TWPA5aCvQ/edit?usp=sharing";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        {
          y: -40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.15,
          ease: "power3.out",
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  const handleProcessClick = () => {
    setIsOpen(false);

    gsap.to(window, {
      duration: 1.5,
      scrollTo: {
        y: BIO_SCROLL_Y,
        autoKill: false,
      },
      ease: "power4.inOut",
    });
  };


  return (
    <header
      ref={navRef}
      className="absolute left-0 top-0 z-50 w-full px-4 py-5 md:px-8"
    >
      <nav className="relative flex items-center justify-between">
        <NavLink
          to="/"
          onClick={handleNavClick}
          className="flex items-center gap-3"
        >
          <div className="flex h-6 w-6 items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 text-black"
            >
              <path
                d="M14.8 2.5L21.5 9.2L14.8 15.9L11.7 12.8L15.3 9.2L11.2 5.1L14.8 2.5Z"
                fill="currentColor"
              />

              <path
                d="M9.2 8.1L2.5 14.8L9.2 21.5L12.3 18.4L8.7 14.8L12.8 10.7L9.2 8.1Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <span className="text-[15px] font-medium tracking-tight text-black">
            Carry
          </span>
        </NavLink>

        <div className="absolute left-[20%] hidden items-center gap-9 md:flex lg:left-[21%]">
          <NavLink
            to="/about"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `text-[13px] font-medium transition-all duration-300 ${
                isActive
                  ? "text-black"
                  : "text-black/80 hover:opacity-50"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            onClick={handleNavClick}
            className={({ isActive }) =>
              `text-[13px] font-medium transition-all duration-300 ${
                isActive
                  ? "text-black"
                  : "text-black/80 hover:opacity-50"
              }`
            }
          >
            Work
          </NavLink>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="text-[13px] font-medium text-black/80 transition-all duration-300 hover:opacity-50"
          >
            Resume
          </a>
        </div>

        <a
          type="button"
          href="https://www.linkedin.com/in/sainicarry/"
          className="hidden rounded-full bg-white px-6 py-3 text-[13px] font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:block"
        >
          Let's talk
        </a>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-md md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className="flex w-4 flex-col gap-[5px]">
            <span
              className={`h-[1.5px] w-full bg-black transition-transform duration-300 ${
                isOpen
                  ? "translate-y-[3.25px] rotate-45"
                  : ""
              }`}
            />

            <span
              className={`h-[1.5px] w-full bg-black transition-transform duration-300 ${
                isOpen
                  ? "-translate-y-[3.25px] -rotate-45"
                  : ""
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`absolute left-4 right-4 top-[88px] overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen
            ? "visible max-h-96 translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col p-5">
          <NavLink
            to="/about"
            onClick={handleNavClick}
            className="border-b border-black/10 py-4 text-sm font-medium text-black/80"
          >
            About
          </NavLink>

          <NavLink
            to="/projects"
            onClick={handleNavClick}
            className="border-b border-black/10 py-4 text-sm font-medium text-black/80"
          >
            Work
          </NavLink>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="border-b border-black/10 py-4 text-sm font-medium text-black/80"
          >
            Resume
          </a>

          <a
            type="button"
            href="https://www.linkedin.com/in/sainicarry/"
            className="mt-4 w-fit rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.02]"
          >
            Let's talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;