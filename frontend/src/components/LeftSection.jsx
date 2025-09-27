import { useState } from "react";

export default function LeftSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="relative font-[Poppins]">
      {/* Background SVG */}
      <svg
        className="size-full absolute -z-10 inset-0"
        width="1440"
        height="720"
        viewBox="0 0 1440 720"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 702.342H1439.7" />
        <circle cx="711.819" cy="372.562" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
        <circle cx="16.942" cy="20.834" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
        <path stroke="#1D293D" strokeOpacity=".7" d="M-15.227 573.66H1439.7M-15.227 164.029H1439.7" />
        <circle cx="782.595" cy="411.166" r="308.334" stroke="#1D293D" strokeOpacity=".7" />
      </svg>

      {/* Navbar */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur text-white text-sm">
        {/* Logo */}
        <a href="https://prebuiltui.com">
          {/* তোমার SVG logo এখানে 그대로 paste করো */}
          <svg width="155" height="40" viewBox="0 0 155 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M45.904 28.28..." fill="#fff" />
            <path
              d="m8.75 11.3 6.75 3.884..."
              stroke="#fff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 transition duration-500">
          <a href="/" className="hover:text-slate-300 transition">Home</a>
          <a href="/products" className="hover:text-slate-300 transition">Products</a>
          <a href="/stories" className="hover:text-slate-300 transition">Stories</a>
          <a href="/pricing" className="hover:text-slate-300 transition">Pricing</a>
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block px-6 py-2.5 text-black bg-white hover:bg-slate-200 active:scale-95 transition-all rounded-full">
          Contact us
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden active:scale-90 transition">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 5h16" /><path d="M4 12h16" /><path d="M4 19h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] bg-black/40 text-white backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/stories">Stories</a>
        <a href="/pricing">Pricing</a>

        <button
          onClick={() => setMenuOpen(false)}
          className="active:ring-3 active:ring-white aspect-square size-10 p-1 flex items-center justify-center bg-white hover:bg-slate-200 transition text-black rounded-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center md:items-start">
          {/* Avatar Group */}
          <div className="flex flex-wrap items-center justify-center p-1.5 rounded-full border border-slate-600 text-white text-xs">
            <div className="flex items-center">
              <img className="size-7 rounded-full border-3 border-white"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=50" alt="user1" />
              <img className="size-7 rounded-full border-3 border-white -translate-x-2"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=50" alt="user2" />
              <img className="size-7 rounded-full border-3 border-white -translate-x-4"
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=50" alt="user3" />
            </div>
            <p className="-translate-x-2">Join community of 1m+ founders </p>
          </div>

          {/* Hero Text */}
          <h1 className="text-center md:text-left text-5xl leading-[68px] md:text-6xl md:leading-[84px] font-medium max-w-xl text-slate-50">
            Intelligent AI tools built to help.
          </h1>
          <p className="text-center md:text-left text-sm text-slate-200 max-w-lg mt-2">
            Unlock smarter workflows with AI tools designed to boost productivity, simplify tasks and help you do more with less effort.
          </p>

          {/* CTA Buttons */}
          <div className="flex items-center gap-4 mt-8 text-sm">
            <button className="bg-white hover:bg-slate-200 text-black active:scale-95 rounded-md px-7 h-11">
              Get started
            </button>
            <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-white rounded-md px-6 h-11">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"
                stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg>
              <span>Watch demo</span>
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <img
          src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-3.png"
          alt="hero"
          className="max-w-xs sm:max-w-sm lg:max-w-md transition-all duration-300"
        />
      </section>
    </section>
  );
}
