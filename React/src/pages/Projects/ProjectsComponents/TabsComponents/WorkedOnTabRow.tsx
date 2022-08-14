import React, {Fragment, FunctionComponent, useEffect, useState} from "react"
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import {Project} from "../../interface/IProjectTabs";
import Tabs from "../../../../SharedComponents/Tabs";
import {useTheme} from "@mui/material";
import {CustomTheme} from "../../../../Contexts/ThemeContext";

interface Props {
  project: Project;
}

const WorkedOnTabRow: FunctionComponent<Props> = (props) => {
  const { project } = props;
  const theme = useTheme<CustomTheme>();
  const boardNames = project.boards.map(board => board.name)
  const [projects, setProjects] = useState<Project>(project)
  const [isTabOpen, setTabOpen] = useState<boolean>(false)

  useEffect(() => {
    setProjects(projects)
  }, [project])

return (
  <React.Fragment>
    <TableRow sx={{cursor: "pointer"}}>
      <TableCell>
        <IconButton
          size="small"
          onClick={() => setTabOpen(!isTabOpen)}
        >
          {isTabOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
        </IconButton>
      </TableCell>
      <TableCell  component="th" scope="row">{project.name}</TableCell>
      <TableCell align="left">{project.createdOn.replace(/-/g, "/")}</TableCell>
      <TableCell align="left">{project.lastAction}</TableCell>
      <TableCell align="left">{project.by}</TableCell>
      <TableCell align="left">{project.lastActionDate.replace(/-/g, "/")}</TableCell>
      <TableCell align="left">{project.reporter}</TableCell>
    </TableRow>
    <TableRow>
      <TableCell sx={{ border: 0 }} style={{paddingBottom: 0, paddingTop: 0}} colSpan={7}>
        <Collapse in={isTabOpen} timeout="auto">
          <Box sx={{margin: 1}}>
              {
                  <Tabs tabNames={boardNames}>
                      {
                        project.boards.map(board => (
                          <Table size="medium">
                            <TableHead>
                              <TableRow >
                                <TableCell>Issues</TableCell>
                                <TableCell>Created On</TableCell>
                                <TableCell align="left">Action</TableCell>
                                <TableCell align="left">Action Time</TableCell>
                                <TableCell align="left">Reporter</TableCell>
                                <TableCell sx={{ border: 0 }} />
                                <TableCell sx={{ border: 0 }} />
                              </TableRow>
                            </TableHead>
                            <TableBody sx={{ "& > tr:last-child > *": { border: 0 }, "& > tr": { backgroundColor: `${theme.palette.mode === "dark" ? "#313138" : theme.palette.background.default}` } }}>
                            {
                              board.issues.map(issue => (
                                  <TableRow key={issue.id}>
                                    <TableCell component="th" scope="row">{issue.name}</TableCell>
                                    <TableCell>{issue.createdOn.replace(/-/g, "/")}</TableCell>
                                    <TableCell align="left">{issue.action}</TableCell>
                                    <TableCell align="left">{issue.actionDate.replace(/-/g, "/")}</TableCell>
                                    <TableCell align="left">{issue.reporter}</TableCell>
                                    <TableCell sx={{ border: 0 }} />
                                    <TableCell sx={{ border: 0 }} />
                                  </TableRow>
                              ))
                            }
                            </TableBody>
                            </Table>
                        ))}
                  </Tabs>
              }
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  </React.Fragment>
)
}

// @ts-ignore
export default WorkedOnTabRow;