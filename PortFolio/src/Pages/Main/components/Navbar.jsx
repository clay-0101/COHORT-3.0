import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import {useNavigate} from 'react-router'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);
  let navigate = useNavigate()

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
          ease: "power3.out",
        }
      );
    }, navRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      ref={navRef}
      className="absolute left-0 top-0 z-50 w-full px-4 py-5 md:px-8"
    >
      <nav className="relative flex items-center justify-between">

        {/* LOGO */}
        <a
          href="/"
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
        </a>

        {/* DESKTOP LINKS */}
        <div className="absolute left-[20%] hidden items-center gap-9 md:flex lg:left-[21%]">
          <button
            onClick={()=>navigate('/about')}
            className="text-[13px] font-medium text-black/80 transition-opacity duration-300 hover:opacity-50"
          >
            About
          </button>

          <a
            href="#work"
            className="text-[13px] font-medium text-black/80 transition-opacity duration-300 hover:opacity-50"
          >
            Work
          </a>

          <a
            href="#process"
            className="text-[13px] font-medium text-black/80 transition-opacity duration-300 hover:opacity-50"
          >
            Process
          </a>

          <a
            href="#experiments"
            className="text-[13px] font-medium text-black/80 transition-opacity duration-300 hover:opacity-50"
          >
            Experiments
          </a>
        </div>

        {/* CONTACT BUTTON */}
        <a
          href="https://www.linkedin.com/in/sainicarry/"
          className="hidden rounded-full bg-white px-6 py-3 text-[13px] font-medium text-black shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md md:block"
        >
          Let's talk
        </a>

        {/* MOBILE BUTTON */}
        <button
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

      {/* MOBILE MENU */}
      <div
        className={`absolute left-4 right-4 top-[88px] overflow-hidden rounded-2xl bg-white/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isOpen
            ? "visible max-h-96 translate-y-0 opacity-100"
            : "invisible max-h-0 -translate-y-3 opacity-0"
        }`}
      >
        <div className="flex flex-col p-5">
          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="border-b border-black/10 py-4 text-sm font-medium text-black"
          >
            About
          </a>

          <a
            href="#work"
            onClick={() => setIsOpen(false)}
            className="border-b border-black/10 py-4 text-sm font-medium text-black"
          >
            Work
          </a>

          <a
            href="#process"
            onClick={() => setIsOpen(false)}
            className="border-b border-black/10 py-4 text-sm font-medium text-black"
          >
            Process
          </a>

          <a
            href="#experiments"
            onClick={() => setIsOpen(false)}
            className="border-b border-black/10 py-4 text-sm font-medium text-black"
          >
            Experiments
          </a>

          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 w-fit rounded-full bg-black px-5 py-3 text-sm font-medium text-white"
          >
            Let's talk
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;