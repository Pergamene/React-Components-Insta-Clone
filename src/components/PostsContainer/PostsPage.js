//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post.js";
import "./Posts.css";
// import data 
import dummyData from "../../dummy-data.js";

const PostsPage = () => {
  // set up state for your data
  const [data] = useState(dummyData);

  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {data.map(postData => (
        <Post key={postData.username} post={postData} />
      ))}
    </div>
  );
};

export default PostsPage;
