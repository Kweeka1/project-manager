import React, {FunctionComponent, ReactNode, SyntheticEvent, useEffect, useState} from "react"
import {Box, Tab, useTheme} from "@mui/material";
import {TabContext, TabList, TabPanel} from "@mui/lab";
import {CustomTheme} from "../Contexts/ThemeContext";

interface Props {
  children: ReactNode[];
  tabNames?: string[]
  sx?: object;
}

const Tabs: FunctionComponent<Props> = ({children, sx, tabNames}) => {
  const [value, setValue] = useState('0');
  const theme = useTheme<CustomTheme>();


  const handleChange = (e: SyntheticEvent, newValue: string): void => setValue(newValue)

  return(
    <>
      <TabContext value={value}>
        <Box sx={sx && sx}>
          <TabList onChange={handleChange}>
            {
              tabNames &&
                tabNames.map((name, index) => (
                  <Tab label={name} value={index.toString()}/>
                ))
            }
          </TabList>
        </Box>
        {
          children.map((child, index) => (
            <TabPanel sx={{ padding: "0", backgroundColor: theme.palette.background.default }} value={`${index}`}>
              {children[index]}
            </TabPanel>
          ))
        }
      </TabContext>
    </>
  )
}

export default Tabs;