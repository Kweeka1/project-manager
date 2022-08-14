import React, {Fragment, FunctionComponent} from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import {Project} from "../../interface/IProjectTabs";
import WorkedOnTabRow from "./WorkedOnTabRow";
import {useTheme} from "@mui/material";
import {CustomTheme} from "../../../../Contexts/ThemeContext";

interface Props {
  projects: Project[]
}

interface OrderProjectsByTime {
  thisMonth: Project[];
  lastMonth: Project[];
  last3Months: Project[];
  MoreThan3Months: Project[];
  MoreThan6Months: Project[];
  MoreThan1Year: Project[];
}

const WorkedOnTab: FunctionComponent<Props> = (props) => {
  const { projects } = props

  const sortByTime: OrderProjectsByTime = {
    thisMonth: [],
    lastMonth: [],
    last3Months: [],
    MoreThan3Months: [],
    MoreThan6Months: [],
    MoreThan1Year: []
  }

  const Month = 2604800000
  const now = new Date(Date.now()).getTime()

  for (let project of projects) {
    const IssueCreatedAt = new Date(Date.parse(project.createdOn)).getTime()
    const TimeDifference = now - IssueCreatedAt

    switch (true) {
      case (TimeDifference < Month):
        sortByTime.thisMonth.push(project)
        break;
      case (TimeDifference < Month * 2):
        sortByTime.lastMonth.push(project)
        break;
      case (TimeDifference < Month * 3):
        sortByTime.last3Months.push(project)
        break;
      case (TimeDifference > Month * 3 && TimeDifference < Month * 6):
        sortByTime.MoreThan3Months.push(project)
        break;
      case (TimeDifference > Month * 6 && TimeDifference < Month * 12):
        sortByTime.MoreThan6Months.push(project)
        break;
      default:
        sortByTime.MoreThan1Year.push(project)
        break;
    }
  }

  const theme = useTheme<CustomTheme>();

  return (
    <TableContainer sx={{ borderRadius: 0 }} component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{
            backgroundColor: theme.palette.background.paper,
            color: "#eaeaea",
            "& > th": { color: "#eaeaea" }
          }}>
            <TableCell />
            <TableCell>Projects</TableCell>
            <TableCell align="left">Created On</TableCell>
            <TableCell align="left">Last Action</TableCell>
            <TableCell align="left">By</TableCell>
            <TableCell align="left">Action Date</TableCell>
            <TableCell align="left">Reporter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{
          "& > tr:nth-of-type(odd)": {backgroundColor: theme.tableRowColors.odd},
          "& > tr:nth-of-type(4n+3)": {backgroundColor: theme.tableRowColors.even},
          "& > tr > *": { border: 0, color: theme.tableRowColors.text },
          "& > h6": { padding: "1rem 1rem",
            fontSize: "16px",
            fontWeight: 500,
            color: theme.tableRowColors.text,
            fontFamily: "Open sans",
          },

        }}>
          {
            sortByTime.thisMonth.length ?
              <Fragment>
                <Typography variant="h6" aria-colspan={8}>
                  This Month
                </Typography>
                { sortByTime.thisMonth.map(project => (
                  <WorkedOnTabRow key={project.id} project={project} />
                ))}
              </Fragment> : ""
          }
          {
            sortByTime.lastMonth.length ?
              <Fragment>
                <Typography variant="h6">
                  Last Month
                </Typography>
                { sortByTime.lastMonth.map(project => (
                  <WorkedOnTabRow key={project.id} project={project} />
                ))}
              </Fragment> : ""
          }
          {
            sortByTime.last3Months.length ?
              <Fragment>
                <Typography variant="h6">
                  Last 3 Months
                </Typography>
                { sortByTime.last3Months.map(project => (
                  <WorkedOnTabRow key={project.id} project={project} />
                ))}
              </Fragment> : ""
          }
          {
            sortByTime.MoreThan3Months.length ?
              <Fragment>
                <Typography variant="h6">
                  More than 3 months
                </Typography>
                { sortByTime.MoreThan3Months.map(project => (
                  <WorkedOnTabRow key={project.id} project={project} />
                ))}
              </Fragment> : ""
          }
          {
            sortByTime.MoreThan6Months.length ?
              <Fragment>
                <Typography variant="h6">
                  More than 6 months
                </Typography>
                { sortByTime.MoreThan6Months.map(project => (
                  <WorkedOnTabRow key={project.id} project={project} />
                ))}
              </Fragment> : ""
          }
          {
            sortByTime.MoreThan1Year.length ?
              <Fragment>
                <Typography variant="h6">
                  More than a year
                </Typography>
                { sortByTime.MoreThan1Year.map(project => (
                  <WorkedOnTabRow key={project.id} project={project} />
                ))}
              </Fragment> : ""
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WorkedOnTab;