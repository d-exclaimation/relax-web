import { page } from "@d-exclaimation/next";
import PageClient from "./page.client";

export default page(() => {
  return (
    <div className="w-full flex">
      <PageClient />
    </div>
  );
});

export const runtime = "edge";
