import './App.css';
import Home from "./pages/home";
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";
import Registration from './pages/Registration';
import Header from './reusables/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Glendening from './pages/FamilyPages/GlendeningPages/Glendening';
import Boyd from'./pages/FamilyPages/BoydPages/Boyd';
import Bohn from'./pages/FamilyPages/BohnPages/Bohn';
import Rowbottom from'./pages/FamilyPages/RowbottomPages/Rowbottom';
import Aboutme from'./pages/Aboutme';
import Boydpages from './pages/FamilyPages/BoydPages/Boydpages';
import Bohnpages from './pages/FamilyPages/BohnPages/Bohnpages';
import RowbottomPages from './pages/FamilyPages/RowbottomPages/Rowbottompages';
import Admin from './pages/Admin';
import axios from "axios";
import { useParams } from 'react-router';
import React, { useState, useEffect } from 'react';

function App() {
  const [user, setUser] = useState({ id: undefined, email: "", password: "", isAdmin: false});

  
  useEffect(() => {
    const id = localStorage.getItem("userId");
    if (id) {
      axios.get(`http://localhost:8080/findUserById/${id}`)
      .then((response)=>{
        setUser(response.data)
        console.log("response", response.data)
      })
      .catch((e)=>{
        console.log(e)
      })
    }  
  }, [])
  
  return (


    <div className="App">
        <Header/>
      <Routes>
      <Route path="/" element={<Home user={user} setUser={setUser}/>}/> 
      <Route path="Boyd" element={<Boyd user={user} setUser={setUser}/>}/>
      <Route path="Glendening" element={<Glendening user={user} setUser={setUser} />}/>
      <Route path="Rowbottom" element={<Rowbottom user={user} setUser={setUser}/>}/>
      <Route path="Bohn" element={<Bohn user={user} setUser={setUser}/>}/>
      <Route path="/Login" element={<Login user={user} setUser={setUser} />}/>
      <Route path="/Registration" element={<Registration user={user} setUser={setUser}/>}/>
      <Route path="/Aboutme" element={<Aboutme user={user} setUser={setUser}/>}/>
      <Route path="/Boyd/Boydpages:id" element={<Boydpages user={user} setUser={setUser}/>}/>
      <Route path="/Bohn/Bohnpages/:id"element={<Bohnpages user={user} setUser={setUser}/>}/>
      <Route path="/Glendeningpages:id"element={<Glendening user={user} setUser={setUser}/>}/>
      <Route path="/Rowbottompages:id"element={<RowbottomPages user={user} setUser={setUser}/>}/>
      <Route path="/Admin" element={<Admin user={user} setUser={setUser}/>}/>

    </Routes>
    </div>

   
  ); 
}

export default App;
