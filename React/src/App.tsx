import React from 'react'
import './App.css'
import Header from "./SharedComponents/Header/Header";
import Projects from "./pages/Projects/Projects";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Board from "./pages/Board/Board";
import Project from "./pages/Project/Project";
import {useMediaQuery, useTheme} from "@mui/material";
import ColorModeProvider from "./Contexts/ThemeContext";

function App () {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useTheme();

  return (
    <ColorModeProvider>
      <div className="App" style={{ width: "100%", backgroundColor: theme.palette.background.default }}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Projects/:project_id" element={<Project />}></Route>
            <Route path="/Projects/:project_id/Boards/:id" element={<Board />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ColorModeProvider>
  )
}

export default App
