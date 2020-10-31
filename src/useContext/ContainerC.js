import React,{useContext} from 'react'
import { MyContext } from '../App';

export const ContainerC = () => {
  const name = useContext(MyContext);
  return (
    <div>
      Container C: {name}
    </div>
  )
}
