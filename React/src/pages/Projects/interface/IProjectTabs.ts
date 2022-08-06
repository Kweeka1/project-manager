export interface Project ***REMOVED***
  id: number;
  name: string;
  createdOn: string;
  lastAction: string;
  by: string
  lastActionDate: string;
  reporter: string;
  boards: Board[];
***REMOVED***

export interface Board ***REMOVED***
  name: string;
  issues: Issue[]
***REMOVED***

export interface Issue ***REMOVED***
  id: number;
  name: string;
  createdOn: string;
  action: string;
  actionDate: string;
  reporter: string;
***REMOVED***

