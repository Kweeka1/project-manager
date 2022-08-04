import React, ***REMOVED***FunctionComponent, ReactNode, SyntheticEvent, useState***REMOVED*** from "react"
import ***REMOVED***Box, Tab***REMOVED*** from "@mui/material";
import ***REMOVED***TabContext, TabList, TabPanel***REMOVED*** from "@mui/lab";

interface Props ***REMOVED***
  children: ReactNode[];
***REMOVED***

const Tabs: FunctionComponent<Props> = (***REMOVED***children***REMOVED***) => ***REMOVED***
  const [value, setValue] = useState('1');

  const handleChange = (e: SyntheticEvent, newValue: string): void => setValue(newValue)

  return(
    <>
      <TabContext value=***REMOVED***value***REMOVED***>
        <Box sx=***REMOVED******REMOVED***borderBottom: 1, borderColor: 'divider', margin: "1rem 0 0 0"***REMOVED******REMOVED***>
          <TabList onChange=***REMOVED***handleChange***REMOVED*** aria-label="lab API tabs example">
            <Tab label="Worked On" value="1"/>
            <Tab label="Assigned to me" value="2"/>
          </TabList>
        </Box>
        <TabPanel sx=***REMOVED******REMOVED*** padding: "1rem 0 0 0" ***REMOVED******REMOVED*** value="1">
          ***REMOVED***children[0]***REMOVED***
        </TabPanel>
        <TabPanel sx=***REMOVED******REMOVED*** padding: "1rem 0 0 0" ***REMOVED******REMOVED*** value="2">
          ***REMOVED***children[1]***REMOVED***
        </TabPanel>
      </TabContext>
    </>
  )
***REMOVED***

export default Tabs;