import React, {FunctionComponent, Key} from "react"
import {Card, IconButton, Typography} from "@mui/material";
import MoreIcon from "@mui/icons-material/MoreVert";

interface Props {
  CardPriority: number;
  CardTitle: string;
  ActiveItemsNumber: number;
  EventDate: string;
}

const ProjectCard: FunctionComponent<Props> = ({CardPriority, CardTitle, ActiveItemsNumber, EventDate}) => {
  let priority;
  switch (CardPriority) {
    case 1:
      priority = "#ec7f00"
      break;
    case 2:
      priority = "#b0210f"
      break;
    case 3:
      priority = "#557200"
      break;
  }

  return (
  <Card className="card" >
    <span style={{ backgroundColor: priority }} className={"border__left priority"}></span>
    <div style={{ backgroundColor: priority }} className="card__header">
      <div className="card__menu">
        <div className='menu__items'>
          <Typography variant="h6" color="#F2F4F5" component="div">
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
    {/*<div style={{padding: "0.2rem"}} className="card__details">*/}
    {/*  <div className='project__name'>*/}
    {/*    <span className='name'>Name:</span>*/}
    {/*    <span className='project__title'>Wireframe project</span>*/}
    {/*  </div>*/}
    {/*  <p style={{fontSize: 12, color: "#040615"}}>Last event: <span*/}
    {/*    className='event__value'>{EventDate} -  TTest Repl</span></p>*/}
    {/*</div>*/}
  </Card>
  )
}

export default ProjectCard;