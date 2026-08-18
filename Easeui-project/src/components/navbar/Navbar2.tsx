import { useState } from "react";

const NavbarTwo = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-3xl items-center justify-between rounded-full bg-white p-2 shadow-[0_8px_25px_rgba(0,0,0,0.12)]">
        {["Home", "Products", "Blog", "About"].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={`flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-500 ${
              active === item
                ? "scale-105 bg-indigo-600 text-white shadow-md"
                : "text-slate-800 hover:bg-slate-100"
            }`}
          >
            {item}

            {active === item && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-bold text-indigo-600">
                4
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavbarTwo;