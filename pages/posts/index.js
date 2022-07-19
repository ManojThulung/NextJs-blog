import { Fragment } from "react";
import Head from "next/head";
import AllPost from "../../components/post/all-post";
import { getAllPost } from "../../lib/posts-util";

function AllPostPage(props) {
  return (
    <Fragment>
      <Head>
        <title>All blogs</title>
        <meta
          name="description"
          content="All the blog posts related to programming and web development."
        />
      </Head>
      <AllPost posts={props.posts} />
    </Fragment>
  );
}

export async function getStaticProps() {
  const allPosts = getAllPost();

  return {
    props: { posts: allPosts },
    revalidate: 1800, //in second.
  };
}

export default AllPostPage;
