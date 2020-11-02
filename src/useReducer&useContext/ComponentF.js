import React,{useContext} from 'react'
import {CounterContext} from '../App';

export const ComponentF = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <h4>ComponentF:{counterContext.CountState.firstCounter}</h4>
      <button onClick={()=>counterContext.CountDispatch({type:'increasement'})}>Increasement</button>
      <button onClick={()=>counterContext.CountDispatch({type:'decreasement'})}>Decreasement</button>
      <button onClick={()=>counterContext.CountDispatch({type:'reset'})}>Reset</button>
    </div>
  )
}
