"use client";

import { rc } from "@d-exclaimation/next";
import * as Dialog from "@radix-ui/react-dialog";
import { useRouter } from "next/navigation";
import { useRef, type ReactNode } from "react";

export default rc<{ children: ReactNode }>(({ children }) => {
  const overlay = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  return (
    <Dialog.Root
      defaultOpen
      open
      onOpenChange={(isOpen) => {
        if (isOpen) return;
        router.back();
      }}
    >
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-sand/30 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content
          className="fixed left-[50%] top-[50%] z-50 flex w-[95%] max-w-5xl translate-x-[-50%] translate-y-[-50%] 
          gap-4 border bg-white shadow-lg duration-200 rounded-lg max-h-[95dvh] overflow-y-auto
          data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95
          data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
        >
          {children}
          <Dialog.Close className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-sand/10 focus:ring-offset-2 disabled:pointer-events-none">
            <img className="w-6 h-6" src="/cross.svg" />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
});
