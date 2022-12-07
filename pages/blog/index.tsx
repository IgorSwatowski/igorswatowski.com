import { GetStaticProps } from "next";
import { getAllPosts } from "../../lib/posts";

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
        {posts.map((post) => {
          return (
            <>
              <h1 key={post.id}>{post.title}</h1>
              <p>Read more</p>
            </>
          );
        })}
      </>
    );
  }