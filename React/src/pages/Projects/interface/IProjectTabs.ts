export interface Project {
  id: number;
  name: string;
  createdOn: string;
  lastAction: string;
  by: string
  lastActionDate: string;
  reporter: string;
  boards: Board[];
}

export interface Board {
  name: string;
  issues: Issue[]
}

export interface Issue {
  id: number;
  name: string;
  createdOn: string;
  action: string;
  actionDate: string;
  reporter: string;
}

