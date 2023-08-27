"use client";

import { rc } from "@d-exclaimation/next";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default rc(() => {
  const router = useRouter();
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.metaKey && e.key === "k") {
        router.push("/x");
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [router]);
  return (
    <span className="relative z-10 text-center [text-wrap:balance] text-xs md:text-base text-surface-dark/6 max-w-[90%] md:max-w-3xl">
      Simplify, accelerate, and streamlined your development workflows with an
      AI-powered Slack bot built for agile teams
    </span>
  );
});
