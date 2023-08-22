import PanelGradient from "@/lib/components/panel-gradient";
import { page } from "@d-exclaimation/next";
import Link from "next/link";
import Description from "./description";
import Heading from "./heading";
export default page(() => {
  return (
    <main className="relative flex flex-col gap-3 md:gap-6 w-full h-full items-center justify-center">
      <PanelGradient
        id="main"
        className="absolute inset-0 max-h-full max-w-full -z-0"
      />
      <Heading />

      <Description />

      <Link
        href="/x"
        className="text-sm md:text-base px-2.5 py-1.5 rounded-md bg-surface-dark text-white z-10 hover:bg-surface-dark/80 transition-all"
      >
        Get Started
      </Link>
    </main>
  );
});

export const runtime = "edge";
