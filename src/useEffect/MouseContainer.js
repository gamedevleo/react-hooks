import React,{useState} from 'react'
import {HookMouse} from './index';

export const MouseContainer = (props) => {
  const [display,setDisplay]  = useState(true);

  return (
    <div>
      <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouse/>}
    </div>
  )
};
