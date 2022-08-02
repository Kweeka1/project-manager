import React, {FunctionComponent, Key, SyntheticEvent} from "react"
import {Button, Card, IconButton, Typography} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {CardDetails, Priority} from "../interface/CardDetails";
import {useNavigate} from "react-router-dom";

const ProjectCard: FunctionComponent<CardDetails> = (
  {
    CardPriority,
    CardTitle,
    ProjectName,
    ActiveItemsNumber,
    EventDate,
    Assignees,
    DoneIssues,
    OpenIssues,
    Reporter,
    BoardNumber
  }) => {

  const priority: Priority = {
    lowest: {
      cardHeaderBg: "#445E93",
      cardDetailsIssues: "#3a75e5",
      cardDetailsInfo: "#0042b4"
    },
    low: {
      cardHeaderBg: "#668F80",
      cardDetailsIssues: "#008359",
      cardDetailsInfo: "#0e7049"
    },
    medium: {
      cardHeaderBg: "#717e0d",
      cardDetailsIssues: "#7d851d",
      cardDetailsInfo: "#5c6b05"
    },
    high: {
      cardHeaderBg: "#cb5d2d",
      cardDetailsIssues: "#b05833",
      cardDetailsInfo: "#af4413"
    },
    highest: {
      cardHeaderBg: "#A30B37",
      cardDetailsIssues: "#c54569",
      cardDetailsInfo: "#98052a"
    }
  };

  const navigate = useNavigate();
  const handleViewClick = (e: SyntheticEvent) : void => {
    e.preventDefault()
    navigate(`/Projects/${CardTitle}`);
  }

  return (
  <Card className="card" >
    <span style={{ backgroundColor: priority[CardPriority].cardHeaderBg }} className={"border__left priority"}></span>
    <div style={{ backgroundColor: priority[CardPriority].cardHeaderBg }} className="card__header">
      <div className="card__menu">
        <div className='menu__items'>
          <Typography variant="h6" color="#F2F4F5" component="p">
            {CardTitle}
          </Typography>
          <span style={{fontSize: 13, color: "#F2F4F5"}}>
            <span style={{padding: "0rem 1rem"}}> - </span>
            Active Items:
            <span className='active__issues'>{ActiveItemsNumber}</span>
          </span>
        </div>
        <IconButton color="inherit" aria-label="menu" sx={{ml: 2}}>
          <MoreIcon sx={{color: "#F2F4F5"}}/>
        </IconButton>
      </div>
    </div>
    <div style={{padding: "0.7rem 0 0.2rem 0.7rem"}} className="card__details">
      <div style={{ width: "53%" }}>
        <Typography component={"div"} sx={{ fontSize: "16px", fontWeight: "600"}}>
          {ProjectName.length > 21 ? ProjectName.slice(0, 19) + ".." : ProjectName}
        </Typography>
        <div style={{ padding: "0.2rem" }}>
          <Typography sx={{ paddingBottom: "0.5rem", color: priority[CardPriority].cardDetailsIssues }} component={"p"}>
            Open Issues: <span style={{ marginLeft: "0.3rem", color: "#646464", backgroundColor: "#e0e4e8", padding: "0.2rem 0.5rem", borderRadius: "1.625rem", fontSize: "13px" }} >{OpenIssues}</span>
          </Typography>
          <Typography sx={{ color: priority[CardPriority].cardDetailsIssues }} component={"p"}>
            Done Issues: <span style={{ marginLeft: "0.3rem", color: "#646464", backgroundColor: "#e0e4e8", padding: "0.2rem 0.5rem", borderRadius: "1.625rem", fontSize: "13px" }} >{DoneIssues}</span>
          </Typography>
        </div>
      </div>
      <div style={{ width: "47%", display: "flex", flexDirection: "column", gap: "0.2rem" }}>
        <Typography sx={{ fontSize: "13px" }} component={"p"}>
          Created On {EventDate}
        </Typography>
        <Typography sx={{ fontSize: "13px", color: priority[CardPriority].cardDetailsInfo }} component={"p"}>
          Assignees: <span style={{ marginLeft: "0.3rem", color: "#646464", backgroundColor: "#e0e4e8", padding: "0.2rem 0.5rem", borderRadius: "1.625rem" }} >{Assignees}</span>
        </Typography>
        <Typography sx={{ fontSize: "13px", color: priority[CardPriority].cardDetailsInfo }} component={"p"}>
          Reporter:
        </Typography>
        <Typography sx={{ fontSize: "13px", color: "#646464" }} component={"p"}>
          {Reporter}
        </Typography>
      </div>
    </div>
    <div style={{ display: "flex", justifyContent: "flex-end", gap: "1rem", padding: "0 0.8rem", alignItems: "center", height: "55px" }}>
      <Button
        sx={{ lineHeight: "0" }}
        variant="contained"
        disableElevation
        endIcon={<KeyboardArrowDownIcon />}
      >{BoardNumber} Boards</Button>
      <Button
        sx={{ lineHeight: "0" }}
        variant="text"
        disableElevation
        endIcon={<KeyboardArrowRightIcon />}
        onClick={(e) => handleViewClick(e)}
      >VIEW</Button>
    </div>
  </Card>
  )
}

export default ProjectCard;