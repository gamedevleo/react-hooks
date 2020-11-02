import React,{useState,useMemo} from 'react'

//useMemo hook can make sure only the function be rendered if the dependency changed
//all other components don't be influced
export const Counter = (props) => {
  const [counterOne,setCounterOne] = useState(0);
  const [counterTwo,setCounterTwo] = useState(0);

  const incrementOne =()=>{
    console.log('incrementOne render');
    setCounterOne(counterOne+1);
  }

  const incrementTwo =()=>{
    console.log('incrementTwo render');
    setCounterTwo(counterTwo+1);
  }


  const isEven = useMemo(()=>{
    console.log('isEven render');
    let i =0;
    while(i<2000000000) i++;
    return counterOne % 2 === 0;
  },[counterOne]);

  return (
    <div>
      <button onClick={incrementOne}>CounterOne:{counterOne}</button>
        <span>{isEven ? 'Even':'Odd'}</span>
      <button onClick={incrementTwo}>CounterTwo:{counterTwo}</button>
    </div>
  )
}
