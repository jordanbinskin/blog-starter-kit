import React from 'react';

const readTime = words => `${words.length / 200}`;

const ArticlePreview = props => {
  return (
    <a className="article-preview">
      <h2>{props.heading}</h2>
      <img width="250px" height="250px" src={props.image}/>
      <p>{props.blurb}</p>
      <p>Approx read time: {readTime(props.blurb)}</p>
    </a>
  )
}

export default ArticlePreview;