import axios from "axios";
import React, { useState } from "react";

function Fetch() {
    // to get All posts from API 
  const [posts, setposts] = useState([]);
    //   to get one post just
    const [id, setid] = useState()

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

 React.useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res => {})
        .catch(error => {console.log(error); throw(error) })     
  }, [id])



  const listPost = posts.map((post) => <li key={post.id}>{post.title}</li>);
  return <div>{listPost}</div>;
}

export default Fetch;
