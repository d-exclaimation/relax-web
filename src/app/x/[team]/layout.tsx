import { rc } from "@d-exclaimation/next";
import type { ReactNode } from "react";

export default rc<{ children: ReactNode; modal: ReactNode }>(
  ({ children, modal }) => {
    return (
      <>
        <section className="relative z-10 w-full md:max-w-5xl flex flex-col min-h-full">
          {children}
        </section>
        {modal}
      </>
    );
  }
);
