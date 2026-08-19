
interface propsDataType {
    prop : string,
    type : string ,
    default : string,
    description : string
}
interface returnCodeType {
    carouselOneCode: string,
    carouselTwoCode: string,
    carouselThreeCode: string,
    propsData : propsDataType []
}

const useCarousel = ():returnCodeType => {

    let carouselOneCode = `import { useState } from "react";

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
                className={\`h-1.5 rounded-full transition-all \${
                  active === index ? "w-8 bg-indigo-600" : "w-2 bg-slate-300"
                }\`}
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

export default CarouselOne;`

    let carouselTwoCode = `import { useState } from "react";

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
              className={\`absolute inset-5 rounded-2xl p-7 transition-all duration-500 \${
                position === 0
                  ? "z-30 translate-x-0 scale-100 bg-indigo-600 opacity-100"
                  : position === 1
                  ? "z-20 translate-x-5 scale-[0.94] bg-indigo-500 opacity-50"
                  : "z-10 translate-x-10 scale-[0.88] bg-indigo-400 opacity-20"
              }\`}
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

export default CarouselTwo;`

    let carouselThreeCode = `import { useState } from "react";

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
              className={\`absolute inset-0 h-full w-full object-cover transition-all duration-700 \${
                active === index
                  ? "scale-100 opacity-100"
                  : "scale-110 opacity-0"
              }\`}
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
                  className={\`h-1.5 rounded-full transition-all \${
                    active === index
                      ? "w-8 bg-indigo-500"
                      : "w-2 bg-slate-700"
                  }\`}
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

export default CarouselThree;`

const propsData = [
    {
        prop: "slides",
        type: "object[]",
        default: "[]",
        description: "Defines the content displayed in the carousel slides.",
    },
    {
        prop: "active",
        type: "number",
        default: "0",
        description: "Defines the currently active slide.",
    },
    {
        prop: "onChange",
        type: "(index: number) => void",
        default: "-",
        description: "Callback triggered when the active slide changes.",
    },
    {
        prop: "showControls",
        type: "boolean",
        default: "true",
        description: "Controls whether the previous and next buttons are displayed.",
    },
    {
        prop: "showIndicators",
        type: "boolean",
        default: "true",
        description: "Controls whether slide indicators are displayed.",
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description: "Additional custom class names for styling the carousel.",
    },
];
    return {
        carouselOneCode,
        carouselTwoCode,
        carouselThreeCode,
        propsData
    }
}

export default useCarousel