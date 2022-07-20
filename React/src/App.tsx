import ***REMOVED*** useState ***REMOVED*** from 'react'
import './App.css'
import ***REMOVED***Button, Container, Stack, Card, CardHeader, Typography, Divider***REMOVED*** from "@mui/material";

function App() ***REMOVED***
  const [count, setCount] = useState(0)

  return (
    <div className="App" style=***REMOVED******REMOVED*** width: "100%", ***REMOVED******REMOVED***>
        <Typography sx=***REMOVED******REMOVED*** fontSize: 18, color: "#2196f3", width: "auto", padding: "1rem" ***REMOVED******REMOVED***>
            Active Projects
        </Typography>
        ***REMOVED***/*<Button variant=***REMOVED***"outlined"***REMOVED*** onClick=***REMOVED***() => setCount((count) => count + 1)***REMOVED***>*/***REMOVED***
        ***REMOVED***/*  count is ***REMOVED***count***REMOVED****/***REMOVED***
        ***REMOVED***/*</Button>*/***REMOVED***
      <div style=***REMOVED******REMOVED*** justifyContent: "flex-start", padding: "1.7rem 1rem", display: "inline-flex", gap: "4rem", whiteSpace: "nowrap", overflowX: "auto", height: "17rem", alignItems: "center", backgroundColor: "#efefef" ***REMOVED******REMOVED***>
          <Card className=***REMOVED***"card_1"***REMOVED*** sx=***REMOVED******REMOVED*** width: "22rem", height: "12rem", padding: "1rem", cursor: "pointer"***REMOVED******REMOVED***>
            <Typography sx=***REMOVED******REMOVED*** fontSize: 16, color: "#2196f3" ***REMOVED******REMOVED***>
                Name of project
            </Typography>
              <p style=***REMOVED******REMOVED*** fontSize: 12***REMOVED******REMOVED***>Active Items: <span style=***REMOVED******REMOVED*** fontSize: 12, backgroundColor: "#59be31", padding: "0.3rem", marginLeft: "0.5rem", borderRadius: "1.625rem" ***REMOVED******REMOVED***>14</span></p>
              <p style=***REMOVED******REMOVED*** paddingRight: "1rem", fontSize: 12***REMOVED******REMOVED***>Last event: <span style=***REMOVED******REMOVED*** backgroundColor: "#eeeeee", borderRadius: "0.2rem", padding: "1px 0.3rem", display: "inline-block", fontSize: 12, marginLeft: "0.5rem"***REMOVED******REMOVED***>17/05/2022  -  TTest Repl</span></p>

          </Card>
          <Card className=***REMOVED***"card_1"***REMOVED*** sx=***REMOVED******REMOVED*** width: "22rem", height: "12rem", padding: "1rem", cursor: "pointer"***REMOVED******REMOVED***>
              <Typography sx=***REMOVED******REMOVED*** fontSize: 16, color: "#2196f3" ***REMOVED******REMOVED***  gutterBottom>
                  Name of project
              </Typography>
          </Card>
          <Card className=***REMOVED***"card_1"***REMOVED*** sx=***REMOVED******REMOVED*** width: "22rem", height: "12rem", padding: "1rem", cursor: "pointer"***REMOVED******REMOVED***>
              <Typography sx=***REMOVED******REMOVED*** fontSize: 16, color: "#2196f3" ***REMOVED******REMOVED***  gutterBottom>
                  Name of project
              </Typography>
          </Card>
          <Card className=***REMOVED***"card_1"***REMOVED*** sx=***REMOVED******REMOVED*** width: "22rem", height: "12rem", padding: "1rem", cursor: "pointer"***REMOVED******REMOVED***>
              <Typography sx=***REMOVED******REMOVED*** fontSize: 16, color: "#2196f3" ***REMOVED******REMOVED***  gutterBottom>
                  Name of project
              </Typography>
          </Card>
          <Card className=***REMOVED***"card_1"***REMOVED*** sx=***REMOVED******REMOVED*** width: "22rem", height: "12rem", padding: "1rem", cursor: "pointer"***REMOVED******REMOVED***>
              <Typography sx=***REMOVED******REMOVED*** fontSize: 16, color: "#2196f3" ***REMOVED******REMOVED***  gutterBottom>
                  Name of project
              </Typography>
          </Card>
      </div>
    </div>
  )
***REMOVED***

export default App
