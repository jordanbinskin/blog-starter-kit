import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import Article from './Article';

const readTime = words => `${words.length / 200}`;

const ArticlePreview = props => {
  return (
    <Link to={"/article/" + props.link}className="article-preview">
      <h2>{props.heading}</h2>
      <img width="250px" height="250px" src={props.image}/>
      <p>{props.blurb}</p>
      <p>Approx read time: {readTime(props.blurb)}</p>
    </Link>
  )
}

export default ArticlePreview;