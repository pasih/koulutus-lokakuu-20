import React, { useEffect, useState } from "react";
import { getCommentsForPost } from "octo-sample-api"


export function SinglePost(props) {
  const selectedPost = props.selectedPost;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (!selectedPost) {
      return;
    }

    getCommentsForPost(selectedPost.id).then(loadedComments => {
      setComments(loadedComments)
    })
  }, [selectedPost]);

  if (!selectedPost) {
    return <div className="single-post">
      Ei ladattua viestiä
    </div>
  }

  return <div className="single-post">
      <h2>{selectedPost.title}</h2>
      <div>{selectedPost.body}</div>
      <CommentList comments={comments} />
  </div>
}

function CommentList(props) {
  return <ul className="comment-list">
    {props.comments.map(comment => (
      <li key={comment.id}  className="comment-list-comment">
        {comment.body}{" "}
        <span className="comment-author">
          {comment.email}
        </span>
      </li>
    ))}
  </ul>
} 