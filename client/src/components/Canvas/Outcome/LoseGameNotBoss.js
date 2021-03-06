import React from 'react';
import Leaderboard from '../../Leaderboard';

const LoseGameNotBoss = (props) => {

  return (
    <main className="outcome lose-game">
      <div className="message">
        <h1>GAME OVER</h1>
        <p>Uh oh! Three strikes you're out! You can try again from the beginning though.</p>
        <p>You collected {props.score} points this game. However, because you did not make it to the final boss, your name will not be immortalized on the leaderboard.</p>

        <Leaderboard leaders={props.leaders} />
        <button className="primary" onClick={() => {
          props.resetGame()
        }}>
          Back to start</button>
      </div>
    </main >
  );
};
export default LoseGameNotBoss;