import React from 'react';

import Header from './components/header';
import CurrentQuestion from './components/current-question';
import Answers from './components/answers'
import Description from './components/description'

function App() {
  return (
    <div>
      <Header
        count={count}
        score={score}
      />
      <CurrentQuestion />
      <div className="row mb2">
        <div className="col-md-6">
          <Answers />
        </div>
        <div className="col-md-6">
          <Description />
        </div>
      </div>
    </div>
  );
}

export default App;
