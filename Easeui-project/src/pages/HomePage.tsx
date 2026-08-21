import { useState } from "react";



const display = "font-['Space_Grotesk',_sans-serif]";
const mono = "font-['JetBrains_Mono',_monospace]";

export default function HomePage() {
  return (
    <div className="bg-white dark:bg-[#0B0B12] text-[#0F0F14] dark:text-[#F2F2F5]">
      <FadeStyles />
      <Hero />
      <LiveShowcase />
      <Features />
      <ComponentsGrid />
      <QuickStart />
      <CtaBanner />
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-gray-100 dark:border-white/5">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#6D5EF8]/10 blur-3xl dark:bg-[#6D5EF8]/20"
      />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div
          className="opacity-0 [animation:fadeUp_0.6s_ease_forwards]"
          style={{ animationDelay: "0ms" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-3 py-1 text-xs text-gray-500 dark:text-gray-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#6D5EF8]" />
            v2.4 &middot; open source &middot; MIT licensed
          </span>
        </div>

        <h1
          className={`${display} opacity-0 [animation:fadeUp_0.6s_ease_forwards] mt-6 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-tight md:text-6xl`}
          style={{ animationDelay: "80ms" }}
        >
          Components that feel like they were{" "}
          <span className="text-[#6D5EF8]">made for your product</span>.
        </h1>

        <p
          className="opacity-0 [animation:fadeUp_0.6s_ease_forwards] mt-6 max-w-xl text-base leading-relaxed text-gray-600 dark:text-gray-400 md:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          EaseUi is a set of accessible, themeable React components you copy
          straight into your codebase. No black-box dependency, no fighting
          the defaults — just components you can actually read.
        </p>

        <div
          className="opacity-0 [animation:fadeUp_0.6s_ease_forwards] mt-9 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#components"
            className="rounded-lg bg-[#6D5EF8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#5A4CE0]"
          >
            Browse components
          </a>
          <CopyCommand command="npx easeui init" />
        </div>
      </div>
    </section>
  );
}

function CopyCommand({ command }: { command: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable — fail silently, button still shows the command
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`${mono} group flex items-center gap-3 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 transition-colors hover:border-gray-300 dark:hover:border-white/20`}
    >
      <span className="text-gray-400 dark:text-gray-500">$</span>
      <span>{command}</span>
      {copied ? (
        <CheckIcon className="h-3.5 w-3.5 text-[#6D5EF8]" />
      ) : (
        <CopyIcon className="h-3.5 w-3.5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300" />
      )}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Live showcase — echoes the "Preview" panel used on doc pages        */
/* ------------------------------------------------------------------ */

function LiveShowcase() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10">
        <div className="flex items-center justify-between border-b border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.02] px-5 py-3">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Preview
          </span>
          <a
            href="#components"
            className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-[#6D5EF8]"
          >
            <CodeIcon className="h-3.5 w-3.5" />
            View code
          </a>
        </div>

        <div className="grid grid-cols-1 gap-px bg-gray-100 dark:bg-white/5 md:grid-cols-2">
          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-3 bg-gray-50 dark:bg-[#0B0B12] p-8">
            <button className="rounded-lg bg-[#6D5EF8] px-4 py-2 text-sm font-medium text-white">
              Primary
            </button>
            <button className="rounded-lg border border-gray-200 dark:border-white/10 px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300">
              Outline
            </button>
            <button className="rounded-lg bg-[#14121F] px-4 py-2 text-sm font-medium text-white">
              Dark
            </button>
          </div>

          {/* Input + tags */}
          <div className="flex flex-col justify-center gap-3 bg-gray-50 dark:bg-[#0B0B12] p-8">
            <input
              readOnly
              value="Search components…"
              className="w-full rounded-lg border border-gray-200 dark:border-white/10 bg-white dark:bg-white/5 px-3 py-2 text-sm text-gray-500 outline-none"
            />
            <div className="flex gap-2">
              {["Accessible", "Themeable", "Typed"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#6D5EF8]/10 px-2.5 py-1 text-xs font-medium text-[#6D5EF8]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="flex items-center justify-center bg-gray-50 dark:bg-[#0B0B12] p-8">
            <div className="w-full max-w-xs rounded-xl border border-gray-200 dark:border-white/10 bg-white dark:bg-white/[0.03] p-4 shadow-sm">
              <div className="mb-3 h-20 w-full rounded-lg bg-gradient-to-br from-[#6D5EF8]/20 to-[#6D5EF8]/5" />
              <p className="text-sm font-medium">Card title</p>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                A compact surface for grouped content.
              </p>
            </div>
          </div>

          {/* Tooltip */}
          <div className="flex items-center justify-center bg-gray-50 dark:bg-[#0B0B12] p-8">
            <div className="relative">
              <button className="rounded-lg border border-gray-200 dark:border-white/10 px-4 py-2 text-sm text-gray-700 dark:text-gray-300">
                Hover me
              </button>
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 rounded-md bg-[#14121F] px-2.5 py-1 text-xs text-white">
                A helpful tooltip
                <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[#14121F]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Features                                                            */
/* ------------------------------------------------------------------ */

const FEATURES = [
  {
    title: "Own your code",
    body: "Every component is copied into your project, not pulled from node_modules. Read it, edit it, make it yours.",
    icon: FolderIcon,
  },
  {
    title: "Accessible by default",
    body: "Keyboard navigation, focus states, and ARIA roles are handled from the start, not bolted on afterward.",
    icon: ShieldIcon,
  },
  {
    title: "Themeable in one file",
    body: "Every variant, radius, and animation is a token. Swap the palette without hunting through internals.",
    icon: PaletteIcon,
  },
];

function Features() {
  return (
    <section className="border-y border-gray-100 dark:border-white/5 bg-gray-50/60 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {FEATURES.map(({ title, body, icon: Icon }) => (
            <div key={title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6D5EF8]/10 text-[#6D5EF8]">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className={`${display} mt-4 text-lg font-semibold`}>
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Components grid                                                     */
/* ------------------------------------------------------------------ */

const COMPONENTS = [
  { name: "Button", desc: "Actions, in every variant.", icon: ButtonIcon },
  { name: "Card", desc: "Group related content.", icon: CardIcon },
  { name: "Modal", desc: "Focus the user on one task.", icon: ModalIcon },
  { name: "Input", desc: "Collect text, styled and typed.", icon: InputIcon },
  { name: "Navbar", desc: "Wayfinding for your app.", icon: NavbarIcon },
  { name: "Carousel", desc: "Cycle through content.", icon: CarouselIcon },
  { name: "Tooltip", desc: "Context, right on hover.", icon: TooltipIcon },

];

function ComponentsGrid() {
  return (
    <section id="components" className="mx-auto max-w-6xl px-6 py-16 md:py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className={`${display} text-2xl font-semibold md:text-3xl`}>
            Everything you need to ship a UI
          </h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Eight components today, more shipping every release.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {COMPONENTS.map(({ name, desc, icon: Icon }) => (
          <a
            key={name}
            href={`/components/${name.toLowerCase()}`}
            className="group rounded-xl border border-gray-200 dark:border-white/10 p-5 transition-all hover:-translate-y-0.5 hover:border-[#6D5EF8]/40 hover:shadow-sm"
          >
            <Icon className="h-5 w-5 text-gray-400 group-hover:text-[#6D5EF8]" />
            <p className="mt-4 text-sm font-medium">{name}</p>
            <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
              {desc}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}


function QuickStart() {
  return (
    <section className="border-t border-gray-100 dark:border-white/5">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className={`${display} text-2xl font-semibold md:text-3xl`}>
              Up and running in a minute
            </h2>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Run the CLI, pick a component, and it lands directly in your
              project — fully typed, ready to edit.
            </p>
            <a
              href="#/docs/installation"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-[#6D5EF8]"
            >
              Read the installation guide
              <ArrowRightIcon className="h-3.5 w-3.5" />
            </a>
          </div>

          <div
            className={`${mono} overflow-hidden rounded-xl border border-gray-200 dark:border-white/10 bg-[#14121F] text-sm text-gray-200 shadow-sm`}
          >
            <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            </div>
            <div className="space-y-2 px-5 py-5 leading-relaxed">
              <p>
                <span className="text-[#6D5EF8]">$</span> npx easeui init
              </p>
              <p>
                <span className="text-[#6D5EF8]">$</span> npx easeui add
                button card input
              </p>
              <p className="text-gray-500">
                &#10003; Added 3 components to src/components/ui
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function CtaBanner() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 md:pb-20">
      <div className="flex flex-col items-start justify-between gap-6 rounded-2xl bg-[#14121F] px-8 py-10 md:flex-row md:items-center md:px-12">
        <div>
          <h2 className={`${display} text-2xl font-semibold text-white md:text-3xl`}>
            Start building with EaseUi
          </h2>
          <p className="mt-2 text-sm text-gray-400">
            Free, open source, and ready for your next project.
          </p>
        </div>
        <a
          href="#components"
          className="shrink-0 rounded-lg bg-[#6D5EF8] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#7C6FF9]"
        >
          Browse components
        </a>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-gray-100 dark:border-white/5">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-gray-500 dark:text-gray-400 md:flex-row">
        <p className={`${display} font-semibold text-gray-900 dark:text-white`}>
          EaseUi
        </p>
        <div className="flex gap-6">
          <a href="#/components/button" className="hover:text-[#6D5EF8]">
            Components
          </a>
          <a href="#/about" className="hover:text-[#6D5EF8]">
            About
          </a>
          <a href="#/templates" className="hover:text-[#6D5EF8]">
            Templates
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} EaseUi. MIT licensed.</p>
      </div>
    </footer>
  );
}


function FadeStyles() {
  return (
    <style>{`
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
    `}</style>
  );
}


type IconProps = { className?: string };

function CopyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="9" y="9" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5 15V5a2 2 0 0 1 2-2h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12.5l4.5 4.5L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8 6L2 12l6 6M16 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 12h16M14 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FolderIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PaletteIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3a9 9 0 1 0 0 18c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-1.1.9-2 2-2h2a4 4 0 0 0 4-4c0-4.4-4-7.5-9-7.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="7.5" cy="10.5" r="1.2" fill="currentColor" />
      <circle cx="11" cy="7" r="1.2" fill="currentColor" />
      <circle cx="15.5" cy="8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function ButtonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="8" width="18" height="8" rx="4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 10h18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function ModalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="2" stroke="currentColor" strokeWidth="1.2" opacity="0.3" />
      <rect x="6" y="7" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function InputIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="9" width="18" height="6" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7 12h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function NavbarIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="4" width="18" height="4" rx="1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M6 6h.01M9 6h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M3 12h18M3 16h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

function CarouselIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="7" y="5" width="10" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 9v6M21 9v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
    </svg>
  );
}

function TooltipIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 14l2 4 2-4" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

