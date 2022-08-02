import React from 'react'
import './App.css'
import Header from "./SharedComponents/Header/Header";
import Projects from "./pages/Projects/Projects";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Board from "./pages/Board/Board";
import Project from "./pages/Project/Project";

function App () {

  return (
    <div className="App" style={{ width: "100%", }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Projects/:project_id" element={<Project />}></Route>
          <Route path="/Projects/:project_id/Boards/:id" element={<Board />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
