import { route } from "@d-exclaimation/next";

export const GET = route(() => {
  return Response.redirect("https://github.com/d-exclaimation/relax", 301);
});
