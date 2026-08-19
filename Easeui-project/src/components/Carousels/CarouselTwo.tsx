import { useState } from "react";

const CarouselTwo = () => {
  const [active, setActive] = useState(0);

  const slides = [
    {
      title: "Creative Components",
      text: "A flexible collection of modern UI patterns.",
      number: "01",
    },
    {
      title: "Smooth Experiences",
      text: "Interfaces that feel natural, responsive and polished.",
      number: "02",
    },
    {
      title: "Made To Scale",
      text: "Build consistent interfaces faster with reusable designs.",
      number: "03",
    },
  ];

  const next = () => setActive((active + 1) % slides.length);
  const prev = () => setActive((active - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6">
      <div className="relative h-[320px] overflow-hidden rounded-xl bg-slate-950">
        {slides.map((slide, index) => {
          const position = (index - active + slides.length) % slides.length;

          return (
            <div
              key={slide.number}
              className={`absolute inset-5 rounded-2xl p-7 transition-all duration-500 ${
                position === 0
                  ? "z-30 translate-x-0 scale-100 bg-indigo-600 opacity-100"
                  : position === 1
                  ? "z-20 translate-x-5 scale-[0.94] bg-indigo-500 opacity-50"
                  : "z-10 translate-x-10 scale-[0.88] bg-indigo-400 opacity-20"
              }`}
            >
              <div className="flex h-full flex-col justify-between">
                <div className="flex justify-between">
                  <span className="text-4xl font-bold text-white/30">
                    {slide.number}
                  </span>
                  <span className="rounded-full border border-white/20 px-3 py-4 text-xs font-medium text-white">
                    UI COMPONENT
                  </span>
                </div>

                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-white">
                    {slide.title}
                  </h3>
                  <p className="mt-2 max-w-md text-sm leading-6 text-white/70">
                    {slide.text}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        <div className="absolute bottom-7 right-7 z-40 flex gap-2">
          <button
            onClick={prev}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur transition hover:bg-white hover:text-slate-950"
          >
            ←
          </button>
          <button
            onClick={next}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-slate-950 transition hover:bg-indigo-100"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselTwo;