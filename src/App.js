import React from 'react';
import './App.css';
import Button from './components/Button';
import ArticlePreview from './components/ArticlePreview'
import Article from './components/Article'
import data from './dummy.js'
import articleLink from './scripts/article-link';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/rando">Rando</Link>
        </nav>
        <Switch>
          <Route path="/article/:articleId" component={Article} />
          <Route exact path="/rando">
            <Rando />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h1>A blog starter</h1>
      {
        data.map((article, index) => <ArticlePreview key={index} link={articleLink(article.heading)} heading={article.heading} image={article.image} blurb={article.blurb} />)
      }
    </>
  )
}

function Rando() {
  return <h2>SOme HTML</h2>
}

export default App;
