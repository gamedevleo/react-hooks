import React,{useEffect,useReducer} from 'react'
import axios from 'axios';


const initialState = {
  loading:true,
  error:'',
  post:{}
}


const reducer = (state,action) =>{
  switch (action.type){
    case 'FETCH_SUCCESS':
      return {
        loading:false,
        post:action.payload,
        error:''
      }
    case 'FETCH_ERROR':
      return {
        loading:false,
        error:action.payload,
        post:{}
      }
    default:
      return state;
  }
}

export const DataFetchingTwo = () => {
  const [state,dispatch]=useReducer(reducer,initialState);

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res=>{
        dispatch({type:'FETCH_SUCCESS',payload:res.data})
      })
      .catch(error=>{
        dispatch({type:'FETCH_ERROR',payload:error.message})
      })
  })

  return (
    <div>
      {state.loading ? 'loading' : state.post.body}
      {state.error ? state.error : null}
    </div>
  )
}
