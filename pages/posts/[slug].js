import { Fragment } from "react";
import PostContent from "../../components/post/post-details/post-content";
import { getAllPostFiles, getPostData } from "../../lib/posts-util";

function PostPage(props) {
  return (
    <Fragment>
      <PostContent post={props.postData} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: { postData: postData },
    revalidate: 300,
  };
}

export function getStaticPaths() {
  const allPostFiles = getAllPostFiles();

  const fileNames = allPostFiles.map((file) => file.replace(/\.md$/, ""));

  return {
    paths: fileNames.map((name) => ({ params: { slug: name } })),
    fallback: false,
  };
}

export default PostPage;
