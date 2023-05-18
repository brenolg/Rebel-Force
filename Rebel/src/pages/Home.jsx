import React from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import xWing from '../images/home-x-wing.png';
import TIE from '../images/home-tie.png';

export default function Home() {
  const navigate = useNavigate();

  return (

    <main className="main-home">

      <div className="home-title-container">
        <img className="home-x-wing" src={xWing} alt="x-wing" />
        <img className="home-TIE" src={TIE} alt="TIE-fighter" />

        <h1 className="home-title">Rebel</h1>
        <h1 className="home-title">Force</h1>

      </div>

      <div className="home-nav">
        <button
          className="home-button"
          type="button"
          onClick={() => {
            navigate('/play');
          }}
        >
          Play

        </button>
        <button className="home-button" type="button">Rules</button>
      </div>
    </main>

  );
}
