import ***REMOVED***createTheme, PaletteMode, Theme, ThemeProvider, useMediaQuery, Palette, PaletteOptions***REMOVED*** from "@mui/material";
import React, ***REMOVED***Context, FunctionComponent, ReactNode***REMOVED*** from "react";
import ***REMOVED***amber, deepOrange, grey***REMOVED*** from "@mui/material/colors";

interface IColorContext ***REMOVED***
  toggleColorMode: () => void;
***REMOVED***

interface Props ***REMOVED***
  children: ReactNode;
***REMOVED***

interface CardColors ***REMOVED***
  cardHeaderBg: string;
  cardDetailsIssues: string;
  cardDetailsInfo: string
***REMOVED***

interface Card ***REMOVED***
  mode: string;
  lowest: CardColors;
  low: CardColors;
  medium: CardColors;
  high: CardColors;
  highest: CardColors;
***REMOVED***

interface ITableRowColors ***REMOVED***
  mode: PaletteMode;
  text: string;
  odd: string;
  even: string;
***REMOVED***

export interface CustomTheme  extends Theme ***REMOVED***
  card: Card;
  tableRowColors: ITableRowColors;
***REMOVED***

export const ColorModeContext = React.createContext<IColorContext>(***REMOVED***
  toggleColorMode: () => ***REMOVED******REMOVED***,
***REMOVED***);

const ColorModeProvider: FunctionComponent<Props> = (props) => ***REMOVED***
  const customTheme = (mode: PaletteMode) => (***REMOVED***
      tableRowColors: ***REMOVED***
        mode,
        ...(mode === "light" ? ***REMOVED***
          text: "#060b1c",
          odd: "rgba(227,232,255,0.78)",
          even: "rgba(237,241,255,0.69)"
    ***REMOVED*** : ***REMOVED***
          text: "#bfc8ea",
          odd: "rgba(183,183,255,0.1)",
          even: "rgba(108,117,147,0.5)"
    ***REMOVED***)
  ***REMOVED***,
      card: ***REMOVED***
        mode,
        ...(mode === "light"
        ? ***REMOVED***
          lowest: ***REMOVED***
            cardHeaderBg: "#445E93",
            cardDetailsIssues: "#3a75e5",
            cardDetailsInfo: "#0042b4"
      ***REMOVED***,
          low: ***REMOVED***
            cardHeaderBg: "rgb(102,143,128)",
            cardDetailsIssues: "rgb(0,131,89)",
            cardDetailsInfo: "rgb(14,112,73)"
      ***REMOVED***,
          medium: ***REMOVED***
            cardHeaderBg: "#717e0d",
            cardDetailsIssues: "#7d851d",
            cardDetailsInfo: "#5c6b05"
      ***REMOVED***,
          high: ***REMOVED***
            cardHeaderBg: "#cb5d2d",
            cardDetailsIssues: "#b05833",
            cardDetailsInfo: "#af4413"
      ***REMOVED***,
          highest: ***REMOVED***
            cardHeaderBg: "#A30B37",
            cardDetailsIssues: "#c54569",
            cardDetailsInfo: "#98052a"
      ***REMOVED***
    ***REMOVED*** : ***REMOVED***
          lowest: ***REMOVED***
            cardHeaderBg: "rgba(68,94,147,0.5)",
            cardDetailsIssues: "rgba(58,117,229,0.5)",
            cardDetailsInfo: "rgba(0,66,180,0.5)"
      ***REMOVED***,
          low: ***REMOVED***
            cardHeaderBg: "rgba(102,143,128,0.5)",
            cardDetailsIssues: "rgba(0,131,89,0.5)",
            cardDetailsInfo: "rgba(14,112,73,0.5)"
      ***REMOVED***,
          medium: ***REMOVED***
            cardHeaderBg: "rgba(113,126,13,0.5)",
            cardDetailsIssues: "rgba(125,133,29,0.5)",
            cardDetailsInfo: "rgba(92,107,5,0.5)"
      ***REMOVED***,
          high: ***REMOVED***
            cardHeaderBg: "rgba(203,93,45,0.5)",
            cardDetailsIssues: "rgba(176,88,51,0.5)",
            cardDetailsInfo: "rgba(175,68,19,0.5)"
      ***REMOVED***,
          highest: ***REMOVED***
            cardHeaderBg: "rgba(163,11,55,0.5)",
            cardDetailsIssues: "rgba(197,69,105,0.5)",
            cardDetailsInfo: "rgba(152,5,42,0.5)"
      ***REMOVED***
        ***REMOVED***
        )
  ***REMOVED***,
    palette: ***REMOVED***
      mode,
      ...(mode === 'light'
        ? ***REMOVED***
          // palette values for light mode
          primary: ***REMOVED***
            main: "#1976d2",
            light: "#42a5f5",
            dark: "#1565c0",
            contrastText: "#fff"
      ***REMOVED***,
          divider: grey[200],
          text: ***REMOVED***
            primary: grey[200],
            secondary: grey[700],
      ***REMOVED***,
    ***REMOVED***
        : ***REMOVED***
          // palette values for dark mode
          primary: ***REMOVED***
            main: "#135cab"
      ***REMOVED***,
          secondary: ***REMOVED***
            main: grey[200]
      ***REMOVED***,
          divider: grey[600],
          background: ***REMOVED***
            default: "rgba(19,19,28,0.74)",
            paper: "rgba(37,37,45,0.98)",
      ***REMOVED***,
          text: ***REMOVED***
            primary: '#fff',
            secondary: grey[300],
      ***REMOVED***,
    ***REMOVED***),
***REMOVED***,
***REMOVED***);

  const [mode, setMode] = React.useState<PaletteMode>('light');

  const colorMode = React.useMemo(
    () => (***REMOVED***
      // The dark mode switch would invoke this method
      toggleColorMode: () => ***REMOVED***
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
  ***REMOVED***,
***REMOVED***),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(customTheme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value=***REMOVED***colorMode***REMOVED***>
      <ThemeProvider theme=***REMOVED***theme***REMOVED***>
        ***REMOVED***props.children***REMOVED***
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
***REMOVED***

export default ColorModeProvider;