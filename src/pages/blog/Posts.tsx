import React from 'react';
import { getAllPosts } from "../../lib/posts";


const Posts = ({ posts }: any) => (
  <>
    {posts.map((post) => (
      <>
        <h1 key={post.id}>{post.title}</h1>
        <p>Read more</p>
      </>
    ))}
  </>
);

export default Posts;