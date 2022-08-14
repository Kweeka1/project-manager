import React, {Fragment, FunctionComponent, useEffect, useState} from "react"
import {Issue} from "../../interface/IProjectTabs";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import MyIssuesTabRow from "./MyIssuesTabRow";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material";
import {CustomTheme} from "../../../../Contexts/ThemeContext";

interface Props {
  issues: Issue[]
}

const MyIssuesTab: FunctionComponent<Props> = (props) => {
  const { issues } = props
  const theme = useTheme<CustomTheme>();

  return (
    <TableContainer sx={{ borderRadius: 0 }} component={Paper}>
      <Table>
        <TableHead>
          <TableRow sx={{ backgroundColor: `${theme.palette.mode === "dark" ? theme.palette.background.paper : theme.palette.primary.main}`, color: theme.tableRowColors.text }}>
            <TableCell sx={{ color: "#eaeaea" }}>Issues</TableCell>
            <TableCell sx={{ color: "#eaeaea" }} align="left">Created On</TableCell>
            <TableCell sx={{ color: "#eaeaea" }} align="left">Last Action</TableCell>
            <TableCell sx={{ color: "#eaeaea" }} align="left">Action Date</TableCell>
            <TableCell sx={{ color: "#eaeaea" }} align="left">Reporter</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody sx={{
          "& > tr": {backgroundColor: theme.tableRowColors.odd},
          "& > tr:nth-of-type(even)": {backgroundColor: theme.tableRowColors.even},
          "& > tr > *": { border: 0, color: theme.tableRowColors.text },
        }}>
          { issues.map(issue => (
            <MyIssuesTabRow key={issue.id} issue={issue} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MyIssuesTab;