import React, {FunctionComponent, useEffect, useState} from "react"
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Issue} from "../../interface/IProjectTabs";

interface Props {
  issue: Issue;
}

const MyIssuesTabRow: FunctionComponent<Props> = (props) => {
  const { issue } = props;
  const [issues, setIssue] = useState<Issue>(issue)

  useEffect(() => {
    setIssue(issues)
  }, [issue])

  return (
    <React.Fragment>
      <TableRow sx={{'& > *': {borderBottom: 'unset'}, cursor: "pointer", border: 0, "& > td": {padding: "20px"}}}>
        <TableCell scope="row">{issue.name}</TableCell>
        <TableCell align="left">{issue.createdOn}</TableCell>
        <TableCell align="left">{issue.action}</TableCell>
        <TableCell align="left">{issue.actionDate}</TableCell>
        <TableCell colSpan={2} align="left">{issue.reporter}</TableCell>
      </TableRow>
    </React.Fragment>
  )
}

export default MyIssuesTabRow;