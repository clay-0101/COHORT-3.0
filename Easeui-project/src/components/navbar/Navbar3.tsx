import { useState } from "react";

const NavbarThree = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="w-full rounded-2xl border border-white/70 bg-white/60 px-5 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 font-bold text-white shadow-lg shadow-indigo-200">
            C
          </div>

          <span className="font-semibold text-slate-900">
            Creative
          </span>
        </div>

        <div className="flex items-center gap-1 rounded-xl bg-slate-100 p-1">
          {["Home", "About", "Customer"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === item
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-950"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setActive("Login")}
          className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
            active === "Login"
              ? "bg-indigo-600 text-white shadow-lg"
              : "border border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:text-indigo-600"
          }`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default NavbarThree;