import React,{useState,useEffect} from 'react';
import axios from 'axios';

export const DataFetching = (props) => {
  const [post,setPost] = useState({});
  const [id,setId] = useState(1);
  const [fetchFormId, setFetchFormId] = useState(id);

  const handleFetchID =()=>{
    setFetchFormId(id);
  }

  useEffect(()=>{
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res=>{
      console.log(res);
      setPost(res.data);
    })
    .catch(error=>{
      console.log(error);
    })
  },[fetchFormId]);
  return (
    <div>
      <input value = {id} onChange ={(e)=>setId(e.target.value)} />
      <button onClick = {handleFetchID} >FetchPost</button>
      <p>{post.title}</p>
    </div>
  )
}


// export const DataFetching = (props) => {
//   const [posts,setPosts] = useState([]);
//
//   useEffect(()=>{
//     axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(res=>{
//       console.log(res);
//       setPosts(res.data);
//     })
//     .catch(error=>{
//       console.log(error);
//     })
//   },[]);
//   return (
//     <div>
//       <ul>
//         {
//           posts.map(post=>{return <li key={post.id}>{post.title}</li>})
//         }
//       </ul>
//     </div>
//   )
// }
