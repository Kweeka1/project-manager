import React from 'react'
import './App.css'
import Header from "./SharedComponents/Header/Header";
import Projects from "./pages/Projects/Projects";
import ***REMOVED***BrowserRouter, Route, Routes***REMOVED*** from "react-router-dom";

function App () ***REMOVED***

  return (
    <div className="App" style=***REMOVED******REMOVED*** width: "100%", ***REMOVED******REMOVED***>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element=***REMOVED***<Projects />***REMOVED***></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
***REMOVED***

export default App
