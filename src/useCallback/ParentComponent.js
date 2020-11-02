import React,{useState,useCallback} from 'react'
import {Title,Count,Button} from './index';


//if the component should be rerendered only if the dependency changed use React.memo.  The parameter is a function
//if the rendering still not as expected, useCallback hook can be used to specifically,
//the first parameter of useCallback is the funtion, the second parameter is an array of dependencies
//this means only if the dependencies changed, then the related function or component should be rerendered


export const ParentComponent = () => {
  const [age,setAge] = useState(25);
  const [salary,setSalary] = useState(50000);

  const incrementAge = useCallback(()=>{
    setAge(age+1);
  },[age]);
  const incrementSalary = useCallback(()=>{
    setSalary(salary+1000);
  },[salary]);
  return (
    <div>
      <Title />
      <Count text='Age' count ={age}/>
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text='Salary' count={salary}/>
      <Button handleClick={incrementSalary}>Increament Salary</Button>
    </div>
  )
}
