import { fetchDash } from "@/lib/api/dash.server";
import { page } from "@d-exclaimation/next";
import PageClient from "./page.client";

type SearchParams = {
  team?: string;
};

export default page<{ S: SearchParams }>(async ({}) => {
  const dash = await fetchDash();
  return (
    <div className="w-full py-4 flex h-full">
      <PageClient {...dash} />
    </div>
  );
});

export const revalidate = 10;
export const runtime = "edge";
