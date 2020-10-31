import React,{useState,useEffect} from 'react';

export const EffectHookCounterTwo =() =>{
  const [count,setCount] = useState(0);
  const [name,setName] = useState('');

  //the second parameter is the stata that influce the function parameter
  useEffect(()=>{
    console.log('Effect - title update');
    document.title = `You clicked ${count} times`;
  },[count]);

  return(
    <div>
      <input type='text' value={name} onChange={(e)=>setName(e.target.value)}/>
      <button onClick={()=>setCount(count+1)}>Click {count} times</button>
    </div>
  )

}
