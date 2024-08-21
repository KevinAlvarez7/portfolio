import React from "react";

interface HeroTitleProps {
  title: string;
  subtitle: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle }) => {
  return (
    <section className="relative grid min-h-screen w-full place-content-center overflow-hidden flex-row justify-center">
      <h1 className="relative z-0 text-[48px] font-outfit font-bold text-slate-300 md:text-[48px] whitespace-nowrap">
        {title}
      </h1>
      <h2 className="relative z-0 text-[24px] font-gloria text-stone-400 md:text-[24px] whitespace-nowrap">
        {subtitle}
      </h2>

    </section>
  );
};

export default HeroTitle;
