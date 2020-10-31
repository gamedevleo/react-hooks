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
    </div>
  );
}

export default App;
