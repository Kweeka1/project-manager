import React, ***REMOVED***Fragment, FunctionComponent, useEffect, useLayoutEffect, useState***REMOVED*** from "react"
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ***REMOVED***Issue, Project***REMOVED*** from "../../interface/IProjectTabs";
import ***REMOVED*** StyledTableRow, StyledTableCell ***REMOVED*** from "../../../../SharedComponents/StyledComponents";
import WorkedOnTabRow from "./WorkedOnTabRow";
import MyIssuesTabRow from "./MyIssuesTabRow";

interface Props ***REMOVED***
  projects: Project[]
***REMOVED***

interface OrderProjectsByTime ***REMOVED***
  thisMonth: Project[];
  lastMonth: Project[];
  last3Months: Project[];
  MoreThan3Months: Project[];
  MoreThan6Months: Project[];
  MoreThan1Year: Project[];
***REMOVED***

const WorkedOnTab: FunctionComponent<Props> = (props) => ***REMOVED***
  const ***REMOVED*** projects ***REMOVED*** = props

  const sortByTime: OrderProjectsByTime = ***REMOVED***
    thisMonth: [],
    lastMonth: [],
    last3Months: [],
    MoreThan3Months: [],
    MoreThan6Months: [],
    MoreThan1Year: []
***REMOVED***

  const Month = 2604800000
  const now = new Date(Date.now()).getTime()

  for (let project of projects) ***REMOVED***
    const IssueCreatedAt = new Date(Date.parse(project.createdOn)).getTime()
    const TimeDifference = now - IssueCreatedAt

    switch (true) ***REMOVED***
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
***REMOVED***
***REMOVED***

  return (
    <TableContainer sx=***REMOVED******REMOVED*** borderRadius: 0 ***REMOVED******REMOVED*** component=***REMOVED***Paper***REMOVED***>
      <Table>
        <TableHead>
          <TableRow sx=***REMOVED******REMOVED*** backgroundColor: "#1976d2", color: "#eaeaea" ***REMOVED******REMOVED***>
            <TableCell />
            <TableCell sx=***REMOVED******REMOVED*** color: "#eaeaea" ***REMOVED******REMOVED***>Projects</TableCell>
            <TableCell sx=***REMOVED******REMOVED*** color: "#eaeaea" ***REMOVED******REMOVED*** align="left">Created On</TableCell>
            <TableCell sx=***REMOVED******REMOVED*** color: "#eaeaea" ***REMOVED******REMOVED*** align="left">Last Action</TableCell>
            <TableCell sx=***REMOVED******REMOVED*** color: "#eaeaea" ***REMOVED******REMOVED*** align="left">By</TableCell>
            <TableCell sx=***REMOVED******REMOVED*** color: "#eaeaea" ***REMOVED******REMOVED*** align="left">Action Date</TableCell>
            <TableCell sx=***REMOVED******REMOVED*** color: "#eaeaea" ***REMOVED******REMOVED*** align="left">Reporter</TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx=***REMOVED******REMOVED***
          "& > tr:nth-of-type(odd)": ***REMOVED***backgroundColor: "rgba(227,232,255,0.78)"***REMOVED***,
          "& > tr:nth-of-type(4n+3)": ***REMOVED***backgroundColor: "rgba(237,241,255,0.69)"***REMOVED***,
          "& > tr > *": ***REMOVED*** border: 0, color: "#0d163d" ***REMOVED***,
          "& > h6": ***REMOVED*** padding: "1rem 1rem",
            fontSize: "16px",
            fontWeight: 500,
            color: "#1f4d98",
            fontFamily: "Open sans",

      ***REMOVED***,

    ***REMOVED******REMOVED***>
          ***REMOVED***
            sortByTime.thisMonth.length ?
              <Fragment>
                <Typography variant="h6" aria-colspan=***REMOVED***8***REMOVED***>
                  This Month
                </Typography>
                ***REMOVED*** sortByTime.thisMonth.map(project => (
                  <WorkedOnTabRow key=***REMOVED***project.id***REMOVED*** project=***REMOVED***project***REMOVED*** />
                ))***REMOVED***
              </Fragment> : ""
      ***REMOVED***
          ***REMOVED***
            sortByTime.lastMonth.length ?
              <Fragment>
                <Typography variant="h6">
                  Last Month
                </Typography>
                ***REMOVED*** sortByTime.lastMonth.map(project => (
                  <WorkedOnTabRow key=***REMOVED***project.id***REMOVED*** project=***REMOVED***project***REMOVED*** />
                ))***REMOVED***
              </Fragment> : ""
      ***REMOVED***
          ***REMOVED***
            sortByTime.last3Months.length ?
              <Fragment>
                <Typography variant="h6">
                  Last 3 Months
                </Typography>
                ***REMOVED*** sortByTime.last3Months.map(project => (
                  <WorkedOnTabRow key=***REMOVED***project.id***REMOVED*** project=***REMOVED***project***REMOVED*** />
                ))***REMOVED***
              </Fragment> : ""
      ***REMOVED***
          ***REMOVED***
            sortByTime.MoreThan3Months.length ?
              <Fragment>
                <Typography variant="h6">
                  More than 3 months
                </Typography>
                ***REMOVED*** sortByTime.MoreThan3Months.map(project => (
                  <WorkedOnTabRow key=***REMOVED***project.id***REMOVED*** project=***REMOVED***project***REMOVED*** />
                ))***REMOVED***
              </Fragment> : ""
      ***REMOVED***
          ***REMOVED***
            sortByTime.MoreThan6Months.length ?
              <Fragment>
                <Typography variant="h6">
                  More than 6 months
                </Typography>
                ***REMOVED*** sortByTime.MoreThan6Months.map(project => (
                  <WorkedOnTabRow key=***REMOVED***project.id***REMOVED*** project=***REMOVED***project***REMOVED*** />
                ))***REMOVED***
              </Fragment> : ""
      ***REMOVED***
          ***REMOVED***
            sortByTime.MoreThan1Year.length ?
              <Fragment>
                <Typography variant="h6">
                  More than a year
                </Typography>
                ***REMOVED*** sortByTime.MoreThan1Year.map(project => (
                  <WorkedOnTabRow key=***REMOVED***project.id***REMOVED*** project=***REMOVED***project***REMOVED*** />
                ))***REMOVED***
              </Fragment> : ""
      ***REMOVED***
        </TableBody>
      </Table>
    </TableContainer>
  );
***REMOVED***

export default WorkedOnTab;