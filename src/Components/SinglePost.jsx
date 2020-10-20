import React from "react";


export function SinglePost(props) {
  const selectedPost = props.selectedPost;

  if (!selectedPost) {
    return <div className="single-post">
      Ei ladattua viestiä
    </div>
  }

  return <div className="single-post">
      <h2>{selectedPost.title}</h2>
      <div>{selectedPost.body}</div>
      <CommentList comments={[]} />
  </div>
}

function CommentList(props) {
  return <ul className="comment-list-comment">
    {props.comments.map(comment => (
      <li>
        
      </li>
    ))}
  </ul>
} 