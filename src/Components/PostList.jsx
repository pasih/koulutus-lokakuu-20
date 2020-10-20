import React, { useEffect, useState } from 'react';


export function PostList(props) {
  const { loading, posts, onPostPicked } = props;

  return (
    <div className="post-list">
      {loading ? "Ladataan.." : 
      <ul>
        {posts.map(post => (
          <li key={post.id} className="post-list-item">
            <button onClick={() => onPostPicked(post)}>
              {post.title}
            </button>
          </li>
        ))}
      </ul>}
    </div>
  );
}