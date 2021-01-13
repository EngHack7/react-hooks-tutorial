import axios from "axios";
import React, { useState } from "react";

function Fetch() {
  // to get All posts from API
  const [posts, setposts] = useState([]);
  //   to get one post just
  const [id, setid] = useState('');
  const [IdFromButton, setIdFromButton] = useState('')
  React.useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setposts(res.data);
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
        throw e;
      });
  }, []);

//    add onTextChange ... 
  React.useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${IdFromButton}`)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
        throw error;
      });
  }, [IdFromButton]);

//   get value from text by button

  const getByButton =(e) =>{
    setIdFromButton(id)
  }

  const listPost = posts.map((post) => <li key={post.id}>{post.title}</li>);
  return (
    
    <div>
      <input value={id} onChange={(e)=> setid(e.target.value )} placeholder="write id" />
      <button onClick={getByButton}> get by id from text </button>  
      <ul>{listPost}</ul>
    </div>
  );
}

export default Fetch;
