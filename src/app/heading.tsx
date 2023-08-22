"use client";

import { rc } from "@d-exclaimation/next";
import { useEffect, useRef, useState } from "react";

const CHARS = "Relax, we'll handle it for you".split("");

const INTERVAL = 2000 / CHARS.length;

export default rc(() => {
  const timeoutRef = useRef<NodeJS.Timeout | number>();
  const currentRef = useRef(0);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const handle = () => {
      setIndex((prev) => prev + 1);
      currentRef.current++;
      if (currentRef.current >= CHARS.length) return;
      timeoutRef.current = setTimeout(handle, INTERVAL);
    };
    timeoutRef.current = setTimeout(handle, INTERVAL);
    return () => {
      if (!timeoutRef.current) return;
      clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <h1 className="relative text-2xl md:text-6xl font-bold font-cal">
      {CHARS.slice(0, index)}
      <span className="animate-flick">_</span>
    </h1>
  );
});
