import React,{useReducer} from 'react';


const initialState = 0;
const reducer =(state,action)=>{
  switch(action) {
    case 'increasement':
      return state+1;
    case 'decreasement':
      return state-1;
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export const CounterOne = () => {
  const [count,dispatch] = useReducer(reducer,initialState);
  return (
    <div>
      <div>CounterOne:{count}</div>
      <button onClick ={()=>dispatch('increasement')}>Increasement</button>
      <button onClick={()=>dispatch('decreasement')}>Decreasement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
    </div>
  )
}
