import React from 'react';
import { Link } from 'react-router-dom';
import data from '../dummy';
import articleLink from '../scripts/article-link';

const Article = props => {
  let article = data.filter(article => {
    let id = articleLink(article.heading);
    console.log(id)
    return id == props.match.params.articleId
  })[0]

  return (
    <div>
        <Link to="/"></Link>
        <h1>{article.heading}</h1>
        <img src={article.image} />
        <p>{article.body}</p>
    </div>
  )
}

export default Article;