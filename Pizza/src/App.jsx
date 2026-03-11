import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Menu from "./component/Menu";
import Contact from "./component/Contact";


function App() {

  return (
    <>
    
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
   
    </>
  )
}

export default App
