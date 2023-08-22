import { layout } from "@d-exclaimation/next";
import Nav from "./nav";

export default layout(({ children }) => {
  return (
    <div className="relative bg-bronze/[.025] flex flex-col w-full h-full items-center">
      <Nav />
      <section className="relative z-10 w-full md:max-w-7xl flex flex-col h-full">
        {children}
      </section>
    </div>
  );
});
