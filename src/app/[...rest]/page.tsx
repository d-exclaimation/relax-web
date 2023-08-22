import PanelGradient from "@/lib/components/panel-gradient";
import Typed from "@/lib/components/typed";
import { page } from "@d-exclaimation/next";
import Link from "next/link";

export default page(() => {
  return (
    <main className="relative flex flex-col gap-3 md:gap-6 w-full h-full items-center justify-center">
      <PanelGradient
        id="main"
        className="absolute inset-0 max-h-full max-w-full -z-0"
      />
      <Typed
        className="z-10 font-semibold text-4xl"
        text="Page not found"
        duration={1000}
      />
      <Link
        href="/"
        className="text-xs md:text-sm px-2 py-1 rounded-md z-10 hover:bg-surface-dark/10 transition-all"
      >
        Go back home
      </Link>
    </main>
  );
});

export const runtime = "edge";
