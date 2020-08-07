import React, { Component } from 'react';

import Header from './components/header';
import CurrentQuestion from './components/current-question';
import Answers from './components/answers'
import Description from './components/description'

import birdsData from './data/birds-data'

class App extends Component {
  state = {
    count: 0,
    score: 0,
    answer: null,
    userAction: null,
    currentBird: null,
    status: null
  }
  allBirdsInStage = birdsData[this.state.count]
  bird = this.allBirdsInStage[Math.floor(Math.random() * Math.floor(this.allBirdsInStage.length))]
  click = (id) => {
    if (id === this.state.answer) {
      this.setState(state => {
        return {
          userAction: state.answer,
          status: 'right'
        }
      });
    } else {
      this.setState(state => {
        return {
          userAction: id,
          status: 'error'
        }
      });
    }
    const currentBird = this.allBirdsInStage[id - 1]
    this.setState({ currentBird })
    console.log('id: ' + id)
    console.log('answer: ' + this.state.answer)
    console.log('userAction: ' + this.state.userAction)
    console.log(this.state.currentBird)
    return currentBird
  }
  render() {
    const { count, score, userAction, currentBird, status } = this.state
    this.state.answer = this.bird.id
    console.log(currentBird)
    return (
      <div>
        <Header
          count={count}
          score={score}
        />
        <CurrentQuestion
          count={count}
          answer={this.state.answer}
          userAction={userAction}
          bird={this.bird}
        />
        <div className="row mb2">
          <div className="col-md-6">
            <Answers
              allBirdsInStage={this.allBirdsInStage}
              click={this.click}
              status={status}
            />
          </div>
          <div className="col-md-6">
            <Description
              currentBird={currentBird}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
