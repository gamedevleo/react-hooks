import React,{useReducer} from 'react';

const initialState ={
  firstCounter:0,
  secondCounter:10
}

const reducer =(state,action)=>{
  switch(action.type){
    case 'increasement':
      return {
        ...state,
        firstCounter:state.firstCounter+action.value}
    case 'decreasement':
      return {
        ...state,
        firstCounter:state.firstCounter-action.value}
    case 'increasement2':
      return {
        ...state,
        secondCounter:state.secondCounter+action.value}
    case 'decreasement2':
      return {
        ...state,
        secondCounter:state.secondCounter-action.value}
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export const CounterTwo = () => {
  const [count,dispatch] =useReducer(reducer,initialState);
  return (
    <div>
      <h2>CounterTwo: <br/>FirstCounter:{count.firstCounter}</h2>
      <h2>SecondCounter:{count.secondCounter}</h2>
      <button onClick={()=>dispatch({type:'increasement',value :1})}>FirstCounter Increasement</button>
      <button onClick={()=>dispatch({type:'decreasement',value :1})}>FirstCounter Decreasement</button>
      <button onClick={()=>dispatch({type:'increasement',value :5})}>FirstCounter Increasement 5</button>
      <button onClick={()=>dispatch({type:'decreasement',value :5})}>FirstCounter Decreasement 5</button>
      <button onClick={()=>dispatch({type:'increasement2',value :1})}>SecondCounter Increasement</button>
      <button onClick={()=>dispatch({type:'decreasement2',value :1})}>SecondCounter Decreasement</button>
      <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
    </div>
  )
}
