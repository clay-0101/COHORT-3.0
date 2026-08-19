import { useState } from "react";

const CarouselThree = () => {
  const [active, setActive] = useState(0);

  const slides = [
    {
      title: "Design Without Limits",
      text: "A clean visual system for building expressive digital products.",
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Think. Create. Ship.",
      text: "Turn ideas into refined interfaces with a modern component system.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=900&q=80",
    },
    {
      title: "Crafted For The Web",
      text: "Elegant layouts with interaction at the center of every experience.",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const next = () => setActive((active + 1) % slides.length);
  const prev = () => setActive((active - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="grid min-h-[330px] overflow-hidden rounded-2xl bg-slate-950 md:grid-cols-2">
        <div className="relative overflow-hidden">
          {slides.map((slide, index) => (
            <img
              key={slide.image}
              src={slide.image}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                active === index
                  ? "scale-100 opacity-100"
                  : "scale-110 opacity-0"
              }`}
            />
          ))}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />

          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900">
            EASEL UI
          </span>
        </div>

        <div className="flex flex-col justify-between p-7 md:p-9">
          <div>
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-400">
                Featured
              </span>
              <span className="text-sm text-slate-500">
                {active + 1} / {slides.length}
              </span>
            </div>

            <h3 className="text-3xl font-bold leading-tight tracking-tight text-white">
              {slides[active].title}
            </h3>

            <p className="mt-4 text-sm leading-6 text-slate-400">
              {slides[active].text}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActive(index)}
                  className={`h-1.5 rounded-full transition-all ${
                    active === index
                      ? "w-8 bg-indigo-500"
                      : "w-2 bg-slate-700"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={prev}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-300 transition hover:border-indigo-500 hover:bg-indigo-600 hover:text-white"
              >
                ←
              </button>
              <button
                onClick={next}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white transition hover:bg-indigo-500"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselThree;