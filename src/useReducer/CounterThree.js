import React,{useReducer} from 'react'

  //you can use multiple useReducer to deal with same reducer but different state

const initialState ={
  firstCounter:0
}

const reducer =(state,action)=>{
  switch (action.type){
    case 'increasement':
      return {
        firstCounter:state.firstCounter+1
      };
    case 'decreasement':
      return{
        firstCounter:state.firstCounter-1
      };
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

export const CounterThree = () => {
  const [count,dispatch] = useReducer(reducer,initialState);
  const [countTwo,dispatchTwo] = useReducer(reducer,initialState);

  return (
    <div>
      <div>
        <h4>CounterThree useReducer One : {count.firstCounter}</h4>
        <button onClick={()=>dispatch({type:'increasement'})}>Increasement</button>
        <button onClick={()=>dispatch({type:'decreasement'})}>Decreasement</button>
        <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
      </div>
      <div>
        <h4>CounterThree useReducer Two : {countTwo.firstCounter}</h4>
        <button onClick={()=>dispatchTwo({type:'increasement'})}>Increasement</button>
        <button onClick={()=>dispatchTwo({type:'decreasement'})}>Decreasement</button>
        <button onClick={()=>dispatchTwo({type:'reset'})}>Reset</button>
      </div>
    </div>
  )
}
