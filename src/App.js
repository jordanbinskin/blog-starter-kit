import React from 'react';
import './App.css';
import Button from './components/Button';
import ArticlePreview from './components/ArticlePreview'
import data from './dummy.js'

function App() {
  return (
    <div className="App">
      {
        data.map(article => <ArticlePreview heading={article.heading} image={article.image} blurb={article.blurb} />)
      }
      <Button text={'botton text'} />
    </div>
  );
}

export default App;
