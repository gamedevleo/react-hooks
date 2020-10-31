import React from 'react';
import './App.css';
import {ClassCounter,
  HookCounter,
  HookCounterTwo,
  HookCounterThree,
  HookCounterFour} from './useState';
import {EffectHookCounterOne,
  EffectHookCounterTwo,
  MouseContainer,
  IntervalHookCounter,
  DataFetching} from './useEffect';
import {ContainerA} from './useContext/index';


export const MyContext = React.createContext('');

function App() {
  return (
    <div className="App">
      <ClassCounter />
      <HookCounter />
      <HookCounterTwo />
      <HookCounterThree />
      <HookCounterFour />
      <EffectHookCounterOne />
      <EffectHookCounterTwo />
      <MouseContainer />
      <IntervalHookCounter />
      <DataFetching />
      <MyContext.Provider value={'SDASDS'}>
        <ContainerA />
      </MyContext.Provider>
    </div>
  );
}

export default App;
