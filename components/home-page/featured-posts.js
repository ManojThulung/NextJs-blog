import PostGrid from "../post/post-grid";
import classes from "./featured-posts.module.css";

function FeaturedPosts(props) {
  return (
    <section className={classes.latest}>
      <h2>Featured Blogs</h2>
      <PostGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPosts;
