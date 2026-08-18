import { useState } from "react";

const NavbarFour = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="w-full border-b border-slate-300 bg-transparent px-3 py-4">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tight text-slate-900">
          Studio<span className="text-indigo-600">.</span>
        </div>

        <div className="flex items-center gap-8">
          {["Home", "About", "Customer", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className="group relative py-2 text-sm font-medium text-slate-700"
            >
              <span
                className={`transition-colors duration-300 ${
                  active === item
                    ? "text-indigo-600"
                    : "group-hover:text-indigo-600"
                }`}
              >
                {item}
              </span>

              <span
                className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-indigo-600 transition-all duration-300 ${
                  active === item
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => setActive("Start")}
          className={`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 ${
            active === "Start"
              ? "scale-105 bg-indigo-600 text-white shadow-lg shadow-indigo-200"
              : "bg-slate-900 text-white hover:bg-indigo-600"
          }`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavbarFour;