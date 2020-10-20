import React, {  useState } from 'react';


export function PostList(props) {
  const { loading, posts, onPostPicked } = props;

  const [filter, setFilter] = useState("");

  function onFilterChanged(e) {
    setFilter(e.target.value);
  }

  let visiblePosts = posts;

  if (filter !== "") {
    visiblePosts = visiblePosts.filter(post =>
      post.title.toLowerCase().indexOf(filter) > -1)
  }

  return (
    <div className="post-list">
      <input value={filter} onChange={onFilterChanged} />
      {loading ? "Ladataan.." : 
      <ul>
        {visiblePosts.map(post => (
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