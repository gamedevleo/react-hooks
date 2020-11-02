import React,{useState,useRef,useEffect} from 'react';

export const HookTimer = (props) => {
  const [timer,setTimer] = useState(0);
  const [pause,setPause] = useState(false);
  const intervalRef = useRef();


  useEffect(()=>{
    console.log(pause);
    if(!pause){
      intervalRef.current = setInterval(()=>{
        setTimer(timer+1);
      },1000)
      return(()=>{
        clearInterval(intervalRef.current);
      })
    }

  },[timer,pause]);
  return (
    <div>
      Hook Timer:{timer}
      <button onClick={()=>{clearInterval(intervalRef.current);setTimer(0);
        setPause(true);
      }}>Clear Interval</button>
      <button onClick={()=>{
        setPause(false)
      }}>Start Interval</button>
    </div>
  )
}
