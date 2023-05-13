import React from 'react';
import './Home.css';
import xWing from '../images/home-x-wing.png';
import TIE from '../images/home-tie.png';

export default function Home() {
  return (

    <main className="main-home">

      <div className="home-title-container">
        <img className="home-x-wing" src={xWing} alt="x-wing" />
        <img className="home-TIE" src={TIE} alt="TIE-fighter" />
        <h1 className="home-title">Rebel Force</h1>
      </div>

      <div className="home-nav">
        <button className="home-button" type="button">Play</button>
        <button className="home-button" type="button">Rules</button>
      </div>
    </main>

  );
}
