import ***REMOVED***alpha, styled***REMOVED*** from "@mui/material/styles";
import ***REMOVED***InputBase, tableCellClasses***REMOVED*** from "@mui/material";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

export const Search = styled('div')((***REMOVED*** theme ***REMOVED***) => (***REMOVED***
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': ***REMOVED***
    backgroundColor: alpha(theme.palette.common.white, 0.25),
***REMOVED***
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: ***REMOVED***
    marginLeft: theme.spacing(3),
    width: 'auto',
***REMOVED***
***REMOVED***));

export const StyledTableCell = styled(TableCell)((***REMOVED*** theme ***REMOVED***) => (***REMOVED***
  [`&.$***REMOVED***tableCellClasses.head***REMOVED***`]: ***REMOVED***
    backgroundColor: theme.palette.common.black,
    color: theme.palette.primary,
    border: 0,

***REMOVED***
  [`&.$***REMOVED***tableCellClasses.body***REMOVED***`]: ***REMOVED***
    fontSize: 14,
    fontFamily: "Open sans",
    color: "#464646",
    border: 0,
***REMOVED***
***REMOVED***));

export const StyledTableRow = styled(TableRow)((***REMOVED*** theme ***REMOVED***) => (***REMOVED***
  '&:nth-of-type(odd)': ***REMOVED***
    backgroundColor: "#fcfcfc",
***REMOVED***
  "&:hover": ***REMOVED***
    backgroundColor: "#cb4d4d",
***REMOVED***
  // hide last border
***REMOVED***));

export const SearchIconWrapper = styled('div')((***REMOVED*** theme ***REMOVED***) => (***REMOVED***
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
***REMOVED***));

export const StyledInputBase = styled(InputBase)((***REMOVED*** theme ***REMOVED***) => (***REMOVED***
  color: 'inherit',
  '& .MuiInputBase-input': ***REMOVED***
    outline: "1px rgba(25, 118, 210, 0.5) solid",
    borderRadius: "0.25rem",
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + $***REMOVED***theme.spacing(4)***REMOVED***)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: ***REMOVED***
      width: '20ch',
***REMOVED***,
***REMOVED***
***REMOVED***));