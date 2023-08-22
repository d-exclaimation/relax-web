"use client";

import { rc } from "@d-exclaimation/next";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export default rc(() => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button>Select a team</button>
      </DropdownMenu.Trigger>
    </DropdownMenu.Root>
  );
});
