import "server-only";
import { Dashboard } from "../types";

export const fetchDash = async () => {
  const res = await fetch(`${process.env.RELAXING_URL}/dash`);
  return (await res.json()) as Dashboard;
};
