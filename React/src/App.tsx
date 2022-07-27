import {useState, useRef, useEffect, SyntheticEvent} from 'react'
import {motion} from "framer-motion"
import './App.css'
import {
  Button,
  Container,
  Stack,
  Card,
  Tab,
  Typography,
  Tabs,
  Box,
  IconButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/menu"
import {TabContext, TabList, TabPanel} from "@mui/lab"

function App() {
  const [carouselWidth, setCarouselWidth] = useState(0)
  const [value, setValue] = useState('1');
  const carousel = useRef<HTMLDivElement>(null);

  const handleChange = (e: SyntheticEvent, newValue: string) => setValue(newValue)

  useEffect(() => {
    if (carousel.current !== null) {
      setCarouselWidth(window.innerWidth - carousel.current.scrollWidth)
      console.log(carouselWidth)
    }
  }, [])

  return (
    <div className="App" style={{width: "100%",}}>
      <Typography sx={{fontSize: 18, color: "#2196f3", width: "auto", padding: "1rem"}}>
        Your Work
      </Typography>
      <div style={{position: "relative", backgroundColor: "#F2F4F5"}}>
        <motion.div
          className='cards__container'
          ref={carousel}
          drag={carouselWidth > 0 ? false : "x"} dragConstraints={{
          left: carouselWidth,
          right: 0,
        }}>
          <Card className="card card_1">
            <div className="card__header">
              <div className="card__menu">
                <div className='menu__items'>
                  <Typography variant="h6" color="#F2F4F5" component="div">
                    ME5
                  </Typography>
                  <span style={{fontSize: 13, color: "#F2F4F5"}}>
                    <span style={{padding: "0rem 1rem"}}> - </span>
                      Active Items:
                    <span className='active__issues'>14</span>
                  </span>
                </div>
                <IconButton color="inherit" aria-label="menu" sx={{ml: 2}}>
                  <MenuIcon sx={{ color: "#F2F4F5" }} />
                </IconButton>
              </div>
            </div>
            <div style={{ padding: "0.5rem" }} className="card__details">
              <div className='project__name'>
                <span className='name'>Name:</span> 
                <span className='name'>Wireframe project</span>
              </div>
              <p style={{fontSize: 12, color: "#040615"}}>Last event: <span className='event__value'>17/05/2022  -  TTest Repl</span></p>
            </div>
          </Card>
          <Card className="card card_1">
            <div className="card__header">
              <div className="card__menu">
                <div className='menu__items'>
                  <Typography variant="h6" color="#F2F4F5" component="div">
                    ME5
                  </Typography>
                  <span style={{fontSize: 13, color: "#F2F4F5"}}>
                    <span style={{padding: "0rem 1rem"}}> - </span>
                      Active Items:
                    <span className='active__issues'>14</span>
                  </span>
                </div>
                <IconButton color="inherit" aria-label="menu" sx={{ml: 2}}>
                  <MenuIcon sx={{ color: "#F2F4F5" }} />
                </IconButton>
              </div>
            </div>
            <div style={{ padding: "0.5rem" }} className="card__details">
              <div className='project__name'>
                <span className='name'>Name:</span> Wireframe project
              </div>
              <p style={{fontSize: 12, color: "#040615"}}>Last event: <span className='event__value'>17/05/2022  -  TTest Repl</span></p>
            </div>
          </Card>
          <Card className="card card_1">
            <div className="card__header">
              <div className="card__menu">
                <div className='menu__items'>
                  <Typography variant="h6" color="#F2F4F5" component="div">
                    ME5
                  </Typography>
                  <span style={{fontSize: 13, color: "#F2F4F5"}}>
                    <span style={{padding: "0rem 1rem"}}> - </span>
                      Active Items:
                    <span className='active__issues'>14</span>
                  </span>
                </div>
                <IconButton color="inherit" aria-label="menu" sx={{ml: 2}}>
                  <MenuIcon sx={{ color: "#F2F4F5" }} />
                </IconButton>
              </div>
            </div>
            <div style={{ padding: "0.5rem" }} className="card__details">
              <div className='project__name'>
                <span className='name'>Name:</span> Wireframe project
              </div>
              <p style={{fontSize: 12, color: "#040615"}}>Last event: <span className='event__value'>17/05/2022  -  TTest Repl</span></p>
            </div>
          </Card>
          <Card className="card card_1">
            <div className="card__header">
              <div className="card__menu">
                <div className='menu__items'>
                  <Typography variant="h6" color="#F2F4F5" component="div">
                    ME5
                  </Typography>
                  <span style={{fontSize: 13, color: "#F2F4F5"}}>
                    <span style={{padding: "0rem 1rem"}}> - </span>
                      Active Items:
                    <span className='active__issues'>14</span>
                  </span>
                </div>
                <IconButton color="inherit" aria-label="menu" sx={{ml: 2}}>
                  <MenuIcon sx={{ color: "#F2F4F5" }} />
                </IconButton>
              </div>
            </div>
            <div style={{ padding: "0.5rem" }} className="card__details">
              <div className='project__name'>
                <span className='name'>Name:</span> Wireframe project
              </div>
              <p style={{fontSize: 12, color: "#040615"}}>Last event: <span className='event__value'>17/05/2022  -  TTest Repl</span></p>
            </div>
          </Card>
          <Card className="card card_1">
            <div className="card__header">
              <div className="card__menu">
                <div className='menu__items'>
                  <Typography variant="h6" color="#F2F4F5" component="div">
                    ME5
                  </Typography>
                  <span style={{fontSize: 13, color: "#F2F4F5"}}>
                    <span style={{padding: "0rem 1rem"}}> - </span>
                      Active Items:
                    <span className='active__issues'>14</span>
                  </span>
                </div>
                <IconButton color="inherit" aria-label="menu" sx={{ml: 2}}>
                  <MenuIcon sx={{ color: "#F2F4F5" }} />
                </IconButton>
              </div>
            </div>
            <div style={{ padding: "0.5rem" }} className="card__details">
              <div className='project__name'>
                <span className='name'>Name:</span> Wireframe project
              </div>
              <p style={{fontSize: 12, color: "#040615"}}>Last event: <span className='event__value'>17/05/2022  -  TTest Repl</span></p>
            </div>
          </Card>
        </motion.div>
      </div>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', margin: "2rem 0 0 0" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
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
}

export default App
