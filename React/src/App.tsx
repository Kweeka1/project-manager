import { useState } from 'react'
import './App.css'
import {Button, Container, Stack, Card, CardHeader, Typography, Divider} from "@mui/material";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" style={{ width: "100%", }}>
        <Typography sx={{ fontSize: 18, color: "#2196f3", width: "auto", padding: "1rem" }}>
            Active Projects
        </Typography>
        {/*<Button variant={"outlined"} onClick={() => setCount((count) => count + 1)}>*/}
        {/*  count is {count}*/}
        {/*</Button>*/}
      <div style={{ justifyContent: "flex-start", padding: "1.7rem 1rem", display: "inline-flex", gap: "4rem", whiteSpace: "nowrap", overflowX: "auto", height: "17rem", alignItems: "center", backgroundColor: "#efefef" }}>
          <Card className={"card_1"} sx={{ width: "22rem", height: "12rem", padding: "1rem", cursor: "pointer"  }}>
            <Typography sx={{ fontSize: 16, color: "#2196f3" }}>
                Name of project
            </Typography>
              <p style={{ fontSize: 12}}>Active Items: <span style={{ fontSize: 12, backgroundColor: "#59be31", padding: "0.3rem", marginLeft: "0.5rem", borderRadius: "1.625rem" }}>14</span></p>
              <p style={{ paddingRight: "1rem", fontSize: 12}}>Last event: <span style={{ backgroundColor: "#eeeeee", borderRadius: "0.2rem", padding: "1px 0.3rem", display: "inline-block", fontSize: 12, marginLeft: "0.5rem"}}>17/05/2022  -  TTest Repl</span></p>

          </Card>
          <Card className={"card_1"} sx={{ width: "22rem", height: "12rem", padding: "1rem", cursor: "pointer"  }}>
              <Typography sx={{ fontSize: 16, color: "#2196f3" }}  gutterBottom>
                  Name of project
              </Typography>
          </Card>
          <Card className={"card_1"} sx={{ width: "22rem", height: "12rem", padding: "1rem", cursor: "pointer"  }}>
              <Typography sx={{ fontSize: 16, color: "#2196f3" }}  gutterBottom>
                  Name of project
              </Typography>
          </Card>
          <Card className={"card_1"} sx={{ width: "22rem", height: "12rem", padding: "1rem", cursor: "pointer"  }}>
              <Typography sx={{ fontSize: 16, color: "#2196f3" }}  gutterBottom>
                  Name of project
              </Typography>
          </Card>
          <Card className={"card_1"} sx={{ width: "22rem", height: "12rem", padding: "1rem", cursor: "pointer"  }}>
              <Typography sx={{ fontSize: 16, color: "#2196f3" }}  gutterBottom>
                  Name of project
              </Typography>
          </Card>
      </div>
    </div>
  )
}

export default App
