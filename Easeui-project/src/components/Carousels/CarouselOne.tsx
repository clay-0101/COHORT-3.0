import { useState } from "react";

const CarouselOne = () => {
  const [active, setActive] = useState(0);

  const slides = [
    { title: "Build Beautiful Interfaces", text: "Modern components designed for clean and expressive experiences.", tag: "01" },
    { title: "Simple. Powerful. Flexible.", text: "Create polished interfaces without unnecessary complexity.", tag: "02" },
    { title: "Designed For Developers", text: "Reusable components that fit naturally into your workflow.", tag: "03" },
  ];

  return (
    <div className="w-full max-w-3xl rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="relative flex min-h-[280px] flex-col justify-between overflow-hidden rounded-xl bg-slate-100 p-8">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
            {slides[active].tag}
          </span>
          <span className="text-sm font-medium text-slate-400">
            {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

        <div>
          <h3 className="max-w-xl text-3xl font-bold tracking-tight text-slate-950">
            {slides[active].title}
          </h3>
          <p className="mt-3 max-w-lg text-sm leading-6 text-slate-500">
            {slides[active].text}
          </p>
        </div>

        <div className="flex items-end justify-between">
          <div className="flex gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`h-1.5 rounded-full transition-all ${
                  active === index ? "w-8 bg-indigo-600" : "w-2 bg-slate-300"
                }`}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActive((active - 1 + slides.length) % slides.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:border-indigo-600 hover:bg-indigo-600 hover:text-white"
            >
              ←
            </button>
            <button
              onClick={() => setActive((active + 1) % slides.length)}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-white transition hover:bg-indigo-700"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselOne;