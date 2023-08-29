import Typed from "@/lib/components/typed";
import { page } from "@d-exclaimation/next";
import Link from "next/link";

export default page(() => {
  return (
    <div className="relative z-10 w-full md:max-w-5xl flex flex-col flex-1 items-center justify-center gap-6">
      <Typed
        className="z-10 font-semibold text-2xl md:text-4xl items-center"
        text="Still in progress"
        duration={1000}
      />
      <Link
        href="/x"
        className="text-xs md:text-sm px-2 py-1 rounded-md z-10 hover:bg-surface-dark/10 transition-all"
      >
        See Dashboard
      </Link>
    </div>
  );
});

export const runtime = "edge";
