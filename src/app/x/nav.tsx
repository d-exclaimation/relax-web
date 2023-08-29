"use client";

import { rc } from "@d-exclaimation/next";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

const routes = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/x",
  },
  {
    name: "Docs",
    href: "/x/docs",
  },
  {
    name: "Github",
    href: "/github",
  },
];

export default rc(() => {
  const pathname = usePathname();
  const matchingHref = useMemo(() => {
    const matchingRoutes = routes.filter(({ href }) =>
      pathname.startsWith(href)
    );
    if (matchingRoutes.length === 0) {
      return undefined;
    }
    return matchingRoutes.reduce(
      (acc, { href }) => (href.length > acc.length ? href : acc),
      ""
    );
  }, [pathname]);

  return (
    <div className="w-full flex items-center justify-center gap-3 py-4 sticky top-0 z-50 bg-[#FDFCFB]">
      {routes.map(({ name, href }) => (
        <Link
          key={`${name}-${href}`}
          className="font-medium px-2.5 py-0.5 rounded text-sm transition-all
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-sand
          hover:bg-surface-dark/5 data-active:text-surface-light data-active:bg-surface-dark"
          href={href}
          data-active={matchingHref === href}
        >
          {name}
        </Link>
      ))}
    </div>
  );
});
