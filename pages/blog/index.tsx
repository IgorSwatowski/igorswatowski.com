import { GetStaticProps } from "next";
import { getAllPosts } from "../../lib/posts";
import Posts from "./Posts";

export async function getStaticProps() {
  const posts = await getAllPosts();

  return {
      props: {
          posts,
      },
  };
}

export default function BlogPage({ posts }: any) {
    return (
      <>
        <Posts posts={posts} />
      </>
    );
  }