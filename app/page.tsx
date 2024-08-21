import Image from "next/image";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import HeroTitle from "@/components/ui/DragCards/HeroTitle";
import Cards from "@/components/ui/DragCards/Cards";


export default function Home() {
  return (
    <main className=" bg-slate-100 flex min-h-screen flex-col items-center justify-between">
            {/* Dot Pattern Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DotPattern
          className={cn(
            "w-full h-full [mask-image:radial-gradient(circle,white,transparent)]"
          )}
        />
      </div>
      {/* Main Content */}
      <div className="relative z-10 min-h-screen w-full">
        <div className="relative w-full h-full">
          <HeroTitle title="kevin.alvarez" subtitle="a non award winning designer" />
          <Cards />
        </div>
      </div>
    </main>
  );
}
