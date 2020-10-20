import './App.css';
import "octo-sample-api/styles.css"

import { getPosts } from "octo-sample-api"
import React, { useEffect, useState } from 'react';

/*
body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"
id: 1
title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
userData: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
userId: 1
*/
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPosts().then(loadedPosts => {
      setPosts(loadedPosts);
      setLoading(false)
    })
  }, [])
  
  // if (loading) {
  //   return <div>Ladataan</div>
  // }

  return (
    <div className="posts-app">
      <div className="post-list">
        {loading ? "Ladataan.." : 
        <ul>
          {posts.map(post => <li key={post.id}>
            {post.title}
          </li>)}
        </ul>}
      </div>
    </div>
  );
}

export default App;
