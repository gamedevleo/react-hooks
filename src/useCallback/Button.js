import React from 'react'

export const Button = React.memo(({handleClick,children}) => {
  console.log('Rendering button -',children);
  return (
    <button onClick ={handleClick}>
      {children}
    </button>
  )
})
