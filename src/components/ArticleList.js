import React from "react";
import Article from "./Article";

function ArticleList({ posts }) {
  console.log({ posts });
  const renderArticleList = posts.map((post) => {
    return (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
      />
    );
  });
  return <main>{renderArticleList}</main>;
}

export default ArticleList;
