import { Fragment } from "react";
import AllPost from "../../components/post/all-post";

function AllPostPage() {
  const DUMMY_POST = [
    {
      image: "nextjs.png",
      title: "getting started with Nextjs",
      excerpt:
        "Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side",
      date: "2022-07-18",
      slug: "getting-started-with-nextjs",
    },
    {
      image: "nextjs.png",
      title: "getting started with Nextjs2",
      excerpt:
        "Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side",
      date: "2022-07-18",
      slug: "getting-started-with-nextjs2",
    },
    {
      image: "nextjs.png",
      title: "getting started with Nextjs3",
      excerpt:
        "Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side",
      date: "2022-07-18",
      slug: "getting-started-with-nextjs3",
    },
    {
      image: "nextjs.png",
      title: "getting started with Nextjs4",
      excerpt:
        "Next.js is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side",
      date: "2022-07-18",
      slug: "getting-started-with-nextjs4",
    },
  ];
  return (
    <Fragment>
      <AllPost posts={DUMMY_POST} />
    </Fragment>
  );
}
export default AllPostPage;
