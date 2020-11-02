import React from 'react'

export const Count = React.memo(({text,count}) => {
  console.log(`Rendering ${text}`);
  return (
    <div>{text} - {count}</div>
  )
})
