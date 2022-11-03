import './App.css';
import React from "react";
import Login from "./Login"
import Register from "./Register"
import ListUser from './ListUser'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <> 
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />}/> 
        <Route path="/ListUser" element={<ListUser />}/>        
      </Routes>
    </Router>
    </>
  );
}

export default App;


