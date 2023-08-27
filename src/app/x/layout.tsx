import { layout } from "@d-exclaimation/next";
import Nav from "./nav";

export default layout(({ children }) => {
  return (
    <div className="relative bg-bronze/[.025] flex flex-col w-full min-h-full items-center">
      <Nav />
      <section className="relative z-10 w-full md:max-w-5xl flex flex-col min-h-full">
        {children}
      </section>
    </div>
  );
});
