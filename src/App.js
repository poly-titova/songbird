import React from 'react';

import Header from './components/header';
import CurrentQuestion from './components/current-question';
import Answers from './components/answers'
import Description from './components/description'

import { state } from './data/constants'

function App() {
  return (
    <div>
      <Header
        count={state.count}
        score={state.score}
      />
      <CurrentQuestion
        count={state.count}
        answer={state.answer}
        userAction={state.userAction}
      />
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
