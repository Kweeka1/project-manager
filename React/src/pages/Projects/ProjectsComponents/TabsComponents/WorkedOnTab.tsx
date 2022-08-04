import React, ***REMOVED***FunctionComponent, useEffect, useLayoutEffect, useState***REMOVED*** from "react"
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
import ***REMOVED***Project***REMOVED*** from "../../interface/IProjectTabs";
import ***REMOVED*** StyledTableRow, StyledTableCell ***REMOVED*** from "../../../../SharedComponents/StyledComponents";
import WorkedOnTabRow from "./WorkedOnTabRow";

interface Props ***REMOVED***
  projects: Project[]
***REMOVED***

const WorkedOnTab: FunctionComponent<Props> = (props) => ***REMOVED***

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
        <TableBody>
          ***REMOVED*** props.projects.map(project => (
              <WorkedOnTabRow key=***REMOVED***project.id***REMOVED*** project=***REMOVED***project***REMOVED*** />
            ))***REMOVED***
        </TableBody>
      </Table>
    </TableContainer>
  );
***REMOVED***

export default WorkedOnTab;