import { Fragment } from "react";
import AllPost from "../../components/post/all-post";
import { getAllPost } from "../../lib/posts-util";

function AllPostPage(props) {
  return (
    <Fragment>
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
