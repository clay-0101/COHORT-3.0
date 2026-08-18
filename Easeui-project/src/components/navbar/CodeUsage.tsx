
interface PropItem {
  prop: string;
  type: string;
  default: string;
  description: string;
}
interface usageCodeReturn {
  navbarOneUsageCode : string,
    navbarFourUsageCode: string,
    navbarThreeUsageCode: string,
    navbarTwoUsageCode: string,
    propsData : PropItem[]
}
const useNavbarCode = ():usageCodeReturn=>{




    const navbarOneUsageCode = `import { useState } from "react";

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
              className={\`rounded-lg px-5 py-3 text-base transition-all duration-300 \${
                active === item
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-800 hover:bg-slate-100"
              }\`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setActive("Profile")}
          className={\`rounded-lg px-7 py-3 font-semibold transition-all duration-300 \${
            active === "Profile"
              ? "scale-105 bg-indigo-700 text-white shadow-lg"
              : "bg-indigo-600 text-white hover:bg-indigo-700"
          }\`}
        >
          Profile
        </button>
      </div>
    </div>
  );
};

export default NavbarOne;`;
const navbarTwoUsageCode = `import { useState } from "react";

const NavbarTwo = () => {
  const [active, setActive] = useState("Home");

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full max-w-3xl items-center justify-between rounded-full bg-white p-2 shadow-[0_8px_25px_rgba(0,0,0,0.12)]">
        {["Home", "Products", "Blog", "About"].map((item) => (
          <button
            key={item}
            onClick={() => setActive(item)}
            className={\`flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-500 \${
              active === item
                ? "scale-105 bg-indigo-600 text-white shadow-md"
                : "text-slate-800 hover:bg-slate-100"
            }\`}
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

export default NavbarTwo;`;
const navbarThreeUsageCode = `import { useState } from "react";

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
              className={\`rounded-lg px-5 py-2.5 text-sm font-medium transition-all duration-300 \${
                active === item
                  ? "bg-indigo-600 text-white shadow-md"
                  : "text-slate-600 hover:text-slate-950"
              }\`}
            >
              {item}
            </button>
          ))}
        </div>

        <button
          onClick={() => setActive("Login")}
          className={\`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 \${
            active === "Login"
              ? "bg-indigo-600 text-white shadow-lg"
              : "border border-slate-200 bg-white text-slate-800 hover:border-indigo-200 hover:text-indigo-600"
          }\`}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default NavbarThree;`;

const navbarFourUsageCode = `import { useState } from "react";

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
                className={\`transition-colors duration-300 \${
                  active === item
                    ? "text-indigo-600"
                    : "group-hover:text-indigo-600"
                }\`}
              >
                {item}
              </span>

              <span
                className={\`absolute bottom-0 left-0 h-0.5 rounded-full bg-indigo-600 transition-all duration-300 \${
                  active === item
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }\`}
              />
            </button>
          ))}
        </div>

        <button
          onClick={() => setActive("Start")}
          className={\`rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 \${
            active === "Start"
              ? "scale-105 bg-indigo-600 text-white shadow-lg shadow-indigo-200"
              : "bg-slate-900 text-white hover:bg-indigo-600"
          }\`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default NavbarFour;`;
const propsData = [
    {
        prop: "active",
        type: "string",
        default: `"Home"`,
        description:
            "Defines the currently active navigation item.",
    },
    {
        prop: "items",
        type: "string[]",
        default: `["Home", "About", "Customer"]`,
        description:
            "Defines the navigation items displayed inside the navbar.",
    },
    {
        prop: "logo",
        type: "string | React.ReactNode",
        default: `"Logo"`,
        description:
            "Content displayed as the navbar logo or brand.",
    },
    {
        prop: "buttonText",
        type: "string",
        default: `"Profile"`,
        description:
            "Defines the text displayed inside the navbar action button.",
    },
    {
        prop: "onChange",
        type: "(item: string) => void",
        default: "-",
        description:
            "Callback triggered when a navigation item is clicked.",
    },
    {
        prop: "className",
        type: "string",
        default: "-",
        description:
            "Additional custom class names for styling the navbar.",
    },
];
return {
    navbarOneUsageCode,
    navbarFourUsageCode,
    navbarThreeUsageCode,
    navbarTwoUsageCode,
    propsData

}
}
export default useNavbarCode