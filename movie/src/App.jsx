import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Cards from './components/Cards'
import {  Routes, Route } from "react-router-dom";
import AddMovie from './components/AddMovie'
import Details from './components/Details'
// import { Home } from './components/Home'

function App() {

 return(
  <div className="App relative">
  
    <Header/>
     <Routes>
     <Route path="/" element={<Cards />} />    
     <Route path="/add" element={<AddMovie />} />  
     <Route path="/detail/:id" element={<Details/>}/> 
      </Routes>
      {/* <Home/> */}
  </div>
 )
}

export default App
