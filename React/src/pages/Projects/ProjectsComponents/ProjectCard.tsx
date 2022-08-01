import React, ***REMOVED***FunctionComponent, Key***REMOVED*** from "react"
import ***REMOVED***Card, IconButton, Typography***REMOVED*** from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

interface Props ***REMOVED***
  CardPriority: number;
  CardTitle: string;
  ActiveItemsNumber: number;
  EventDate: string;
***REMOVED***

const ProjectCard: FunctionComponent<Props> = (***REMOVED***CardPriority, CardTitle, ActiveItemsNumber, EventDate***REMOVED***) => ***REMOVED***
  let priority;
  switch (CardPriority) ***REMOVED***
    case 1:
      priority = "#ec7f00"
      break;
    case 2:
      priority = "#b0210f"
      break;
    case 3:
      priority = "#557200"
      break;
***REMOVED***

  return (
  <Card className="card" >
    <span style=***REMOVED******REMOVED*** backgroundColor: priority ***REMOVED******REMOVED*** className=***REMOVED***"border__left priority"***REMOVED***></span>
    <div style=***REMOVED******REMOVED*** backgroundColor: priority ***REMOVED******REMOVED*** className="card__header">
      <div className="card__menu">
        <div className='menu__items'>
          <Typography variant="h6" color="#F2F4F5" component="div">
            ***REMOVED***CardTitle***REMOVED***
          </Typography>
          <span style=***REMOVED******REMOVED***fontSize: 13, color: "#F2F4F5"***REMOVED******REMOVED***>
            <span style=***REMOVED******REMOVED***padding: "0rem 1rem"***REMOVED******REMOVED***> - </span>
            Active Items:
            <span className='active__issues'>***REMOVED***ActiveItemsNumber***REMOVED***</span>
          </span>
        </div>
        <IconButton color="inherit" aria-label="menu" sx=***REMOVED******REMOVED***ml: 2***REMOVED******REMOVED***>
          <MoreIcon sx=***REMOVED******REMOVED***color: "#F2F4F5"***REMOVED******REMOVED***/>
        </IconButton>
      </div>
    </div>
    ***REMOVED***/*<div style=***REMOVED******REMOVED***padding: "0.2rem"***REMOVED******REMOVED*** className="card__details">*/***REMOVED***
    ***REMOVED***/*  <div className='project__name'>*/***REMOVED***
    ***REMOVED***/*    <span className='name'>Name:</span>*/***REMOVED***
    ***REMOVED***/*    <span className='project__title'>Wireframe project</span>*/***REMOVED***
    ***REMOVED***/*  </div>*/***REMOVED***
    ***REMOVED***/*  <p style=***REMOVED******REMOVED***fontSize: 12, color: "#040615"***REMOVED******REMOVED***>Last event: <span*/***REMOVED***
    ***REMOVED***/*    className='event__value'>***REMOVED***EventDate***REMOVED*** -  TTest Repl</span></p>*/***REMOVED***
    ***REMOVED***/*</div>*/***REMOVED***
  </Card>
  )
***REMOVED***

export default ProjectCard;