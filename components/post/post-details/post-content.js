import ReactMarkdown from "react-markdown";
import classes from "./post-content.module.css";
import PostHeader from "./post-header";

const DUMMY_POST = {
  image: "nextjs.png",
  title: "getting started with Nextjs",
  date: "2022-07-18",
  slug: "getting-started-with-nextjs",
  content: "# This is first post", //for markdown language
};

function PostContent() {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`;

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={DUMMY_POST.title} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
