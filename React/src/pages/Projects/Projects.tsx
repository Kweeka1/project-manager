import React, {FunctionComponent, MouseEvent, SyntheticEvent, useEffect, useRef, useState} from "react"
import {Box, Button, Tab, Typography} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {motion} from "framer-motion";
import ProjectCard from "./ProjectsComponents/ProjectCard";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {CardDetails, Priority} from "./interface/CardDetails";
import {alpha, random} from "../../Extensions/UsefulFunctions";

const Projects: FunctionComponent = () => {
  const [ProjectsAnchorEl, setProjectsAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState('1');
  const [cards, setCards] = useState<CardDetails[]>([]);
  const [carouselWidth, setCarouselWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null);

  const handleProjectsMenuOpen = (event: MouseEvent<HTMLElement>): void => setProjectsAnchorEl(event.currentTarget);
  const handleChange = (e: SyntheticEvent, newValue: string): void => setValue(newValue)


  useEffect(() => {
    const priority = ["lowest", "low", "medium", "high", "highest"]
    const projects = ["Wireframe", "NewsApp", "Ecommerce", "Web scraper", "Mario game", "Chat app", "Social app", "Figma plugin", "Android Browser", "Fix security Issue", "Add Newsletter feature"]
    const Names = ["John Meguel", "Avigar Adrai", "Tarek Ben Ahmed", "Wei Xi Pong", "Barrack Obama", "Naftaly Benett", "Boris Johnson"]
    const items: CardDetails[] = Array.from(Array(10)).map((k, i) => ({
        Reporter: Names[random(0, Names.length)],
        Assignees: random(0, 45),
        BoardNumber: random(0, 5),
        DoneIssues: random(0, 20),
        OpenIssues: random(0, 40),
        ProjectName: projects[random(0, projects.length)],
        CardPriority: priority[random(0, priority.length)] as keyof Priority,
        CardTitle: `${alpha[random(0, 26)]}${alpha[random(1, 26)]}${random(1, 10)}`,
        ActiveItemsNumber: random(0, 30),
        EventDate: `${random(0, 32)}/${random(0, 13)}/20${random(14, 23)}`
    }))
    setCards(items)
  }, [])

  useEffect(() => {
    if (carousel.current !== null) {
      setCarouselWidth(window.innerWidth - carousel.current.scrollWidth)
      console.log(carouselWidth)
    }
  }, [cards])

  return (
    <>
      <div className={"cards__container__menu"}>
        <Typography sx={{fontSize: 18, color: "#2196f3", width: "auto"}}>
          Manage Your Projects
        </Typography>
        <div className={"menu__buttons"}>
          <Button
            className={"sort__button"}
            variant="outlined"
            disableElevation
            onClick={handleProjectsMenuOpen}
          >VIEW ALL</Button>
          <Button
            className={"sort__button"}
            variant="outlined"
            disableElevation
            onClick={handleProjectsMenuOpen}
            endIcon={<KeyboardArrowDownIcon/>}
          >Sort By</Button>
        </div>
      </div>
      <div style={{position: "relative", backgroundColor: "#F2F4F5"}}>
        <motion.div
          className='cards__container'
          ref={carousel}
          drag={carouselWidth > 0 ? false : "x"} dragConstraints={{
          left: carouselWidth,
          right: 0,
        }}>
          {
            cards.map((card, index) =>
              <ProjectCard
                key={index}
                CardPriority={card.CardPriority}
                ActiveItemsNumber={card.ActiveItemsNumber}
                CardTitle={card.CardTitle}
                EventDate={card.EventDate}
                Assignees={card.Assignees}
                BoardNumber={card.BoardNumber}
                DoneIssues={card.DoneIssues}
                OpenIssues={card.OpenIssues}
                ProjectName={card.ProjectName}
                Reporter={card.Reporter}
              />)
          }
        </motion.div>
      </div>
      <TabContext value={value}>
        <Box sx={{borderBottom: 1, borderColor: 'divider', margin: "2rem 0 0 0"}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Worked On" value="1"/>
            <Tab label="Assigned to me" value="2"/>
            <Tab label="Item Three" value="3"/>
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </>
  )
}

export default Projects;