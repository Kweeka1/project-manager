import React, ***REMOVED***Fragment, FunctionComponent, useEffect, useState***REMOVED*** from "react"
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
import ***REMOVED***Project***REMOVED*** from "../../interface/IProjectTabs";
import Tabs from "../../../../SharedComponents/Tabs";
import ***REMOVED***useTheme***REMOVED*** from "@mui/material";
import ***REMOVED***CustomTheme***REMOVED*** from "../../../../Contexts/ThemeContext";

interface Props ***REMOVED***
  project: Project;
***REMOVED***

const WorkedOnTabRow: FunctionComponent<Props> = (props) => ***REMOVED***
  const ***REMOVED*** project ***REMOVED*** = props;
  const theme = useTheme<CustomTheme>();
  const boardNames = project.boards.map(board => board.name)
  const [projects, setProjects] = useState<Project>(project)
  const [isTabOpen, setTabOpen] = useState<boolean>(false)

  useEffect(() => ***REMOVED***
    setProjects(projects)
***REMOVED*** [project])

return (
  <React.Fragment>
    <TableRow sx=***REMOVED******REMOVED***cursor: "pointer"***REMOVED******REMOVED***>
      <TableCell>
        <IconButton
          size="small"
          onClick=***REMOVED***() => setTabOpen(!isTabOpen)***REMOVED***
        >
          ***REMOVED***isTabOpen ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>***REMOVED***
        </IconButton>
      </TableCell>
      <TableCell  component="th" scope="row">***REMOVED***project.name***REMOVED***</TableCell>
      <TableCell align="left">***REMOVED***project.createdOn.replace(/-/g, "/")***REMOVED***</TableCell>
      <TableCell align="left">***REMOVED***project.lastAction***REMOVED***</TableCell>
      <TableCell align="left">***REMOVED***project.by***REMOVED***</TableCell>
      <TableCell align="left">***REMOVED***project.lastActionDate.replace(/-/g, "/")***REMOVED***</TableCell>
      <TableCell align="left">***REMOVED***project.reporter***REMOVED***</TableCell>
    </TableRow>
    <TableRow>
      <TableCell sx=***REMOVED******REMOVED*** border: 0 ***REMOVED******REMOVED*** style=***REMOVED******REMOVED***paddingBottom: 0, paddingTop: 0***REMOVED******REMOVED*** colSpan=***REMOVED***7***REMOVED***>
        <Collapse in=***REMOVED***isTabOpen***REMOVED*** timeout="auto">
          <Box sx=***REMOVED******REMOVED***margin: 1***REMOVED******REMOVED***>
              ***REMOVED***
                  <Tabs tabNames=***REMOVED***boardNames***REMOVED***>
                      ***REMOVED***
                        project.boards.map(board => (
                          <Table size="medium">
                            <TableHead>
                              <TableRow >
                                <TableCell>Issues</TableCell>
                                <TableCell>Created On</TableCell>
                                <TableCell align="left">Action</TableCell>
                                <TableCell align="left">Action Time</TableCell>
                                <TableCell align="left">Reporter</TableCell>
                                <TableCell sx=***REMOVED******REMOVED*** border: 0 ***REMOVED******REMOVED*** />
                                <TableCell sx=***REMOVED******REMOVED*** border: 0 ***REMOVED******REMOVED*** />
                              </TableRow>
                            </TableHead>
                            <TableBody sx=***REMOVED******REMOVED*** "& > tr:last-child > *": ***REMOVED*** border: 0 ***REMOVED***, "& > tr": ***REMOVED*** backgroundColor: theme.palette.background.default ***REMOVED*** ***REMOVED******REMOVED***>
                            ***REMOVED***
                              board.issues.map(issue => (
                                  <TableRow key=***REMOVED***issue.id***REMOVED***>
                                    <TableCell component="th" scope="row">***REMOVED***issue.name***REMOVED***</TableCell>
                                    <TableCell>***REMOVED***issue.createdOn.replace(/-/g, "/")***REMOVED***</TableCell>
                                    <TableCell align="left">***REMOVED***issue.action***REMOVED***</TableCell>
                                    <TableCell align="left">***REMOVED***issue.actionDate.replace(/-/g, "/")***REMOVED***</TableCell>
                                    <TableCell align="left">***REMOVED***issue.reporter***REMOVED***</TableCell>
                                    <TableCell sx=***REMOVED******REMOVED*** border: 0 ***REMOVED******REMOVED*** />
                                    <TableCell sx=***REMOVED******REMOVED*** border: 0 ***REMOVED******REMOVED*** />
                                  </TableRow>
                              ))
                        ***REMOVED***
                            </TableBody>
                            </Table>
                        ))***REMOVED***
                  </Tabs>
          ***REMOVED***
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  </React.Fragment>
)
***REMOVED***

// @ts-ignore
export default WorkedOnTabRow;