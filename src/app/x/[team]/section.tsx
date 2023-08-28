"use client";

import { rc } from "@d-exclaimation/next";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default rc<{ children: ReactNode }>(({ children }) => {
  const pathname = usePathname();
  return (
    <section
      key={`${pathname}-section`}
      className="relative z-10 w-full md:max-w-5xl flex flex-col min-h-full"
    >
      {children}
    </section>
  );
});
