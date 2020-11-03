import React from 'react';
import {useInput} from './Hooks/useInput';

export const UserForm = () => {
  const [firstName,bindFirstName,resetFirstName] = useInput('');
  const [lastName,bindLastName,resetLastName] = useInput('');
  const submitHandler = e=>{
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label>First name</label>
          <input type="text" {...bindFirstName}/>
        </div>
        <div>
          <label>Last name</label>
          <input type="text" {...bindLastName}/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}
