import { useState } from "react";

const NavbarOne = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="w-full rounded-xl bg-white px-6 py-3 shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
      <div className="flex items-center justify-between">
        <div className="text-xl font-medium text-slate-900">
          Logo
        </div>

        <div className="flex items-center gap-2">
          {["Home", "About", "Customer"].map((item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`rounded-lg px-5 py-3 text-base transition-all duration-300 ${
                active === item
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-800 hover:bg-slate-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setActive("Profile")}
          className={`rounded-lg px-7 py-3 font-semibold transition-all duration-300 ${
            active === "Profile"
              ? "scale-105 bg-indigo-700 text-white shadow-lg"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }`}
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default NavbarOne;