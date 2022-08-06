import React, ***REMOVED***FunctionComponent, ReactNode, SyntheticEvent, useEffect, useState***REMOVED*** from "react"
import ***REMOVED***Box, Tab***REMOVED*** from "@mui/material";
import ***REMOVED***TabContext, TabList, TabPanel***REMOVED*** from "@mui/lab";

interface Props ***REMOVED***
  children: ReactNode[];
  tabNames?: string[]
  sx?: object;
***REMOVED***

const Tabs: FunctionComponent<Props> = (***REMOVED***children, sx, tabNames***REMOVED***) => ***REMOVED***
  const [value, setValue] = useState('0');


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
            <TabPanel sx=***REMOVED******REMOVED*** padding: "1rem 0 0 0" ***REMOVED******REMOVED*** value=***REMOVED***`$***REMOVED***index***REMOVED***`***REMOVED***>
              ***REMOVED***children[index]***REMOVED***
            </TabPanel>
          ))
    ***REMOVED***
      </TabContext>
    </>
  )
***REMOVED***

export default Tabs;