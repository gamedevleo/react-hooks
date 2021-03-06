import React,{useState} from 'react';

//usestate with array
const HookCounterFour = () =>{
  const [items,setItems] = useState([]);

  const addItem = ()=>{
    setItems(()=>{
      return([
        ...items,{
        id:items.length,
        value:Math.floor(Math.random()*10+1)}
      ])
})}

  return(
    <div>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map(item =>
          <li key ={item.id}>{item.value}</li>
        )}
      </ul>
    </div>
  )
}

export {HookCounterFour};
