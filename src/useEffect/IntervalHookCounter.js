import React,{useState,useEffect} from 'react'

export const IntervalHookCounter = () => {
  const [count,setCount] =useState(0);
  
  const tick = ()=>{
    setCount(count=>count+1);
  }

  useEffect(()=>{
    const interval = setInterval(tick,1000);

    return (()=>{
        clearInterval(interval);
    })
  },[]);

//if need some props as dependency  should put the funtion inside useEffect
  // useEffect(()=>{

  //   const tick = ()=>{
  //     setCount(count+1);
  //   }
  //
  //   const interval = setInterval(tick,1000);
  //   return (()=>{
  //       clearInterval(interval);
  //   })
  // },[count]);


  return (
    <div>
      {count}
    </div>
  )
}
