import React,{useState,useEffect} from 'react';

export const HookMouse =() =>{
  const [x,setX] = useState(0);
  const [y,setY] = useState(0);

  const logMousePosition = (e) =>{
    console.log('mouse event');
    setX(e.clientX);
    setY(e.clientY);
  }

  useEffect(()=>{
    console.log('useEffect called');
    window.addEventListener('mousemove',logMousePosition);

//use return to cleanup     return equal to willunMount
    return(()=>{
      console.log('remove event');
      window.removeEventListener('mousemove',logMousePosition)
    })
  },[]);

  return (
    <div>
      Hook X- {x} Y-{y}
    </div>
  )
}
