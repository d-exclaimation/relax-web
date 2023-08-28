import { rc } from "@d-exclaimation/next";
import type { ReactNode } from "react";
import Section from "./section";

export default rc<{ children: ReactNode; modal: ReactNode }>(
  ({ children, modal }) => {
    return (
      <>
        <Section>{children}</Section>
        {modal}
      </>
    );
  }
);
