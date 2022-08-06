import React, ***REMOVED***Fragment, FunctionComponent, MouseEvent, SyntheticEvent, useEffect, useRef, useState***REMOVED*** from "react"
import ***REMOVED***Button, Typography***REMOVED*** from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ***REMOVED***motion***REMOVED*** from "framer-motion";
import ***REMOVED***IProjectCard, Priority***REMOVED*** from "./interface/IProjectCard";
import ***REMOVED***alpha, random***REMOVED*** from "../../Extensions/UsefulFunctions";
import Tabs from "../../SharedComponents/Tabs";
import WorkedOnTab from "./ProjectsComponents/TabsComponents/WorkedOnTab";
import ProjectCard from "./ProjectsComponents/ProjectCard";
import ***REMOVED***Issue, Project***REMOVED*** from "./interface/IProjectTabs";
import MyIssuesTab from "./ProjectsComponents/TabsComponents/MyIssuesTab";

const Projects: FunctionComponent = () => ***REMOVED***
  const [ProjectsAnchorEl, setProjectsAnchorEl] = useState<null | HTMLElement>(null);
  const [cards, setCards] = useState<IProjectCard[]>([]);
  const [projects, setProjects] = useState<Project[]>([]);
  const [issues, setIssues] = useState<Issue[]>([]);
  const [carouselWidth, setCarouselWidth] = useState(0)
  const carousel = useRef<HTMLDivElement>(null);

  const handleProjectsMenuOpen = (event: MouseEvent<HTMLElement>): void => setProjectsAnchorEl(event.currentTarget);



  useEffect(() => ***REMOVED***
    const issues = ["Task1", "Task1", "Bug fix", "wireframe1", "landing page", "Tracker", "Contact page", "loading page"]
    const actions = ["Comment On Issue", "Comment On project", "Updated Issue", "Updated project", "Created Issue", "Created project", "Deleted Issue", "Assigned people"]
    const issueActions = ["Comment On Issue", "Updated Issue", "Created Issue", "Deleted Issue", "Assigned people"]
    const priority = ["lowest", "low", "medium", "high", "highest"]
    const projects = ["Wireframe", "NewsApp", "Ecommerce", "Web scraper", "Mario game", "Chat app", "Social app", "Figma plugin", "Android Browser", "Fix security Issue", "Add Newsletter feature"]
    const Names = ["John Meguel", "Avigar Adrai", "Tarek Ben Ahmed", "Wei Xi Pong", "Barrack Obama", "Naftaly Benett", "Boris Johnson"]
    const items: IProjectCard[] = Array.from(Array(10)).map(() => (***REMOVED***
        Reporter: Names[random(0, Names.length)],
        Assignees: random(9, 45),
        BoardNumber: random(1, 5),
        DoneIssues: random(5, 20),
        OpenIssues: random(4, 40),
        ProjectName: projects[random(0, projects.length)],
        CardPriority: priority[random(0, priority.length)] as keyof Priority,
        CardTitle: `$***REMOVED***alpha[random(0, 26)]***REMOVED***$***REMOVED***alpha[random(0, 26)]***REMOVED***$***REMOVED***random(1, 10)***REMOVED***`,
        ActiveItemsNumber: random(5, 30),
        EventDate: `2022-$***REMOVED***random(1, 8)***REMOVED***-$***REMOVED***random(1, 32)***REMOVED***`
***REMOVED***))
    const issuesObj = () : Issue[] => ***REMOVED***
      return Array.from(Array(5)).map((k, i) => (***REMOVED***
        id: random(1, 10000),
        name: issues[random(0, issues.length)],
        createdOn: `2022-$***REMOVED***random(1, 8)***REMOVED***-$***REMOVED***random(1, 32)***REMOVED***`,
        action: issueActions[random(0, issueActions.length)],
        actionDate: `2022-$***REMOVED***random(1, 8)***REMOVED***-$***REMOVED***random(1, 32)***REMOVED***`,
        reporter: items[i].Reporter
  ***REMOVED***))
***REMOVED***
    const project: Project[] = Array.from(Array(5)).map((k, i) => (***REMOVED***
      id: random(1, 100000),
      name: items[i].ProjectName,
      createdOn: items[i].EventDate,
      lastAction: actions[random(0, actions.length)],
      by: Names[random(0, Names.length)],
      lastActionDate: `20$***REMOVED***random(14, 23)***REMOVED***-$***REMOVED***random(1, 13)***REMOVED***-$***REMOVED***random(1, 32)***REMOVED***`,
      reporter: items[i].Reporter,
      boards: Array.from(Array(random(1, 4))).map(() => (***REMOVED***
        name: `$***REMOVED***alpha[random(0, 26)]***REMOVED***$***REMOVED***alpha[random(0, 26)]***REMOVED***$***REMOVED***random(1, 10)***REMOVED***`,
        issues: issuesObj()
  ***REMOVED***))
***REMOVED***))
    setCards(items)
    setProjects(project)
    setIssues(issuesObj)
***REMOVED*** [])

  useEffect(() => ***REMOVED***
    if (carousel.current !== null) ***REMOVED***
      setCarouselWidth(window.innerWidth - carousel.current.scrollWidth)
***REMOVED***
***REMOVED*** [cards])

  return (
    <Fragment>
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
          left: carouselWidth - 10,
          right: 0,
    ***REMOVED******REMOVED***>
          ***REMOVED***
            cards.map((card, index) =>
              <ProjectCard key=***REMOVED***index***REMOVED*** projects=***REMOVED***card***REMOVED*** />
            )
      ***REMOVED***
        </motion.div>
        <span style=***REMOVED******REMOVED*** height: "272px", width: "10px", position: "absolute", backgroundColor: "#F2F4F5", top: 0, right: 0 ***REMOVED******REMOVED***></span>
      </div>
      <Tabs tabNames=***REMOVED***["Worked On", "Assigned To Me"]***REMOVED*** sx=***REMOVED******REMOVED*** borderBottom: 1, borderColor: 'divider', margin: "1rem 0 0 0" ***REMOVED******REMOVED*** >
        <WorkedOnTab projects=***REMOVED***projects***REMOVED*** />
        <MyIssuesTab issues=***REMOVED***issues***REMOVED*** />
      </Tabs>
    </Fragment>
  )
***REMOVED***

export default Projects;