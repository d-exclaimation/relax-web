import { fetchDash } from "@/lib/api/dash.server";
import { page } from "@d-exclaimation/next";
import PageClient from "./page.client";

type Parameters = {
  team: string;
};

export default page<{ P: Parameters }>(async ({ params }) => {
  const dash = await fetchDash();
  return (
    <div className="w-full py-4 flex h-full">
      <PageClient teamId={params.team} {...dash} />
    </div>
  );
});

export const runtime = "edge";
export const dynamic = "force-dynamic";
