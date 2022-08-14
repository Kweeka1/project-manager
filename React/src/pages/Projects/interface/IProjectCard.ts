export interface Priority {
  lowest: CardColors;
  low: CardColors;
  medium: CardColors;
  high: CardColors;
  highest: CardColors;
}

export interface CardColors {
  cardHeaderBg: string;
  cardDetailsIssues: string;
  cardDetailsInfo: string;
}

export interface IProjectCard {
  CardPriority: keyof Priority;
  CardTitle: string;
  ActiveItemsNumber: number;
  EventDate: string;
  ProjectName: string;
  Reporter: string;
  Assignees: number;
  OpenIssues: number;
  DoneIssues: number;
  BoardNumber: number
}