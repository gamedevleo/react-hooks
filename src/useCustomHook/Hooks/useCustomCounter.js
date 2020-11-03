import {useState} from 'react'

export const UseCustomCounter = (initialCount=0,value=1) => {
  const [count,setCount] =useState(initialCount);
  const increment = ()=>{
    setCount(preCount =>preCount+value);
  }

  const decrement = () =>{
    setCount(preCount=>preCount-value);
  }

  const reset = ()=>{
    setCount(initialCount);
  }
  return [count,increment,decrement,reset];
}
