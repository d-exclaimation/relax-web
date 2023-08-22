"use client";

import { rc } from "@d-exclaimation/next";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";

export default rc<
  ComponentPropsWithoutRef<"h1"> & { text: string; duration: number }
>(({ text, duration, ...props }) => {
  const timeoutRef = useRef<NodeJS.Timeout | number>();
  const currentRef = useRef(0);
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = duration / text.length;
    const handle = () => {
      setIndex((prev) => prev + 1);
      currentRef.current++;
      if (currentRef.current >= text.length) return;
      timeoutRef.current = setTimeout(handle, interval);
    };
    timeoutRef.current = setTimeout(handle, interval);
    return () => {
      if (!timeoutRef.current) return;
      clearTimeout(timeoutRef.current);
    };
  }, [text, duration]);
  return (
    <h1 {...props}>
      {text.slice(0, index)}
      <span className="animate-flick">_</span>
    </h1>
  );
});
