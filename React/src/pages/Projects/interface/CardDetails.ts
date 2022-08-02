export interface Priority ***REMOVED***
  lowest: CardColors;
  low: CardColors;
  medium: CardColors;
  high: CardColors;
  highest: CardColors;
***REMOVED***

export interface CardColors ***REMOVED***
  cardHeaderBg: string;
  cardDetailsIssues: string;
  cardDetailsInfo: string;
***REMOVED***

export interface CardDetails ***REMOVED***
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
***REMOVED***