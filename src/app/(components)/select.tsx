"use client";

import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useMemo } from "react";

type Props<T> = {
  options: { label: string; value: T; selected?: boolean }[];
  onChange: (value: T) => void;
  defaultLabel: string;
};

export default function <T>({ options, onChange, defaultLabel }: Props<T>) {
  const selected = useMemo(() => options.find((o) => o.selected), [options]);
  const selectedLabel = useMemo(
    () => selected?.label ?? defaultLabel,
    [selected, defaultLabel]
  );
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="flex items-center justify-between min-w-[10rem] 
          gap-1.5 px-2.5 py-1.5 rounded-md bg-stone-50 text-sand 
          text-sm outline outline-sand/20 shadow"
        >
          {selectedLabel}
          <img className="w-3.5 h-3.5" src="/chevron-down.svg" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="z-50 min-w-[10rem] mt-1 overflow-hidden rounded-md border bg-stone-50 text-sand shadow-md
          flex flex-col items-start gap-1 px-0.5 py-1
          data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 
          data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 
          data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 
          data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2"
        >
          {options.map(({ label, value, selected }, i) => (
            <DropdownMenu.Item
              key={`${label}=${i}`}
              className="flex items-center justify-between gap-1.5 px-2.5 py-1.5 
              select-none outline-none rounded hover:bg-stone-200 text-sm
              data-active:bg-sand data-active:text-stone-50 w-full"
              onClick={() => onChange(value)}
              data-active={selected}
            >
              {label}
              {selected && (
                <img src="/checked.svg" className="w-3.5 h-3.5 invert" />
              )}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
