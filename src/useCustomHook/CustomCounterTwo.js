import React from 'react';
import {UseCustomCounter} from './index';

export const CustomCounterTwo = () => {
  const [count,increment,decrement,reset] = UseCustomCounter(10,10);
  return (
    <div>
      <h4>Counter :{count}</h4>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
