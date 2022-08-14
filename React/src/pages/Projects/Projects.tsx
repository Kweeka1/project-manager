import React, {
  Fragment,
  FunctionComponent,
  MouseEvent,
  SyntheticEvent,
  useContext,
  useEffect,
  useRef,
  useState
} from "react"
import {Box, Button, Paper, Typography, useMediaQuery, useTheme} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {motion} from "framer-motion";
import {IProjectCard, Priority} from "./interface/IProjectCard";
import {alpha, random} from "../../Extensions/UsefulFunctions";
import Tabs from "../../SharedComponents/Tabs";
import WorkedOnTab from "./ProjectsComponents/TabsComponents/WorkedOnTab";
import ProjectCard from "./ProjectsComponents/ProjectCard";
import {Issue, Project} from "./interface/IProjectTabs";
import MyIssuesTab from "./ProjectsComponents/TabsComponents/MyIssuesTab";
import {ColorModeContext, CustomTheme} from "../../Contexts/ThemeContext";

const Projects: FunctionComponent = () => {
  const [ProjectsAnchorEl, setProjectsAnchorEl] = useState<null | HTMLElement>(null);
  const [cards, setCards] = useState<IProjectCard[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [carouselWidth, setCarouselWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null);

  const handleProjectsMenuOpen = (event: MouseEvent<HTMLElement>): void => setProjectsAnchorEl(event.currentTarget);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const colorModeContext = useContext(ColorModeContext);

  useEffect(() => {
    const issues = ["Task1", "Task2", "Bug fix", "wireframe1", "landing page", "Tracker", "Contact page", "loading page"]
    const actions = ["Comment On Issue", "Comment On project", "Updated Issue", "Updated project", "Created Issue", "Created project", "Deleted Issue", "Assigned people"]
    const issueActions = ["Comment On Issue", "Updated Issue", "Created Issue", "Deleted Issue", "Assigned people"]
    const priority = ["lowest", "low", "medium", "high", "highest"]
    const projects = ["Wireframe", "NewsApp", "Ecommerce", "Web scraper", "Mario game", "Chat app", "Social app", "Figma plugin", "Android Browser", "Fix security Issue", "Add Newsletter feature"]
    const Names = ["Hogan Beaman", "Connie Seale", "Anselm Byham", "Boris Cescoti", "Jennilee Hatley", "Ernst Berntsson", "Bennie Courcey", "Miguel Mosten", "Ferd Leethem", "Osborn Lidierth"]
    const items: IProjectCard[] = Array.from(Array(10)).map(() => ({
        Reporter: Names[random(0, Names.length)],
        Assignees: random(9, 45),
        BoardNumber: random(1, 5),
        DoneIssues: random(5, 20),
        OpenIssues: random(4, 40),
        ProjectName: projects[random(0, projects.length)],
        CardPriority: priority[random(0, priority.length)] as keyof Priority,
        CardTitle: `${alpha[random(0, 26)]}${alpha[random(0, 26)]}${random(1, 10)}`,
        ActiveItemsNumber: random(5, 30),
        EventDate: `2022-${random(1, 8)}-${random(1, 32)}`
    }))
    const issuesObj = () : Issue[] => {
      return Array.from(Array(5)).map((k, i) => ({
        id: random(1, 10000),
        name: issues[random(0, issues.length)],
        createdOn: `2022-${random(1, 8)}-${random(1, 32)}`,
        action: issueActions[random(0, issueActions.length)],
        actionDate: `2022-${random(1, 8)}-${random(1, 32)}`,
        reporter: items[i].Reporter
      }))
    }
    const project: Project[] = Array.from(Array(5)).map((k, i) => ({
      id: random(1, 100000),
      name: items[i].ProjectName,
      createdOn: items[i].EventDate,
      lastAction: actions[random(0, actions.length)],
      by: Names[random(0, Names.length)],
      lastActionDate: `20${random(14, 23)}-${random(1, 13)}-${random(1, 32)}`,
      reporter: items[i].Reporter,
      boards: Array.from(Array(random(1, 4))).map(() => ({
        name: `${alpha[random(0, 26)]}${alpha[random(0, 26)]}${random(1, 10)}`,
        issues: issuesObj()
      }))
    }))
    setCards(items)
    setProjects(project)
    setIssues(issuesObj)
    if (prefersDarkMode) colorModeContext.toggleColorMode();
  }, [])

  useEffect(() => {
    if (carousel.current !== null) {
      setCarouselWidth(window.innerWidth - carousel.current.scrollWidth)
    }
  }, [cards])

  const theme = useTheme<CustomTheme>();

  return (
    <Fragment>
      <Paper sx={{ borderRadius: 0, boxShadow: "none" }} className={"cards__container__menu"}>
        <Typography sx={{fontSize: 18, color: "#2196f3", width: "auto"}}>
          Manage Your Projects
        </Typography>
        <Box className={"menu__buttons"}>
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
        </Box>
      </Paper>
      <Box sx={{position: "relative", backgroundColor: `${theme.palette.mode === "light" ? "#d7d8dc" : theme.palette.background.default}` }}>
        <motion.div
          className='cards__container'
          style={{ backgroundColor: `${theme.palette.mode === "light" ? "#d7d8dc" : theme.palette.background.default}` }}
          ref={carousel}
          drag={carouselWidth > 0 ? false : "x"} dragConstraints={{
          left: carouselWidth - 10,
          right: 0,
        }}>
          {
            cards.map((card, index) =>
              <ProjectCard key={index} projects={card} />
            )
          }
        </motion.div>
        <span style={{ height: "272px", width: "10px", position: "absolute", backgroundColor: `${theme.palette.mode === "light" ? "#d7d8dc" : theme.palette.background.default}`, top: 0, right: 0 }}></span>
      </Box>
      <Tabs tabNames={["Worked On", "Assigned To Me"]} sx={{ paddingTop: "1rem", borderColor: 'divider', backgroundColor:  theme.palette.background.paper}} >
        <WorkedOnTab projects={projects} />
        <MyIssuesTab issues={issues} />
      </Tabs>
    </Fragment>
  )
}

export default Projects;