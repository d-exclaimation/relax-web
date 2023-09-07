import { page } from "@d-exclaimation/next";

export default page(() => null);

export const revalidate = 10;
export const runtime = "edge";
