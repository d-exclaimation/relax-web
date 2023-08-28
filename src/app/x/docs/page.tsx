import { page } from "@d-exclaimation/next";
import { redirect } from "next/navigation";

export default page(() => {
  throw redirect("/404");
});

export const runtime = "edge";
