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
          className="fixed rounded-t-[10px] h-[96%] md:h-[80%] mt-24 bottom-0 left-0 right-0 z-50
          gap-4 border bg-white shadow-lg duration-200 flex items-center justify-center"
          onAnimationEnd={(open) => {
            if (!open) {
              router.back();
            }
          }}
        >
          {children}
          <Dialog.Close className="absolute right-4 top-4 rounded bg-white p-1 z-50 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-sand/10 focus:ring-offset-2 disabled:pointer-events-none">
            <img className="w-6 h-6" src="/cross.svg" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});
