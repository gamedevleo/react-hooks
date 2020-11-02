import React,{useReducer} from 'react';
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
import {CounterOne,
  CounterTwo,
  CounterThree,
  DataFetchingOne,
  DataFetchingTwo} from './useReducer/index';
import {ComponentA,
  ComponentB,
  ComponentC} from './useReducer&useContext/index';
import {ParentComponent} from './useCallback/index';
import {Counter} from './useMemo/index';
import {FocusInput,HookTimer} from './useRef/index';



export const MyContext = React.createContext('');

export const CounterContext = React.createContext();

const initialState = {
  firstCounter:0
}

const reducer = (state,action)=>{
  switch(action.type){
    case 'increasement':
      return {
        firstCounter:state.firstCounter+1
      }
    case 'decreasement':
      return{
        firstCounter:state.firstCounter-1
      }
    case 'reset':
      return{
        firstCounter:initialState.firstCounter
      }
    default:
      return state;
  }

}

function App() {
  const [count,dispatch] = useReducer(reducer,initialState);
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
      <MyContext.Provider value={'Kaiyang'}>
        <ContainerA />
      </MyContext.Provider>
      <CounterOne />
      <CounterTwo />
      <CounterThree />
      <CounterContext.Provider value ={{CountState:count,CountDispatch:dispatch}}>
          <h2>count:{count.firstCounter}</h2>
          <ComponentA />
          <ComponentB />
          <ComponentC />
      </CounterContext.Provider>
      <DataFetchingOne />
      <DataFetchingTwo />
      <ParentComponent />
      <Counter />
      <FocusInput />
      <HookTimer/>
    </div>
  );
}

export default App;
