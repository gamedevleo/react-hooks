import React,{useRef,useEffect} from 'react';

export const FocusInput = () => {
  const inputRef = useRef();

  useEffect(()=>{
    inputRef.current.focus();
  })

  return (
    <div>
      <input ref={inputRef} ></input>
    </div>
  )
}
