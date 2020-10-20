import './App.css';
import "octo-sample-api/styles.css"

import { getPosts } from "octo-sample-api"
import React, { useEffect, useState } from 'react';
import { PostList } from './Components/PostList'
import { SinglePost } from './Components/SinglePost'

/*
body: "quia et suscipit↵suscipit recusandae consequuntur expedita et cum↵reprehenderit molestiae ut ut quas totam↵nostrum rerum est autem sunt rem eveniet architecto"
id: 1
title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
userData: {id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: {…}, …}
userId: 1
*/
function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState();
  const [error, setError] = useState()

  useEffect(() => {
    async function retrieve() {
      try {
        const loadedPosts = await getPosts();
        setPosts(loadedPosts)
        setLoading(false)
      } catch (e) {
        setError(e.message)
      }
    }

    retrieve();
  }, [])
  
  function postPicked(post) {
    setSelectedPost(post)
  }

  return (
    <div className="posts-app">
     <PostList
      onPostPicked={postPicked}
      loading={loading}
      posts={posts} />
     <SinglePost key={selectedPost?.id} selectedPost={selectedPost} />
    </div>
  );
}

export default App;
