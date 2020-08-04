import React from 'react';

import Header from './components/header';
import CurrentQuestion from './components/current-question';
import Answers from './components/answers'

function App() {
  return (
    <div>
      <Header />
      <CurrentQuestion />
      <Answers />
    </div>
  );
}

export default App;
