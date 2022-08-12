import React from 'react'
import './App.css'
import Header from "./SharedComponents/Header/Header";
import Projects from "./pages/Projects/Projects";
import ***REMOVED***BrowserRouter, Route, Routes***REMOVED*** from "react-router-dom";
import Board from "./pages/Board/Board";
import Project from "./pages/Project/Project";
import ***REMOVED***useMediaQuery, useTheme***REMOVED*** from "@mui/material";
import ColorModeProvider from "./Contexts/ThemeContext";

function App () ***REMOVED***
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useTheme();

  return (
    <ColorModeProvider>
      <div className="App" style=***REMOVED******REMOVED*** width: "100%", backgroundColor: theme.palette.background.default ***REMOVED******REMOVED***>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/Projects" element=***REMOVED***<Projects />***REMOVED***></Route>
            <Route path="/Projects/:project_id" element=***REMOVED***<Project />***REMOVED***></Route>
            <Route path="/Projects/:project_id/Boards/:id" element=***REMOVED***<Board />***REMOVED***></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ColorModeProvider>
  )
***REMOVED***

export default App
