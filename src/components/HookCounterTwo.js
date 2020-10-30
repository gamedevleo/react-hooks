import React,{useState} from 'react'


//useState with previous state   the parameter should be a function 
const HookCounterTwo = ()=>{
  const initialState = 10;
  const [count,setCount] = useState(initialState);

  var DecreaseFive = () =>{
    for(var i=0;i<5;i++)
    {
      setCount(count=>count-1);
    }
  }

  return(
    <div>
      Count:{count}
      <button onClick={()=>setCount(initialState)}>Reset</button>
      <button onClick={()=>setCount(count=>count+1)}>IncreaseMent</button>
      <button onClick={()=>setCount(count=>count-1)}>IncreaseMent</button>
      <button onClick={DecreaseFive}>Decrease5</button>
    </div>
  )
}

export default HookCounterTwo;
