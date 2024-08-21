import React from "react";

interface HeroTitleProps {
  title: string;
  subtitle: string;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ title, subtitle }) => {
  return (
    <section className="relative flex min-h-screen w-full flex-col justify-center items-center overflow-hidden">
      <h1 className="relative z-0 text-[32px] font-outfit font-medium text-slate-300 md:text-[48px] whitespace-nowrap">
        {title}
      </h1>
      <h2 className="relative z-0 text-[16px] font-gloria text-stone-400 md:text-[24px] whitespace-nowrap">
        {subtitle}
      </h2>
    </section>

  );
};

export default HeroTitle;
