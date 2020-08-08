import React, { Component } from 'react';

import Header from './components/header';
import CurrentQuestion from './components/current-question';
import Answers from './components/answers'
import Description from './components/description'

import birdsData from './data/birds-data'
import './App.css'

class App extends Component {
  state = {
    count: 0,
    score: 0,
    answer: null,
    userAction: null,
    currentBird: null,
    allBirdsInStage: birdsData[0],
    bird: birdsData[0][Math.floor(Math.random() * Math.floor(birdsData[0].length))]
  }

  allBirdsInStage = birdsData[this.state.count + 1]
  bird = this.state.allBirdsInStage[Math.floor(Math.random() * Math.floor(this.state.allBirdsInStage.length))]
  answer = this.state.bird.id

  click = (id) => {
    this.state.userAction = id
    const currentBird = this.state.allBirdsInStage[id - 1]
    this.setState({ currentBird })
    console.log('id: ' + id)
    console.log('answer: ' + this.answer)
    console.log('userAction: ' + this.state.userAction)
    return currentBird
  }

  onButtonClick = () => {
    const { count, userAction, score } = this.state

    if (userAction === this.state.bird.id) {
      this.setState({
        count: count + 1,
        score: score,
        answer: null,
        userAction: null,
        currentBird: null,
        allBirdsInStage: birdsData[count + 1],
        bird: birdsData[count + 1][Math.floor(Math.random() * Math.floor(birdsData[count + 1].length))]
      })
    }
  }

  render() {
    const { count, score, userAction, currentBird, allBirdsInStage, bird } = this.state
    console.log(bird)
    console.log(allBirdsInStage)
    return (
      <div>
        <Header
          count={count}
          score={score}
        />
        <CurrentQuestion
          count={count}
          answer={bird.id}
          userAction={userAction}
          bird={bird}
        />
        <div className="row mb2">
          <div className="col-md-6">
            <Answers
              allBirdsInStage={allBirdsInStage}
              click={this.click}
              answer={bird.id}
            />
          </div>
          <div className="col-md-6">
            <Description
              currentBird={currentBird}
            />
          </div>
          <button className={userAction === bird.id ? 'btn right' : 'btn'}
            onClick={this.onButtonClick}
          >Next level</button>
        </div>
      </div>
    );
  }
}

export default App;
