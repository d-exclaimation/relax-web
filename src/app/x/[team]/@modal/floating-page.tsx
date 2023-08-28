"use client";

import { rc } from "@d-exclaimation/next";
import { useRouter } from "next/navigation";
import { type ReactNode } from "react";
import { Drawer as Dialog } from "vaul";

export default rc<{ children: ReactNode }>(({ children }) => {
  const router = useRouter();

  return (
    <Dialog.Root defaultOpen>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-sand/30 backdrop-blur data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed rounded-t-[10px] h-[96%] md:h-[85%] mt-24 bottom-0 left-0 right-0 z-50
          gap-4 border bg-white shadow-lg duration-200 flex flex-col items-center justify-center"
          onAnimationEnd={(open) => {
            if (!open) {
              router.back();
            }
          }}
        >
          <div className="mx-auto my-1.5 w-12 h-1.5 flex-shrink-0 rounded-full bg-gray-300" />
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});
