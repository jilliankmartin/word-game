// Libraries
import React, { useEffect } from "react";

// Components
// import ProgressBar from '../ProgressBar';
import ArenaDoorList from '../ArenaDoorList';
import { StepProgressBar } from "../MapProgressBar";
import useGame from '../../hooks/useGame';

// Styles
import './Map.scss';

// Hooks

function Map(props) {

  useEffect(() => {
    props.updateScore();
  }, [props.game]);

  return (
    <main className="map">
      <StepProgressBar
        arenasBeaten={props.arenasBeaten}
      />
      <ArenaDoorList
        arenas={props.arenas}
        setGameMode={props.setGameMode}
        arena={props.arena}
        setArena={props.setArena}
      />
      <p class="score">POINTS: <strong>{props.score}</strong></p>
    </main>
  );
}

export default Map;