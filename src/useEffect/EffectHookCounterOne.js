import React,{useState,useEffect} from 'react';

export const EffectHookCounterOne =() =>{
  const [count,setCount] = useState(0);

  useEffect(()=>{
    document.title = `You clicked ${count} times`
  })

  return(
    <div>
      <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )
}
