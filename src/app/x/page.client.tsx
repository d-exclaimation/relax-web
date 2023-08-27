"use client";

import mountains from "@/app/(assets)/mountains.png";
import Incrementing from "@/lib/components/incrementing";
import type { Dashboard } from "@/lib/types";
import { rc } from "@d-exclaimation/next";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import TeamCharts from "./team-charts";
import TeamSelect from "./team-select";

const teams = [
  {
    img: "/saturday-blue.png",
    label: "Saturday",
    tagname: "s302g7",
    id: "s302g7",
  },
];

export default rc<Dashboard>(({ dash, max }) => {
  const searchParams = useSearchParams();
  const teamId = searchParams.get("team") ?? "s302g7";
  const team = useMemo(() => {
    return teams.find(({ id }) => id === teamId);
  }, [teamId]);

  const reviews = useMemo(
    () => dash.map(({ review }) => review).reduce((acc, curr) => acc + curr, 0),
    [dash]
  );

  const inFavour = useMemo(
    () =>
      dash.reduce(
        (acc, curr) => (curr.avg.reviewing > acc.avg.reviewing ? curr : acc),
        dash[0]
      ),
    []
  );

  return (
    <div className="flex flex-col px-4 md:px-3 py-2 w-full md:h-full">
      <div className="flex items-center flex-shrink-0">
        <img
          className="w-7 h-7 object-cover rounded-full"
          src="/hot-sauce.png"
        />
        <span className="rotate-[15deg] w-px h-6 bg-sand/60 mx-3" />
        <TeamSelect
          onChange={() => {}}
          teams={teams.map(({ id, ...t }) => ({
            ...t,
            selected: id === teamId,
            value: id,
          }))}
        />
      </div>

      {team && (
        <div className="flex flex-col md:flex-row gap-4 py-4 w-full h-full">
          <section
            id="team-profile"
            className="flex-[5] h-full flex flex-col gap-3"
          >
            {/* Team profile */}
            <div className="flex flex-col md:flex-row flex-shrink-0 md:items-center w-full gap-3 justify-between">
              <div className="flex flex-col py-2 md:py-0 w-full gap-1">
                <h2 className="hidden md:inline text-xl">Dashboard for</h2>
                <h4 className="text-3xl md:text-5xl font-semibold text-stone-600">
                  {team.label}{" "}
                  {team.tagname && (
                    <span className="text-sm text-stone-400">
                      {team.tagname}
                    </span>
                  )}
                </h4>
              </div>

              <div className="relative flex flex-col justify-between md:w-[11rem] h-[6rem] md:h-[8rem] gap-2 px-4 py-3 rounded-xl outline outline-1 outline-sand/10">
                <div className="absolute z-0 inset-0 flex items-center justify-end md:justify-center px-6 md:px-0">
                  <img
                    className="absolute w-24 h-24 mt-3 opacity-30 md:opacity-5"
                    src="/merge.svg"
                  />
                </div>
                <span className="relative z-10 text-xs font-semibold">
                  Code reviews
                </span>

                <div className="relative z-10 flex items-end w-full gap-1.5">
                  <Incrementing
                    className="text-4xl font-bold w-[2.5ch]"
                    count={reviews}
                  />
                  <span className="text-stone-700 text-[0.625rem] leading-none break-words mb-1.5">
                    merge requests
                  </span>
                </div>
              </div>
            </div>

            {/* Reviewer in favour */}
            <div className="relative flex-shrink-0 flex flex-col md:flex-row items-center w-full rounded-2xl min-h-[10rem] bg-bronze/50">
              <div className="absolute flex items-end justify-between inset-0">
                <div className="relative w-full">
                  <Image
                    src={mountains}
                    className="max-w-full opacity-30 object-cover"
                    alt="mountains"
                  />
                </div>
              </div>
              <div className="relative pt-5 md:py-5 pl-5 pr-2 flex items-center md:justify-center flex-shrink-0 md:h-full w-full md:w-fit">
                <img
                  className="w-20 md:w-32 aspect-square rounded-full object-cover"
                  src={`https://night.saturday.fitness/members/${inFavour.id}.webp`}
                />
              </div>
              <div className="relative flex flex-col flex-1 w-full items-end justify-between gap-3 pb-6 px-6 md:p-6 h-full">
                <span className="text-sm font-semibold">
                  Reviewer in favour by odds
                </span>
                <span>
                  <span className="font-semibold text-xs text-stone-500 mr-1">
                    {inFavour.id}
                  </span>
                  <span className="font-cal font-bold text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-black to-50% to-amber-800">
                    {inFavour.name}
                  </span>
                </span>
              </div>
            </div>

            {/* Chart */}
            <TeamCharts dash={dash} max={max} />
          </section>

          <section
            id="team-members"
            className="flex-[3] md:h-full md:overflow-y-auto flex flex-col gap-3 md:pl-2 md:border-l md:border-sand/5"
          >
            <span className="text-sm font-semibold mx-2">Members</span>
            {dash.map(({ id, name, avg }) => (
              <div
                key={`member-${id}`}
                className="flex items-center gap-2.5 w-full rounded-lg p-3 group hover:bg-sand"
              >
                <img
                  className="w-10 h-10 mx-2 rounded-full outline outline-1 outline-sand/20 object-cover"
                  src={`https://night.saturday.fitness/members/${id}.webp`}
                  // src={`https://api.dicebear.com/6.x/thumbs/svg?seed=member${i}`}
                />
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-medium group-hover:text-white">
                    {name}
                  </span>
                  <span className="text-xs font-light group-hover:text-white">
                    {id}
                  </span>
                </div>

                <svg className="relative w-10 h-10 ml-auto" viewBox="0 0 37 37">
                  <g
                    style={{
                      transform: "scale(0.75) rotate(-90deg)",
                      transformOrigin: "50%",
                    }}
                  >
                    <circle
                      strokeWidth="8"
                      r="15.915"
                      cx="50%"
                      cy="50%"
                      className="fill-none stroke-bronze/30 group-hover:stroke-white/50"
                    />
                    <circle
                      strokeWidth="8"
                      r="15.915"
                      cx="50%"
                      cy="50%"
                      className="fill-none animate-progress stroke-bronze group-hover:stroke-white"
                      strokeDasharray={`${Math.round(avg.reviewing)}, 100`}
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
              </div>
            ))}
          </section>
        </div>
      )}
    </div>
  );
});
