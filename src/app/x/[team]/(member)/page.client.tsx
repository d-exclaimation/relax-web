"use client";

import Incrementing from "@/lib/components/incrementing";
import { IndiviualDashboard } from "@/lib/types";
import { rc } from "@d-exclaimation/next";
import { useMemo } from "react";
import StatCard from "./stat-card";

export default rc<IndiviualDashboard & { team: string }>(
  ({ dash, team, max }) => {
    const nextReviewer = useMemo(
      () =>
        dash.reviewees.reduce(
          (acc, curr) => (curr.reviewer > acc.reviewer ? curr : acc),
          dash.reviewees[0]
        ),
      [dash]
    );
    const maxReviewee = useMemo(
      () =>
        dash.reviewees.reduce(
          (acc, curr) => (curr.reviewer > acc ? curr.reviewer : acc),
          0
        ) + 2,
      [dash]
    );
    return (
      <>
        {/* Profile */}
        <div className="flex items-center w-full gap-4">
          <img
            className="w-16 h-16 md:w-24 md:h-24 rounded-lg object-cover"
            src={`https://night.saturday.fitness/members/${dash.id}.webp`}
          />
          <div className="flex flex-col h-full items-start justify-evenly">
            <span className="text-2xl md:text-4xl font-semibold">
              {dash.name}
              <span className="text-[0.625rem] leading-3 font-normal px-1.5 py-0.5 rounded-full bg-bronze/30 mx-2">
                {team}
              </span>
            </span>
            <span className="text-sm text-sand/90">{dash.id}</span>
          </div>
        </div>

        {/* Statistics */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-10 w-full">
          <StatCard
            className="md:flex-1 bg-gradient-to-br from-bronze/40 from-40% to-amber-200"
            headline="Code reviews"
            icon={{
              className: "w-24 h-24 md:w-28 md:h-28",
              src: "/merge.svg",
            }}
          >
            <div className="relative z-10 flex items-end w-full gap-1.5">
              <Incrementing
                className="text-3xl md:text-4xl font-bold min-w-[1ch]"
                count={dash.review}
              />
              <span className="text-stone-700 text-xs leading-none break-words mb-1.5">
                merge requests
              </span>
            </div>
          </StatCard>

          <StatCard
            className="md:flex-[2] bg-gradient-to-br from-bronze/40 from-40% to-emerald-200"
            headline="Averaging odd"
            icon={{
              className: "w-24 h-24 md:w-32 md:h-32",
              src: "/line-graph.svg",
            }}
          >
            <div className="relative z-10 flex items-end w-full gap-1.5">
              <Incrementing
                className="text-3xl md:text-6xl font-bold min-w-[1ch]"
                count={Math.round(dash.avg.reviewing)}
              />
              <span className="text-stone-700 leading-none break-words mb-1.5">
                / 100
              </span>
            </div>
          </StatCard>

          <StatCard
            className="md:flex-[2] bg-gradient-to-br from-bronze/40 from-40% to-sky-200"
            headline="Potential next reviewer"
            icon={{
              className: "w-24 h-24 md:w-32 md:h-32",
              src: "/feedback.svg",
            }}
          >
            <div className="relative z-10 flex items-end w-full gap-1.5">
              <span
                className="text-3xl md:text-6xl font-cal font-bold min-w-[1ch]
                text-transparent bg-clip-text bg-gradient-to-br from-black from-40% to-sky-400"
              >
                {nextReviewer.name}
              </span>
              <span className="text-stone-700 text-xs md:text-sm leading-none break-words mb-1.5">
                {nextReviewer.id}
              </span>
              <span className="ml-auto text-stone-700 text-xs leading-none break-words mb-1.5">
                {nextReviewer.reviewer}/100
              </span>
            </div>
          </StatCard>
        </div>

        {/* Graphs */}
        <div className="flex flex-col md:flex-row w-full h-full justify-between pb-4">
          <div className="flex flex-col w-full p-2">
            <span className="font-semibold">Reviewing</span>
            <div className="flex items-end justify-between w-full h-[16rem]">
              {dash.reviewings.map(({ id, reviewee }) => {
                const percentage = Math.round((reviewee / max) * 100);
                return (
                  <div
                    key={`chart-reviewing-${id}`}
                    className="flex flex-col gap-1.5 items-center h-max"
                  >
                    <span className="text-xs md:text-sm font-semibold">
                      {Math.round(reviewee)}%
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

          <div className="w-full h-px my-2 md:my-0 md:w-px md:h-[16rem] bg-sand/10 md:mx-4" />

          <div className="flex flex-col w-full p-2">
            <span className="font-semibold">Reviewing</span>
            <div className="flex items-end justify-between w-full h-[16rem]">
              {dash.reviewees.map(({ id, reviewer }) => {
                const percentage = Math.round((reviewer / maxReviewee) * 100);
                return (
                  <div
                    key={`chart-reviewing-${id}`}
                    className="flex flex-col gap-1.5 items-center h-max"
                  >
                    <span className="text-xs md:text-sm font-semibold">
                      {Math.round(reviewer)}%
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
        </div>
      </>
    );
  }
);
