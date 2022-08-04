import React, ***REMOVED***FunctionComponent, Key, SyntheticEvent***REMOVED*** from "react"
import ***REMOVED***Button, Card, IconButton, Typography***REMOVED*** from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ***REMOVED***IProjectCard, Priority***REMOVED*** from "../interface/IProjectCard";
import ***REMOVED***useNavigate***REMOVED*** from "react-router-dom";

interface Props ***REMOVED***
  projects: IProjectCard;
***REMOVED***

const ProjectCard: FunctionComponent<Props> = (props) => ***REMOVED***
  const ***REMOVED***
    Reporter,
    EventDate,
    ProjectName,
    ActiveItemsNumber,
    Assignees,
    BoardNumber,
    CardPriority,
    CardTitle,
    DoneIssues,
    OpenIssues ***REMOVED***: IProjectCard = props.projects;

  const priority: Priority = ***REMOVED***
    lowest: ***REMOVED***
      cardHeaderBg: "#445E93",
      cardDetailsIssues: "#3a75e5",
      cardDetailsInfo: "#0042b4"
***REMOVED***,
    low: ***REMOVED***
      cardHeaderBg: "#668F80",
      cardDetailsIssues: "#008359",
      cardDetailsInfo: "#0e7049"
***REMOVED***,
    medium: ***REMOVED***
      cardHeaderBg: "#717e0d",
      cardDetailsIssues: "#7d851d",
      cardDetailsInfo: "#5c6b05"
***REMOVED***,
    high: ***REMOVED***
      cardHeaderBg: "#cb5d2d",
      cardDetailsIssues: "#b05833",
      cardDetailsInfo: "#af4413"
***REMOVED***,
    highest: ***REMOVED***
      cardHeaderBg: "#A30B37",
      cardDetailsIssues: "#c54569",
      cardDetailsInfo: "#98052a"
***REMOVED***
***REMOVED***;

  const navigate = useNavigate();
  const handleViewClick = (e: SyntheticEvent) : void => ***REMOVED***
    e.preventDefault()
    navigate(`/Projects/$***REMOVED***CardTitle***REMOVED***`);
***REMOVED***

  return (
  <Card className="card" >
    <span style=***REMOVED******REMOVED*** backgroundColor: priority[CardPriority].cardHeaderBg ***REMOVED******REMOVED*** className=***REMOVED***"border__left priority"***REMOVED***></span>
    <div style=***REMOVED******REMOVED*** backgroundColor: priority[CardPriority].cardHeaderBg ***REMOVED******REMOVED*** className="card__header">
      <div className="card__menu">
        <div className='menu__items'>
          <Typography variant="h6" color="#F2F4F5" component="p">
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
    <div style=***REMOVED******REMOVED***padding: "0.7rem 0 0.2rem 0.7rem"***REMOVED******REMOVED*** className="card__details">
      <div style=***REMOVED******REMOVED*** width: "53%" ***REMOVED******REMOVED***>
        <Typography component=***REMOVED***"div"***REMOVED*** sx=***REMOVED******REMOVED*** fontSize: "16px", fontWeight: "600"***REMOVED******REMOVED***>
          ***REMOVED***ProjectName.length > 21 ? ProjectName.slice(0, 19) + ".." : ProjectName***REMOVED***
        </Typography>
        <div style=***REMOVED******REMOVED*** padding: "0.2rem" ***REMOVED******REMOVED***>
          <Typography sx=***REMOVED******REMOVED*** paddingBottom: "0.5rem", color: priority[CardPriority].cardDetailsIssues ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
            Open Issues: <span style=***REMOVED******REMOVED*** marginLeft: "0.3rem", color: "#646464", backgroundColor: "#e0e4e8", padding: "0.2rem 0.5rem", borderRadius: "1.625rem", fontSize: "13px" ***REMOVED******REMOVED*** >***REMOVED***OpenIssues***REMOVED***</span>
          </Typography>
          <Typography sx=***REMOVED******REMOVED*** color: priority[CardPriority].cardDetailsIssues ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
            Done Issues: <span style=***REMOVED******REMOVED*** marginLeft: "0.3rem", color: "#646464", backgroundColor: "#e0e4e8", padding: "0.2rem 0.5rem", borderRadius: "1.625rem", fontSize: "13px" ***REMOVED******REMOVED*** >***REMOVED***DoneIssues***REMOVED***</span>
          </Typography>
        </div>
      </div>
      <div style=***REMOVED******REMOVED*** width: "47%", display: "flex", flexDirection: "column", gap: "0.2rem" ***REMOVED******REMOVED***>
        <Typography sx=***REMOVED******REMOVED*** fontSize: "13px" ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
          Created On ***REMOVED***EventDate***REMOVED***
        </Typography>
        <Typography sx=***REMOVED******REMOVED*** fontSize: "13px", color: priority[CardPriority].cardDetailsInfo ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
          Assignees: <span style=***REMOVED******REMOVED*** marginLeft: "0.3rem", color: "#646464", backgroundColor: "#e0e4e8", padding: "0.2rem 0.5rem", borderRadius: "1.625rem" ***REMOVED******REMOVED*** >***REMOVED***Assignees***REMOVED***</span>
        </Typography>
        <Typography sx=***REMOVED******REMOVED*** fontSize: "13px", color: priority[CardPriority].cardDetailsInfo ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
          Reporter:
        </Typography>
        <Typography sx=***REMOVED******REMOVED*** fontSize: "13px", color: "#646464" ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
          ***REMOVED***Reporter***REMOVED***
        </Typography>
      </div>
    </div>
    <div style=***REMOVED******REMOVED*** display: "flex", justifyContent: "flex-end", gap: "1rem", padding: "0 0.8rem", alignItems: "center", height: "55px" ***REMOVED******REMOVED***>
      <Button
        sx=***REMOVED******REMOVED*** lineHeight: "0" ***REMOVED******REMOVED***
        variant="contained"
        disableElevation
        endIcon=***REMOVED***<KeyboardArrowDownIcon />***REMOVED***
      >***REMOVED***BoardNumber***REMOVED*** Boards</Button>
      <Button
        sx=***REMOVED******REMOVED*** lineHeight: "0" ***REMOVED******REMOVED***
        variant="text"
        disableElevation
        endIcon=***REMOVED***<KeyboardArrowRightIcon />***REMOVED***
        onClick=***REMOVED***(e) => handleViewClick(e)***REMOVED***
      >VIEW</Button>
    </div>
  </Card>
  )
***REMOVED***

export default ProjectCard;