import {createTheme, PaletteMode, Theme, ThemeProvider, useMediaQuery, Palette, PaletteOptions} from "@mui/material";
import React, {Context, FunctionComponent, ReactNode} from "react";
import {amber, deepOrange, grey} from "@mui/material/colors";

interface IColorContext {
  toggleColorMode: () => void;
}

interface Props {
  children: ReactNode;
}

interface CardColors {
  cardHeaderBg: string;
  cardDetailsIssues: string;
  cardDetailsInfo: string
}

interface Card {
  mode: string;
  lowest: CardColors;
  low: CardColors;
  medium: CardColors;
  high: CardColors;
  highest: CardColors;
}

interface ITableRowColors {
  mode: PaletteMode;
  text: string;
  odd: string;
  even: string;
}

export interface CustomTheme  extends Theme {
  card: Card;
  tableRowColors: ITableRowColors;
}

export const ColorModeContext = React.createContext<IColorContext>({
  toggleColorMode: () => {},
});

const ColorModeProvider: FunctionComponent<Props> = (props) => {
  const customTheme = (mode: PaletteMode) => ({
      tableRowColors: {
        mode,
        ...(mode === "light" ? {
          text: "#060b1c",
          odd: "rgba(227,232,255,0.78)",
          even: "rgba(237,241,255,0.69)"
        } : {
          text: "#bfc8ea",
          odd: "rgba(183,183,255,0.1)",
          even: "rgba(108,117,147,0.5)"
        })
      },
      card: {
        mode,
        ...(mode === "light"
        ? {
          lowest: {
            cardHeaderBg: "#445E93",
            cardDetailsIssues: "#3a75e5",
            cardDetailsInfo: "#0042b4"
          },
          low: {
            cardHeaderBg: "rgb(102,143,128)",
            cardDetailsIssues: "rgb(0,131,89)",
            cardDetailsInfo: "rgb(14,112,73)"
          },
          medium: {
            cardHeaderBg: "#717e0d",
            cardDetailsIssues: "#7d851d",
            cardDetailsInfo: "#5c6b05"
          },
          high: {
            cardHeaderBg: "#cb5d2d",
            cardDetailsIssues: "#b05833",
            cardDetailsInfo: "#af4413"
          },
          highest: {
            cardHeaderBg: "#A30B37",
            cardDetailsIssues: "#c54569",
            cardDetailsInfo: "#98052a"
          }
        } : {
          lowest: {
            cardHeaderBg: "rgba(68,94,147,0.5)",
            cardDetailsIssues: "rgba(58,117,229,0.5)",
            cardDetailsInfo: "rgba(0,66,180,0.5)"
          },
          low: {
            cardHeaderBg: "rgba(102,143,128,0.5)",
            cardDetailsIssues: "rgba(0,131,89,0.5)",
            cardDetailsInfo: "rgba(14,112,73,0.5)"
          },
          medium: {
            cardHeaderBg: "rgba(113,126,13,0.5)",
            cardDetailsIssues: "rgba(125,133,29,0.5)",
            cardDetailsInfo: "rgba(92,107,5,0.5)"
          },
          high: {
            cardHeaderBg: "rgba(203,93,45,0.5)",
            cardDetailsIssues: "rgba(176,88,51,0.5)",
            cardDetailsInfo: "rgba(175,68,19,0.5)"
          },
          highest: {
            cardHeaderBg: "rgba(163,11,55,0.5)",
            cardDetailsIssues: "rgba(197,69,105,0.5)",
            cardDetailsInfo: "rgba(152,5,42,0.5)"
          }
            }
        )
      },
    palette: {
      mode,
      ...(mode === 'light'
        ? {
          // palette values for light mode
          primary: {
            main: "#1976d2",
            light: "#42a5f5",
            dark: "#1565c0",
            contrastText: "#fff"
          },
          divider: grey[200],
          text: {
            primary: grey[200],
            secondary: grey[700],
          },
        }
        : {
          // palette values for dark mode
          primary: {
            main: "#135cab"
          },
          secondary: {
            main: grey[200]
          },
          divider: grey[600],
          background: {
            default: "rgba(19,19,28,0.74)",
            paper: "rgba(37,37,45,0.98)",
          },
          text: {
            primary: '#fff',
            secondary: grey[300],
          },
        }),
    },
  });

  const [mode, setMode] = React.useState<PaletteMode>('light');

  const colorMode = React.useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === 'light' ? 'dark' : 'light',
        );
      },
    }),
    [],
  );

  // Update the theme only if the mode changes
  const theme = React.useMemo(() => createTheme(customTheme(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {props.children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default ColorModeProvider;