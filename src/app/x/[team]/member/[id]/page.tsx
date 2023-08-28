import { fetchIndiviualDash } from "@/lib/api/dash.server";
import { page } from "@d-exclaimation/next";
import PageClient from "../../(member)/page.client";

type Parameters = {
  team: string;
  id: string;
};

export default page<{ P: Parameters }>(async ({ params }) => {
  const dash = await fetchIndiviualDash(params.id);
  return (
    <div className="w-full py-12 px-6 md:px-8  flex flex-col gap-6 h-full">
      <PageClient team={params.team} {...dash} />
    </div>
  );
});

export const revalidate = 30;
export const runtime = "edge";
