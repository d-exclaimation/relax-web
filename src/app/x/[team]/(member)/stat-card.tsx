import { rc } from "@d-exclaimation/next";
import type { ReactNode } from "react";

type Props = {
  className?: string;
  headline: string;
  icon: {
    className?: string;
    src: string;
  };
  children: ReactNode;
};

export default rc<Props>(({ className, headline, icon, children }) => (
  <div
    className={`relative flex flex-col justify-between w-full h-[6rem] md:h-[9rem] gap-2 px-4 py-3 rounded-xl ${className}`}
  >
    <div className="absolute z-0 inset-0 flex items-center justify-end md:justify-center px-6 md:px-0">
      <img
        className={`absolute mt-1 md:mt-3 opacity-40 invert ${icon.className}`}
        src={icon.src}
      />
    </div>
    <span className="relative z-10 text-sm font-semibold">{headline}</span>

    {children}
  </div>
));
