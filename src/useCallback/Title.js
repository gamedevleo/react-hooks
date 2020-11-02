import React from 'react';

export const Title = React.memo((props) => {
  console.log('Rendering Title');
  return (
    <h1>
      useCallback Hook
    </h1>
  )
})
