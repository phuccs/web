/*import React, {useState,useEffect} from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Bomon from './pages/bomon'
import Congdong from './pages/congdong'
import Gioithieu from './pages/gioithieu'
import Khampha from './pages/khampha'
import img1 from '/src/assets/back-ground.png'
import img2 from '/src/assets/background2.png'

const Images =[
  img1,img2
]


const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Changes image every 5 seconds

    return () => clearInterval(interval);  // Clean up on unmount
  }, []);

  useEffect(() => {
    setBackgroundImage(images[index]);
  }, [index]);


  return (
    <div className="app"
    style={{
      height: '100vh',
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      transition: 'background-image 1s ease-in-out'
    }}>
      <Navbar/>
      <div >
        <Routes>
          <Route path="/khampha" element={<Khampha/>}/>
          <Route path="/congdong" element={<Congdong/>}/>
          <Route path="/bomon" element={<Bomon/>}/>
          <Route path="/gioithieu" element={<Gioithieu/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
*/
import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Bomon from './pages/bomon';
import Congdong from './pages/congdong';
import Gioithieu from './pages/gioithieu';
import Khampha from './pages/khampha';
import img1 from './assets/back-ground.png';
import img2 from './assets/background2.png';

const images = [img1, img2]; 

const App = () => {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); 

    return () => clearInterval(interval); 
  }, []);

  useEffect(() => {
    setBackgroundImage(images[index]);
  }, [index]);

  return (
    <div
    className="background"
    style={{
      backgroundImage: `url(${backgroundImage})`, 
    }}
    >
      <Navbar />
      <div>
        <Routes>
          <Route path="/khampha" element={<Khampha />} />
          <Route path="/congdong" element={<Congdong />} />
          <Route path="/bomon" element={<Bomon />} />
          <Route path="/gioithieu" element={<Gioithieu />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
