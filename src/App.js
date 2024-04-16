import React, {  useReducer } from 'react';
import './App.css';
import AngryButton from './components/AngryButton';
import CounterButton from './components/CounterButton';
import LightSwitchButton from './components/LightSwitchButton';
import TextRepeaterButton from './components/TextRepeaterButton';

function App() {
  const [light, switchLight] = useReducer(lightReducer, 'off');
  const [angryApp, dispatch] = useReducer(angryAppReducer, 0);

  function lightReducer(lightState) {
    return lightState === 'on' ? 'off' : 'on';
  }

  function angryAppReducer(angryState, action) {
    return angryState < 1 ? angryState + action : 0;
  }

  return (
    <div className={`App ${light === 'off' ? 'dark' : ''}`}>
      <h1>
        {angryApp < 1 ? 'Fancy Buttons!' : "YOU'RE CLICKING TOO MANY BUTTONS!"}
      </h1>
      <section>
        <AngryButton increaseAnger={() => dispatch(0.1)} />
        <CounterButton increaseAnger={() => dispatch(0.1)} />
        <LightSwitchButton light={light} switchLight={switchLight} increaseAnger={() => dispatch(0.1)} />
        <TextRepeaterButton increaseAnger={() => dispatch(0.1)} />
      </section>
    </div>
  );
}

export default App;
