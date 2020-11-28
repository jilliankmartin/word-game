import React from 'react';

const MuteButton = (props) => {

  return (
    <aside className="mute-music" >
      {props.music === "OFF" && <img src="/images/mute-music.png" onClick={() => {props.setMusic("ON")}} alt="unmute music"/>}
      {props.music === "ON" && <img src="/images/unmute-music.png" onClick={() => {props.setMusic("OFF")}} alt="mute music"/>}
    </aside>
  )
};

export default MuteButton;