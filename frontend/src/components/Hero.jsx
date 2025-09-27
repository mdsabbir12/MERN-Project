import { useState } from "react";
import group from "../assets/Group 15351.png"
import imgapple from "../assets/frame23.png"
export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="font-[Poppins]">

      {/* Hero Section */}
      <main className="flex flex-col max-md:gap-20 md:flex-row pb-20 items-center justify-between mt-20 px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-center md:text-left text-4xl leading-[46px] md:text-5xl md:leading-[68px] font-semibold max-w-xl text-slate-900">
            All Your Jobs 
One Smart App
          </h1>
          <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
            Unlock smarter workflows with AI tools designed to boost
            productivity, simplify tasks and help you do more with less effort.
          </p>
          <div className="flex items-center gap-4 mt-8 text-sm">
            <img src={imgapple} alt="" />
          </div>
        </div>
        <img
          src={group}
          alt="hero"
          className="max-w-md sm:max-w-md lg:max-w-lg 2xl:max-w-xl transition-all duration-300"
        />
      </main>
    </section>
  );
}
