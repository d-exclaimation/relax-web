"use client";

import type { Dashboard } from "@/lib/types";
import { rc } from "@d-exclaimation/next";
import { useMemo, useState } from "react";

export default rc<Dashboard>(({ dash, max }) => {
  const [tab, setTab] = useState<"odds" | "reviews">("odds");

  const maxPercentage = useMemo(() => {
    if (tab === "reviews") {
      return (
        dash.reduce((acc, curr) => (curr.review > acc ? curr.review : acc), 0) +
        1
      );
    }
    return max;
  }, [dash, tab]);

  const charts = useMemo(() => {
    if (tab === "odds") {
      return dash.map(({ id, avg }) => ({ id, value: avg.reviewing }));
    }
    return dash.map(({ id, review }) => ({ id, value: review }));
  }, [dash, max, tab]);

  return (
    <div className="flex-1 w-full h-full flex flex-col gap-4">
      <div className="flex flex-shrink-0 items-center justify-between w-full">
        <div className="flex text-xs md:text-sm font-semibold">
          <span
            className="relative transition-all duration-500 -translate-y-4 opacity-0 data-active:translate-y-0 data-active:opacity-100"
            data-active={tab === "odds"}
          >
            Odds of becoming next reviewer
          </span>
          <span
            className="absolute transition-all duration-500 translate-y-4 opacity-0 data-active:translate-y-0 data-active:opacity-100"
            data-active={tab === "reviews"}
          >
            Reviews done
          </span>
        </div>
        <div className="flex items-center justify-around gap-2 px-0.5 py-0.5 rounded-[0.325rem] bg-sand/30">
          <button
            className="data-active:bg-white rounded px-2 py-1 text-xs transition-all
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-sand"
            data-active={tab === "odds"}
            onClick={() => setTab("odds")}
          >
            Odds
          </button>
          <button
            className="data-active:bg-white rounded px-2 py-1 text-xs transition-all
            focus-visible:outline focus-visible:outline-2 focus-visible:outline-sand"
            data-active={tab === "reviews"}
            onClick={() => setTab("reviews")}
          >
            Reviews
          </button>
        </div>
      </div>

      <div className="flex items-end justify-between w-full h-[16rem] px-2 py-2">
        {charts.map(({ id, value }) => {
          const percentage = Math.round((value / maxPercentage) * 100);
          return (
            <div
              key={`chart-${tab}-${id}`}
              className="flex flex-col gap-1.5 items-center h-max"
            >
              <span className="text-xs md:text-sm font-semibold">
                {Math.round(value)}
                {tab === "odds" ? "%" : ""}
              </span>
              <div
                className="w-8 md:w-10 animate-rise rounded-lg data-[level='1']:bg-bronze/25 data-[level='2']:bg-bronze/50 data-[level='3']:bg-bronze/75 data-[level='4']:bg-bronze"
                style={{ height: `${(percentage * 12) / 100}rem` }}
                data-level={
                  percentage < 25
                    ? 1
                    : percentage < 50
                    ? 2
                    : percentage < 75
                    ? 3
                    : 4
                }
              />
              <img
                className="w-6 h-6 md:w-8 md:h-8 rounded-full object-cover outline outline-1 outline-sand/20"
                src={`https://night.saturday.fitness/members/${id}.webp`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
});
