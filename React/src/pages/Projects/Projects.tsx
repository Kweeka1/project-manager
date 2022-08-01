import React, ***REMOVED***FunctionComponent, MouseEvent, SyntheticEvent, useEffect, useRef, useState***REMOVED*** from "react"
import ***REMOVED***Box, Button, Tab, Typography***REMOVED*** from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ***REMOVED***motion***REMOVED*** from "framer-motion";
import ProjectCard from "./ProjectsComponents/ProjectCard";
import ***REMOVED***TabContext, TabList, TabPanel***REMOVED*** from "@mui/lab";
import ***REMOVED***CardDetails***REMOVED*** from "./interface/CardDetails";
import ***REMOVED***alpha, random***REMOVED*** from "../../Extensions/UsefulFunctions";

const Projects: FunctionComponent = () => ***REMOVED***
  const [ProjectsAnchorEl, setProjectsAnchorEl] = useState<null | HTMLElement>(null);
  const [value, setValue] = useState('1');
  const [cards, setCards] = useState<CardDetails[]>([]);
  const [carouselWidth, setCarouselWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null);

  const handleProjectsMenuOpen = (event: MouseEvent<HTMLElement>): void => setProjectsAnchorEl(event.currentTarget);
  const handleChange = (e: SyntheticEvent, newValue: string): void => setValue(newValue)


  useEffect(() => ***REMOVED***
    const items: CardDetails[] = Array.from(Array(10)).map((k, i) => (***REMOVED***
        CardPriority: random(1, 4),
        CardTitle: `$***REMOVED***alpha[random(1, 26)]***REMOVED***$***REMOVED***alpha[random(1, 26)]***REMOVED***$***REMOVED***random(1, 10)***REMOVED***`,
        ActiveItemsNumber: random(1, 30),
        EventDate: `$***REMOVED***random(1, 32)***REMOVED***/$***REMOVED***random(1, 13)***REMOVED***/20$***REMOVED***random(14, 23)***REMOVED***`
***REMOVED***))
    setCards(items)
***REMOVED*** [])

  useEffect(() => ***REMOVED***
    if (carousel.current !== null) ***REMOVED***
      setCarouselWidth(window.innerWidth - carousel.current.scrollWidth)
      console.log(carouselWidth)
***REMOVED***
***REMOVED*** [cards])

  return (
    <>
      <div className=***REMOVED***"cards__container__menu"***REMOVED***>
        <Typography sx=***REMOVED******REMOVED***fontSize: 18, color: "#2196f3", width: "auto"***REMOVED******REMOVED***>
          Manage Your Projects
        </Typography>
        <div className=***REMOVED***"menu__buttons"***REMOVED***>
          <Button
            className=***REMOVED***"sort__button"***REMOVED***
            variant="outlined"
            disableElevation
            onClick=***REMOVED***handleProjectsMenuOpen***REMOVED***
          >VIEW ALL</Button>
          <Button
            className=***REMOVED***"sort__button"***REMOVED***
            variant="outlined"
            disableElevation
            onClick=***REMOVED***handleProjectsMenuOpen***REMOVED***
            endIcon=***REMOVED***<KeyboardArrowDownIcon/>***REMOVED***
          >Sort By</Button>
        </div>
      </div>
      <div style=***REMOVED******REMOVED***position: "relative", backgroundColor: "#F2F4F5"***REMOVED******REMOVED***>
        <motion.div
          className='cards__container'
          ref=***REMOVED***carousel***REMOVED***
          drag=***REMOVED***carouselWidth > 0 ? false : "x"***REMOVED*** dragConstraints=***REMOVED******REMOVED***
          left: carouselWidth,
          right: 0,
    ***REMOVED******REMOVED***>
          ***REMOVED***
            cards.map((card, i) =>
              <ProjectCard
                key=***REMOVED***i***REMOVED***
                CardPriority=***REMOVED***card.CardPriority***REMOVED***
                ActiveItemsNumber=***REMOVED***card.ActiveItemsNumber***REMOVED***
                CardTitle=***REMOVED***card.CardTitle***REMOVED***
                EventDate=***REMOVED***card.EventDate***REMOVED***
              />)
      ***REMOVED***
        </motion.div>
      </div>
      <TabContext value=***REMOVED***value***REMOVED***>
        <Box sx=***REMOVED******REMOVED***borderBottom: 1, borderColor: 'divider', margin: "2rem 0 0 0"***REMOVED******REMOVED***>
          <TabList onChange=***REMOVED***handleChange***REMOVED*** aria-label="lab API tabs example">
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
***REMOVED***

export default Projects;