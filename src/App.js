
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
        <span className="colorChangeText1">
          Click anywhere to change the color
        </span><span className="colorChangeText2">
          Move your mouse to change the color
        </span>
      </div>
    </>
  );
}

window.addEventListener('mousemove', function (e) {
  let x = (e.x / 6) * 2;
  let y = (e.y / 6) * 2;
  document.getElementsByClassName("header-text")[0].style.color = "rgb(" + x + ", 120, " + y + ")"
  document.getElementsByClassName("colorChangeText1")[0].style.color = "rgb(" + x + ", 120, " + y + ")"
  document.getElementsByClassName("colorChangeText2")[0].style.color = "rgb(" + x + ", 120, " + y + ")"
})


export default App;
