import React, ***REMOVED***Fragment, FunctionComponent, useEffect, useState***REMOVED*** from "react"
import ***REMOVED***Issue***REMOVED*** from "../../interface/IProjectTabs";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import MyIssuesTabRow from "./MyIssuesTabRow";
import Typography from "@mui/material/Typography";

interface Props ***REMOVED***
  issues: Issue[]
***REMOVED***

const MyIssuesTab: FunctionComponent<Props> = (props) => ***REMOVED***
  let last2Years = []
  let last4Years = []
  let last6Years = []
  const now = new Date(Date.now()).getFullYear()
  const ***REMOVED*** issues ***REMOVED*** = props
  for (let i = 0; i < issues.length; i++) ***REMOVED***
    const diff = now - new Date(Date.parse(issues[i].createdOn)).getFullYear()
    switch (diff) ***REMOVED***
      case 0:
      case 1:
      case 2:
        last2Years.push(issues[i])
        break;
      case 3:
      case 4:
        last4Years.push(issues[i])
        break;
      default:
        last6Years.push(issues[i])
        break;
***REMOVED***
***REMOVED***

  return (
    <TableContainer sx=***REMOVED******REMOVED*** borderRadius: 0 ***REMOVED******REMOVED*** component=***REMOVED***Paper***REMOVED***>
      <Table>
        <TableHead>
          <TableRow sx=***REMOVED******REMOVED*** backgroundColor: "#1976d2", color: "#eaeaea" ***REMOVED******REMOVED***>
            <TableCell sx=***REMOVED******REMOVED*** color: "#eaeaea" ***REMOVED******REMOVED***>Issues</TableCell>
            <TableCell sx=***REMOVED******REMOVED*** color: "#eaeaea" ***REMOVED******REMOVED*** align="left">Created On</TableCell>
            <TableCell sx=***REMOVED******REMOVED*** color: "#eaeaea" ***REMOVED******REMOVED*** align="left">Last Action</TableCell>
            <TableCell sx=***REMOVED******REMOVED*** color: "#eaeaea" ***REMOVED******REMOVED*** align="left">Action Date</TableCell>
            <TableCell sx=***REMOVED******REMOVED*** color: "#eaeaea" ***REMOVED******REMOVED*** align="left">Reporter</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          ***REMOVED***
            last2Years.length ?
              <Fragment>
                  <Typography variant="h6" gutterBottom component="div" sx=***REMOVED******REMOVED*** padding: "1rem 1rem" ***REMOVED******REMOVED***>
                      Last 2 Years
                  </Typography>
                  ***REMOVED*** last2Years.map(issue => (
                    <MyIssuesTabRow key=***REMOVED***issue.id***REMOVED*** issue=***REMOVED***issue***REMOVED*** />
                  ))***REMOVED***
              </Fragment> : ""
      ***REMOVED***
          ***REMOVED***
            last4Years.length ?
              <Fragment>
                  <Typography variant="h6" gutterBottom component="div" sx=***REMOVED******REMOVED*** padding: "1rem 1rem" ***REMOVED******REMOVED***>
                      Last 4 Years
                  </Typography>
                ***REMOVED*** last4Years.map(issue => (
                  <MyIssuesTabRow key=***REMOVED***issue.id***REMOVED*** issue=***REMOVED***issue***REMOVED*** />
                ))***REMOVED***
              </Fragment> : ""
      ***REMOVED***
          ***REMOVED***
            last6Years.length ?
              <Fragment>
                  <Typography variant="h6" gutterBottom component="div" sx=***REMOVED******REMOVED*** padding: "1rem 1rem" ***REMOVED******REMOVED***>
                      More than 6 Years
                  </Typography>
                ***REMOVED*** last6Years.map(issue => (
                  <MyIssuesTabRow key=***REMOVED***issue.id***REMOVED*** issue=***REMOVED***issue***REMOVED*** />
                ))***REMOVED***
              </Fragment> : ""
      ***REMOVED***
        </TableBody>
      </Table>
    </TableContainer>
  )
***REMOVED***

export default MyIssuesTab;