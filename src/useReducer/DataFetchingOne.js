import React,{useState,useEffect} from 'react';
import axios from 'axios';

export const DataFetchingOne = () => {
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState('');
  const [post,setPost] = useState({});

  useEffect(()=>{
    console.log('effect called');
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(res=>{
        setLoading(false);
        setError('');
        setPost(res.data);
      }).catch(error =>{
        setLoading(false)
        setError(error)
        setPost({})
    })
  },[])

  return (
    <div>
      <br/>
      {loading ? 'loading' : post.title}
      {error ? error.message : null}
      <br/>
      <br/>
    </div>
  )
}
