type OpenGraph = {
  property: string;
  content: string;
};

export type Metadata = {
  title?: string;
  description?: string;
  keywords?: string;
  openGraphArray?: OpenGraph[];
};
