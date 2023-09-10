import "server-only";
import { Dashboard, IndiviualDashboard } from "../types";

export const fetchDash = async () => {
  const res = await fetch(`${process.env.RELAXING_URL}/dash`, {
    next: { revalidate: 0, tags: ["dash", "all"] },
  });
  return (await res.json()) as Dashboard;
};

export const fetchIndiviualDash = async (id: string) => {
  const res = await fetch(
    `${process.env.RELAXING_URL}/dash?id=${encodeURIComponent(id)}`,
    {
      next: { revalidate: 10, tags: ["dash", id] },
    }
  );
  return (await res.json()) as IndiviualDashboard;
};
