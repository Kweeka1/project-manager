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
  const ***REMOVED*** issues ***REMOVED*** = props

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
        <TableBody sx=***REMOVED******REMOVED***
          "& > tr": ***REMOVED***backgroundColor: "#eff0f4"***REMOVED***,
          "& > tr:nth-of-type(even)": ***REMOVED*** backgroundColor: "#f8f9fd" ***REMOVED***
    ***REMOVED******REMOVED***>
          ***REMOVED*** issues.map(issue => (
            <MyIssuesTabRow key=***REMOVED***issue.id***REMOVED*** issue=***REMOVED***issue***REMOVED*** />
          ))***REMOVED***
        </TableBody>
      </Table>
    </TableContainer>
  )
***REMOVED***

export default MyIssuesTab;