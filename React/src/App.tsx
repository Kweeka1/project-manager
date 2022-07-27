import ***REMOVED***useState, useRef, useEffect, SyntheticEvent***REMOVED*** from 'react'
import ***REMOVED***motion***REMOVED*** from "framer-motion"
import './App.css'
import ***REMOVED***
  Button,
  Container,
  Stack,
  Card,
  Tab,
  Typography,
  Tabs,
  Box,
  IconButton
***REMOVED*** from "@mui/material";
import MenuIcon from "@mui/icons-material/menu"
import ***REMOVED***TabContext, TabList, TabPanel***REMOVED*** from "@mui/lab"

function App() ***REMOVED***
  const [carouselWidth, setCarouselWidth] = useState(0)
  const [value, setValue] = useState('1');
  const carousel = useRef<HTMLDivElement>(null);

  const handleChange = (e: SyntheticEvent, newValue: string) => setValue(newValue)

  useEffect(() => ***REMOVED***
    if (carousel.current !== null) ***REMOVED***
      setCarouselWidth(window.innerWidth - carousel.current.scrollWidth)
      console.log(carouselWidth)
***REMOVED***
***REMOVED*** [])

  return (
    <div className="App" style=***REMOVED******REMOVED***width: "100%",***REMOVED******REMOVED***>
      <Typography sx=***REMOVED******REMOVED***fontSize: 18, color: "#2196f3", width: "auto", padding: "1rem"***REMOVED******REMOVED***>
        Your Work
      </Typography>
      <div style=***REMOVED******REMOVED***position: "relative", backgroundColor: "#F2F4F5"***REMOVED******REMOVED***>
        <motion.div
          className='cards__container'
          ref=***REMOVED***carousel***REMOVED***
          drag=***REMOVED***carouselWidth > 0 ? false : "x"***REMOVED*** dragConstraints=***REMOVED******REMOVED***
          left: carouselWidth,
          right: 0,
    ***REMOVED******REMOVED***>
          <Card className="card card_1">
            <div className="card__header">
              <div className="card__menu">
                <div className='menu__items'>
                  <Typography variant="h6" color="#F2F4F5" component="div">
                    ME5
                  </Typography>
                  <span style=***REMOVED******REMOVED***fontSize: 13, color: "#F2F4F5"***REMOVED******REMOVED***>
                    <span style=***REMOVED******REMOVED***padding: "0rem 1rem"***REMOVED******REMOVED***> - </span>
                      Active Items:
                    <span className='active__issues'>14</span>
                  </span>
                </div>
                <IconButton color="inherit" aria-label="menu" sx=***REMOVED******REMOVED***ml: 2***REMOVED******REMOVED***>
                  <MenuIcon sx=***REMOVED******REMOVED*** color: "#F2F4F5" ***REMOVED******REMOVED*** />
                </IconButton>
              </div>
            </div>
            <div style=***REMOVED******REMOVED*** padding: "0.5rem" ***REMOVED******REMOVED*** className="card__details">
              <div className='project__name'>
                <span className='name'>Name:</span> 
                <span className='name'>Wireframe project</span>
              </div>
              <p style=***REMOVED******REMOVED***fontSize: 12, color: "#040615"***REMOVED******REMOVED***>Last event: <span className='event__value'>17/05/2022  -  TTest Repl</span></p>
            </div>
          </Card>
          <Card className="card card_1">
            <div className="card__header">
              <div className="card__menu">
                <div className='menu__items'>
                  <Typography variant="h6" color="#F2F4F5" component="div">
                    ME5
                  </Typography>
                  <span style=***REMOVED******REMOVED***fontSize: 13, color: "#F2F4F5"***REMOVED******REMOVED***>
                    <span style=***REMOVED******REMOVED***padding: "0rem 1rem"***REMOVED******REMOVED***> - </span>
                      Active Items:
                    <span className='active__issues'>14</span>
                  </span>
                </div>
                <IconButton color="inherit" aria-label="menu" sx=***REMOVED******REMOVED***ml: 2***REMOVED******REMOVED***>
                  <MenuIcon sx=***REMOVED******REMOVED*** color: "#F2F4F5" ***REMOVED******REMOVED*** />
                </IconButton>
              </div>
            </div>
            <div style=***REMOVED******REMOVED*** padding: "0.5rem" ***REMOVED******REMOVED*** className="card__details">
              <div className='project__name'>
                <span className='name'>Name:</span> Wireframe project
              </div>
              <p style=***REMOVED******REMOVED***fontSize: 12, color: "#040615"***REMOVED******REMOVED***>Last event: <span className='event__value'>17/05/2022  -  TTest Repl</span></p>
            </div>
          </Card>
          <Card className="card card_1">
            <div className="card__header">
              <div className="card__menu">
                <div className='menu__items'>
                  <Typography variant="h6" color="#F2F4F5" component="div">
                    ME5
                  </Typography>
                  <span style=***REMOVED******REMOVED***fontSize: 13, color: "#F2F4F5"***REMOVED******REMOVED***>
                    <span style=***REMOVED******REMOVED***padding: "0rem 1rem"***REMOVED******REMOVED***> - </span>
                      Active Items:
                    <span className='active__issues'>14</span>
                  </span>
                </div>
                <IconButton color="inherit" aria-label="menu" sx=***REMOVED******REMOVED***ml: 2***REMOVED******REMOVED***>
                  <MenuIcon sx=***REMOVED******REMOVED*** color: "#F2F4F5" ***REMOVED******REMOVED*** />
                </IconButton>
              </div>
            </div>
            <div style=***REMOVED******REMOVED*** padding: "0.5rem" ***REMOVED******REMOVED*** className="card__details">
              <div className='project__name'>
                <span className='name'>Name:</span> Wireframe project
              </div>
              <p style=***REMOVED******REMOVED***fontSize: 12, color: "#040615"***REMOVED******REMOVED***>Last event: <span className='event__value'>17/05/2022  -  TTest Repl</span></p>
            </div>
          </Card>
          <Card className="card card_1">
            <div className="card__header">
              <div className="card__menu">
                <div className='menu__items'>
                  <Typography variant="h6" color="#F2F4F5" component="div">
                    ME5
                  </Typography>
                  <span style=***REMOVED******REMOVED***fontSize: 13, color: "#F2F4F5"***REMOVED******REMOVED***>
                    <span style=***REMOVED******REMOVED***padding: "0rem 1rem"***REMOVED******REMOVED***> - </span>
                      Active Items:
                    <span className='active__issues'>14</span>
                  </span>
                </div>
                <IconButton color="inherit" aria-label="menu" sx=***REMOVED******REMOVED***ml: 2***REMOVED******REMOVED***>
                  <MenuIcon sx=***REMOVED******REMOVED*** color: "#F2F4F5" ***REMOVED******REMOVED*** />
                </IconButton>
              </div>
            </div>
            <div style=***REMOVED******REMOVED*** padding: "0.5rem" ***REMOVED******REMOVED*** className="card__details">
              <div className='project__name'>
                <span className='name'>Name:</span> Wireframe project
              </div>
              <p style=***REMOVED******REMOVED***fontSize: 12, color: "#040615"***REMOVED******REMOVED***>Last event: <span className='event__value'>17/05/2022  -  TTest Repl</span></p>
            </div>
          </Card>
          <Card className="card card_1">
            <div className="card__header">
              <div className="card__menu">
                <div className='menu__items'>
                  <Typography variant="h6" color="#F2F4F5" component="div">
                    ME5
                  </Typography>
                  <span style=***REMOVED******REMOVED***fontSize: 13, color: "#F2F4F5"***REMOVED******REMOVED***>
                    <span style=***REMOVED******REMOVED***padding: "0rem 1rem"***REMOVED******REMOVED***> - </span>
                      Active Items:
                    <span className='active__issues'>14</span>
                  </span>
                </div>
                <IconButton color="inherit" aria-label="menu" sx=***REMOVED******REMOVED***ml: 2***REMOVED******REMOVED***>
                  <MenuIcon sx=***REMOVED******REMOVED*** color: "#F2F4F5" ***REMOVED******REMOVED*** />
                </IconButton>
              </div>
            </div>
            <div style=***REMOVED******REMOVED*** padding: "0.5rem" ***REMOVED******REMOVED*** className="card__details">
              <div className='project__name'>
                <span className='name'>Name:</span> Wireframe project
              </div>
              <p style=***REMOVED******REMOVED***fontSize: 12, color: "#040615"***REMOVED******REMOVED***>Last event: <span className='event__value'>17/05/2022  -  TTest Repl</span></p>
            </div>
          </Card>
        </motion.div>
      </div>
      <TabContext value=***REMOVED***value***REMOVED***>
        <Box sx=***REMOVED******REMOVED*** borderBottom: 1, borderColor: 'divider', margin: "2rem 0 0 0" ***REMOVED******REMOVED***>
          <TabList onChange=***REMOVED***handleChange***REMOVED*** aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </div>
  )
***REMOVED***

export default App
