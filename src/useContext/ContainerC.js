import React,{useContext} from 'react'
import { MyContext } from '../App';

export const ContainerC = () => {
  const name = useContext(MyContext);
  return (
    <div>
      Your name: {name}
    </div>
  )
}
