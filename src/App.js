
import './App.css';
import React from 'react';
import Clock from './components/clock';
import Navbar from './components/navbar';




function App() {



  return (
    <>
      <Navbar />

      <div className="App-header">
        <div className="header-text">
          <h1>DIGITAL CLOCK</h1>
        </div>
        <Clock />
      </div>
    </>
  );
}

window.addEventListener('mousemove', function (e) {
  let x = (e.x / 6) * 2;
  let y = (e.y / 6) * 2;
  document.getElementsByClassName("header-text")[0].style.color = "rgb(" + x + ", 120, " + y + ")"
})


export default App;
