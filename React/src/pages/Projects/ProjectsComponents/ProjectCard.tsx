import React, ***REMOVED***FunctionComponent, Key, SyntheticEvent***REMOVED*** from "react"
import ***REMOVED***Box, Button, Card, IconButton, Paper, Typography, useTheme***REMOVED*** from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ***REMOVED***IProjectCard***REMOVED*** from "../interface/IProjectCard";
import ***REMOVED*** CustomTheme ***REMOVED*** from "../../../Contexts/ThemeContext"
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

  const theme = useTheme<CustomTheme>();

  const navigate = useNavigate();
  const handleViewClick = (e: SyntheticEvent) : void => ***REMOVED***
    e.preventDefault()
    navigate(`/Projects/$***REMOVED***CardTitle***REMOVED***`);
***REMOVED***

  return (
  <Card className="card" >
    <span style=***REMOVED******REMOVED*** backgroundColor: theme.card[CardPriority].cardHeaderBg ***REMOVED******REMOVED*** className=***REMOVED***"border__left"***REMOVED***></span>
    <Box style=***REMOVED******REMOVED*** backgroundColor: theme.card[CardPriority].cardHeaderBg ***REMOVED******REMOVED*** className="card__header">
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
    </Box>
    <Box style=***REMOVED******REMOVED***padding: "0.7rem 0 0.2rem 0.7rem"***REMOVED******REMOVED*** className="card__details">
      <div style=***REMOVED******REMOVED*** width: "53%" ***REMOVED******REMOVED***>
        <Typography component=***REMOVED***"div"***REMOVED*** sx=***REMOVED******REMOVED*** fontSize: "16px", fontWeight: "600"***REMOVED******REMOVED***>
          ***REMOVED***ProjectName.length > 21 ? ProjectName.slice(0, 19) + ".." : ProjectName***REMOVED***
        </Typography>
        <div style=***REMOVED******REMOVED*** padding: "0.2rem" ***REMOVED******REMOVED***>
          <Typography sx=***REMOVED******REMOVED*** paddingBottom: "0.5rem", color: theme.card[CardPriority].cardDetailsIssues ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
            Open Issues: <span style=***REMOVED******REMOVED*** marginLeft: "0.3rem", color: "#646464", backgroundColor: "#e0e4e8", padding: "0.2rem 0.5rem", borderRadius: "1.625rem", fontSize: "13px" ***REMOVED******REMOVED*** >***REMOVED***OpenIssues***REMOVED***</span>
          </Typography>
          <Typography sx=***REMOVED******REMOVED*** color: theme.card[CardPriority].cardDetailsIssues ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
            Done Issues: <span style=***REMOVED******REMOVED*** marginLeft: "0.3rem", color: "#646464", backgroundColor: "#e0e4e8", padding: "0.2rem 0.5rem", borderRadius: "1.625rem", fontSize: "13px" ***REMOVED******REMOVED*** >***REMOVED***DoneIssues***REMOVED***</span>
          </Typography>
        </div>
      </div>
      <Box style=***REMOVED******REMOVED*** width: "47%", display: "flex", flexDirection: "column", gap: "0.2rem" ***REMOVED******REMOVED***>
        <Typography sx=***REMOVED******REMOVED*** fontSize: "13px" ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
          Created On ***REMOVED***EventDate***REMOVED***
        </Typography>
        <Typography sx=***REMOVED******REMOVED*** fontSize: "13px", color: theme.card[CardPriority].cardDetailsInfo ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
          Assignees: <span style=***REMOVED******REMOVED*** marginLeft: "0.3rem", color: "#646464", backgroundColor: "#e0e4e8", padding: "0.2rem 0.5rem", borderRadius: "1.625rem" ***REMOVED******REMOVED*** >***REMOVED***Assignees***REMOVED***</span>
        </Typography>
        <Typography sx=***REMOVED******REMOVED*** fontSize: "13px", color: theme.card[CardPriority].cardDetailsInfo ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
          Reporter:
        </Typography>
        <Typography sx=***REMOVED******REMOVED*** fontSize: "13px", color: "#646464" ***REMOVED******REMOVED*** component=***REMOVED***"p"***REMOVED***>
          ***REMOVED***Reporter***REMOVED***
        </Typography>
      </Box>
    </Box>
    <Box style=***REMOVED******REMOVED*** display: "flex", justifyContent: "flex-end", gap: "1rem", padding: "0 0.8rem", alignItems: "center", height: "55px" ***REMOVED******REMOVED***>
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
    </Box>
  </Card>
  )
***REMOVED***

export default ProjectCard;