import React, { Component } from 'react';

import Header from './components/header';
import CurrentQuestion from './components/current-question';
import Answers from './components/answers'
import Description from './components/description'

import { bird } from './data/constants'

class App extends Component {
  state = {
    count: 0,
    score: 0,
    answer: bird.id,
    userAction: null
  }
  comparisonId = (id) => {
    if (id === this.state.answer) {
      this.setState(state => {
        return {
          userAction: state.answer
        }
      });
    }
    console.log('id: ' + id)
    console.log('answer: ' + this.state.answer)
    console.log('userAction: ' + this.state.userAction)
  }
  render() {
    const { count, score, answer } = this.state
    const { userAction } = this.comparisonId
    return (
      <div>
        <Header
          count={count}
          score={score}
        />
        <CurrentQuestion
          count={count}
          answer={answer}
          userAction={userAction}
        />
        <div className="row mb2">
          <div className="col-md-6">
            <Answers
              comparisonId={this.comparisonId}
            />
          </div>
          <div className="col-md-6">
            <Description />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
