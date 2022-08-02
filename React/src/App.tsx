import React from 'react'
import './App.css'
import Header from "./SharedComponents/Header/Header";
import Projects from "./pages/Projects/Projects";
import ***REMOVED***BrowserRouter, Route, Routes***REMOVED*** from "react-router-dom";
import Board from "./pages/Board/Board";
import Project from "./pages/Project/Project";

function App () ***REMOVED***

  return (
    <div className="App" style=***REMOVED******REMOVED*** width: "100%", ***REMOVED******REMOVED***>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/Projects" element=***REMOVED***<Projects />***REMOVED***></Route>
          <Route path="/Projects/:project_id" element=***REMOVED***<Project />***REMOVED***></Route>
          <Route path="/Projects/:project_id/Boards/:id" element=***REMOVED***<Board />***REMOVED***></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
***REMOVED***

export default App
