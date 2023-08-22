import { layout, meta } from "@d-exclaimation/next";
import "cal-sans";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = meta({
  title: "Relax",
  description: "Relax, we'll handle it for you",
});

export default layout(({ children }) => {
  return (
    <html
      className="bg-surface-light dark:bg-surface-dark w-full h-full"
      lang="en"
    >
      <body className={`${manrope.className} w-full h-full`}>{children}</body>
    </html>
  );
});
