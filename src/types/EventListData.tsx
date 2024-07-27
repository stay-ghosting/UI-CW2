export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  category: string;
  favourite: boolean;
}

export interface EventListData {
  id: string;
  image: string;
  createdBy: string;
  title: string;
  events: Event[];
}

export interface EventListSummary {
  id: string;
  title: string;
  image: string;
  createdBy: string;
}
