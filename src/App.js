import React from 'react';
import './App.css';
import Button from './components/Button';
import ArticlePreview from './components/ArticlePreview'

function App() {
  return (
    <div className="App">
      <ArticlePreview />
      <Button text={'botton text'} />
    </div>
  );
}

export default App;
