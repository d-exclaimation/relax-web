"use client";

import type { Team } from "@/lib/types";
import { rc } from "@d-exclaimation/next";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useMemo } from "react";

type TeamOption = Team & { selected?: boolean };

type Props = {
  teams: TeamOption[];
  onChange: (value: string) => void;
};

export default rc<Props>(({ teams, onChange }) => {
  const selected = useMemo(() => teams.find((o) => o.selected), [teams]);
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center justify-between flex-1 md:flex-[unset] min-w-[12rem]
          gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-50 text-sand 
          outline outline-1 md:outline-2 outline-sand/5 focus-visible:outline-sand"
        >
          <div className="flex items-center justify-start gap-2">
            {selected?.img && (
              <img
                className="w-5 h-5 rounded-full object-cover"
                src={selected.img}
              />
            )}
            {selected?.label}
          </div>
          <img className="w-3.5 h-3.5" src="/chevron-down.svg" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          className="z-50 rounded-md border bg-stone-50 text-sand shadow border-sand/20
          flex flex-col items-start gap-1 px-0.5 py-1 min-w-[16rem] mt-1 overflow-hidden
          data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 
          data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
          data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        >
          {teams.map(({ img, label, value, tagname, selected }, i) => (
            <DropdownMenu.Item
              key={`${label}=${i}`}
              className="flex items-center justify-between gap-1.5 px-2.5 py-1.5 
              select-none outline-none rounded hover:bg-stone-200
            data-active:bg-stone-200 w-full"
              onClick={() => onChange(value)}
              data-active={selected}
            >
              <div className="flex items-center gap-1.5">
                {img && (
                  <img
                    className="w-5 h-5 rounded-full object-cover"
                    src={img}
                  />
                )}
                {label}
                {tagname && (
                  <span className="text-[0.625rem] leading-3 font-normal px-1.5 py-0.5 rounded-full bg-bronze/30">
                    {tagname}
                  </span>
                )}
              </div>
              {selected && <img src="/checked.svg" className="w-5 h-5" />}
            </DropdownMenu.Item>
          ))}
          <DropdownMenu.Separator className="my-0.5 h-px bg-sand/20 w-full" />

          <DropdownMenu.Item
            className="flex items-center justify-between gap-1.5 px-3 py-1.5 
            select-none outline-none rounded w-full font-medium text-sand/80 text-sm"
          >
            <div className="flex items-center gap-1.5">
              <span>Add a team</span>
              <span className="text-xs font-normal px-1.5 py-0.5 rounded-full bg-amber-200">
                soon
              </span>
            </div>
            <img src="/plus.svg" className="w-3 h-3 opacity-50" />
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
});
