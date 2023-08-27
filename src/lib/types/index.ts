export type Team = {
  img?: string;
  label: string;
  tagname?: string;
  value: string;
};

export type Dashboard = {
  dash: {
    id: string;
    name: string;
    review: number;
    reviewings: {
      id: string;
      name: string;
      reviewee: number;
    }[];
    reviewees: {
      id: string;
      name: string;
      reviewer: number;
    }[];
    avg: {
      reviewing: number;
      reviewed: number;
    };
  }[];
  max: number;
};
