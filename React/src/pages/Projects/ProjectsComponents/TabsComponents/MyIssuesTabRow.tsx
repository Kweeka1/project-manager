import React, ***REMOVED***FunctionComponent, useEffect, useState***REMOVED*** from "react"
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import ***REMOVED***Issue***REMOVED*** from "../../interface/IProjectTabs";

interface Props ***REMOVED***
  issue: Issue;
***REMOVED***

const MyIssuesTabRow: FunctionComponent<Props> = (props) => ***REMOVED***
  const ***REMOVED*** issue ***REMOVED*** = props;
  const [issues, setIssue] = useState<Issue>(issue)

  useEffect(() => ***REMOVED***
    setIssue(issues)
***REMOVED*** [issue])

  return (
    <React.Fragment>
      <TableRow sx=***REMOVED******REMOVED***'& > *': ***REMOVED***borderBottom: 'unset'***REMOVED***, cursor: "pointer", border: 0, "& > td": ***REMOVED***padding: "20px"***REMOVED******REMOVED******REMOVED***>
        <TableCell scope="row">***REMOVED***issue.name***REMOVED***</TableCell>
        <TableCell align="left">***REMOVED***issue.createdOn***REMOVED***</TableCell>
        <TableCell align="left">***REMOVED***issue.action***REMOVED***</TableCell>
        <TableCell align="left">***REMOVED***issue.actionDate***REMOVED***</TableCell>
        <TableCell colSpan=***REMOVED***2***REMOVED*** align="left">***REMOVED***issue.reporter***REMOVED***</TableCell>
      </TableRow>
    </React.Fragment>
  )
***REMOVED***

export default MyIssuesTabRow;