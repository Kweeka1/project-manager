import React, ***REMOVED***FunctionComponent, ReactNode, SyntheticEvent, useEffect, useState***REMOVED*** from "react"
import ***REMOVED***Box, Tab, useTheme***REMOVED*** from "@mui/material";
import ***REMOVED***TabContext, TabList, TabPanel***REMOVED*** from "@mui/lab";
import ***REMOVED***CustomTheme***REMOVED*** from "../Contexts/ThemeContext";

interface Props ***REMOVED***
  children: ReactNode[];
  tabNames?: string[]
  sx?: object;
***REMOVED***

const Tabs: FunctionComponent<Props> = (***REMOVED***children, sx, tabNames***REMOVED***) => ***REMOVED***
  const [value, setValue] = useState('0');
  const theme = useTheme<CustomTheme>();


  const handleChange = (e: SyntheticEvent, newValue: string): void => setValue(newValue)

  return(
    <>
      <TabContext value=***REMOVED***value***REMOVED***>
        <Box sx=***REMOVED***sx && sx***REMOVED***>
          <TabList onChange=***REMOVED***handleChange***REMOVED***>
            ***REMOVED***
              tabNames &&
                tabNames.map((name, index) => (
                  <Tab label=***REMOVED***name***REMOVED*** value=***REMOVED***index.toString()***REMOVED***/>
                ))
        ***REMOVED***
          </TabList>
        </Box>
        ***REMOVED***
          children.map((child, index) => (
            <TabPanel sx=***REMOVED******REMOVED*** padding: "0", backgroundColor: theme.palette.background.default ***REMOVED******REMOVED*** value=***REMOVED***`$***REMOVED***index***REMOVED***`***REMOVED***>
              ***REMOVED***children[index]***REMOVED***
            </TabPanel>
          ))
    ***REMOVED***
      </TabContext>
    </>
  )
***REMOVED***

export default Tabs;