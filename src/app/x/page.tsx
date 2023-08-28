import { page } from "@d-exclaimation/next";
import { redirect } from "next/navigation";

export default page(async () => {
  throw redirect("/x/s302g7");
});

export const runtime = "edge";
