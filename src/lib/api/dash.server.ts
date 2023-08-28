import "server-only";
import { Dashboard, IndiviualDashboard } from "../types";

export const fetchDash = async () => {
  const res = await fetch(`${process.env.RELAXING_URL}/dash`);
  return (await res.json()) as Dashboard;
};

export const fetchIndiviualDash = async (id: string) => {
  const res = await fetch(
    `${process.env.RELAXING_URL}/dash?id=${encodeURIComponent(id)}`
  );
  return (await res.json()) as IndiviualDashboard;
};
