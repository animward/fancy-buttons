// src/components/LightSwitchButton.js
import React from 'react';

function LightSwitchButton(props) {
  const { light, switchLight } = props;

	const handleClick = () => {
    switchLight();
    props.increaseAnger(0.1);
  };

  return (
    <button onClick={handleClick} className="LightSwitchButton">
      {light === "on" && <span><i>💡</i> I'm on!</span>}
      {light === "off" && <span className="off"><i>💡</i> I'm off!</span>}
    </button>
  );
}

export default LightSwitchButton;
