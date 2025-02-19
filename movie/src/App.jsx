import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'
import {  Routes, Route } from "react-router-dom";
import AddMovie from './components/AddMovie'
function App() {

 return(
  <div className="App relative">
  
    <Header/>
     <Routes>
     <Route path="/" element={<Cards />} />    
     <Route path="/add" element={<AddMovie />} />   
      </Routes>
  </div>
 )
}

export default App
