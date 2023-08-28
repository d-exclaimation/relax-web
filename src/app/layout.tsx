import { layout, meta } from "@d-exclaimation/next";
import "cal-sans";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = meta({
  title: "Relax",
  description: "Relax, we'll handle it for you",
  icons: {
    icon: [
      "/favicon.ico",
      { sizes: "16x16", url: "/favicon-16x16.png" },
      { sizes: "32x32", url: "/favicon-32x32.png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  viewport: {
    initialScale: 1,
    width: "device-width",
    viewportFit: "cover",
  },
  manifest: "/site.webmanifest",
});

export default layout(({ children }) => {
  return (
    <html
      className="bg-surface-light dark:bg-surface-dark w-full h-full"
      lang="en"
    >
      <body className={`${manrope.className} w-full h-full`}>
        <div
          vaul-drawer-wrapper=""
          className="bg-surface-light min-w-full min-h-full"
        >
          {children}
        </div>
      </body>
    </html>
  );
});
