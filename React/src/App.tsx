import React from 'react'
import './App.css'
import Header from "./SharedComponents/Header/Header";
import Projects from "./pages/Projects/Projects";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App () {

  return (
    <div className="App" style={{ width: "100%", }}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Projects />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
