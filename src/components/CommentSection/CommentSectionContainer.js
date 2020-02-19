// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, updateComments] = useState(props.comments);
  const [comment, updateComment] = useState({username: 'bast', text: ''});

  const submitComment = event => {
    const _comments = [...comments];
    _comments.push(comment);
    updateComments(_comments);
    event.preventDefault();
  }

  const changeComment = event => {
    updateComment({username: 'Bast', text: event.target.value});
  }

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(comment => (
        <Comment key={comment.username} comment={comment} />
      ))}
      <CommentInput submitComment={submitComment} comment={comment.text} changeComment={changeComment} />
    </div>
  );
};

export default CommentSection;
