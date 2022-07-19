// import fs from "fs"; //file system imported from node module
import fs from "fs";
import path from "path"; //imported from node module
import matter from "gray-matter";

//creating path to .md folder (ie posts)
const postDirectory = path.join(process.cwd(), "posts");

//
export function getAllPostFiles() {
  const postFiles = fs.readdirSync(postDirectory); //Read all the .md files synchronously
  return postFiles;
}

export function getPostData(postIdentifier) {
  const postSlug = postIdentifier.replace(/\.md$/, ""); //removes file (ie .md) extension.

  const filePath = path.join(postDirectory, `${postSlug}.md`); //creatind path to the file.
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent); //matter function return 2 properties, 1. matadata as an object and content in string

  const postData = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPost() {
  const postFiles = getAllPostFiles();

  const allPosts = postFiles.map((file) => getPostData(file));

  //sorting all posts in the order of date.
  const allPostSort = allPosts.sort((postA, postB) =>
    postA.date >= postB.date ? -1 : 1
  );

  return allPostSort;
}

export function getFeaturedPost() {
  const allPosts = getAllPost();
  const featuredPosts = allPosts.filter((post) => post.isFeatured);
  return featuredPosts;
}
