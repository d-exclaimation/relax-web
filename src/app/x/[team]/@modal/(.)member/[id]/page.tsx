import { fetchIndiviualDash } from "@/lib/api/dash.server";
import { page } from "@d-exclaimation/next";
import PageClient from "../../../(member)/page.client";
import FloatingPage from "../../floating-page";

type Parameters = {
  team: string;
  id: string;
};

export default page<{ P: Parameters }>(async ({ params }) => {
  const dash = await fetchIndiviualDash(params.id);
  return (
    <FloatingPage>
      <div className="flex flex-col gap-6 w-full py-8 px-4 md:p-6">
        <PageClient team={params.team} {...dash} />
      </div>
    </FloatingPage>
  );
});
