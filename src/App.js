import React, { Component } from 'react';

import Header from './components/header';
import CurrentQuestion from './components/current-question';
import Answers from './components/answers'
import Description from './components/description'
import GameOver from './components/game-over'

import birdsData from './data/birds-data'
import './App.css'

class App extends Component {
  state = {
    count: 0,
    score: 0,
    ball: 5,
    answer: null,
    userAction: null,
    currentBird: null,
    allBirdsInStage: birdsData[0],
    bird: birdsData[0][Math.floor(Math.random() * Math.floor(birdsData[0].length))]
  }

  click = (id) => {
    this.state.userAction = id
    if (this.state.userAction === this.state.bird.id) {
      this.state.score = this.state.score + this.state.ball
    }

    if (id !== this.state.bird.id) {
      this.setState(state => {
        return {
          ball: state.ball - 1
        }
      })
    }

    if (this.state.ball < 0) {
      this.state.ball = 0
    }

    const currentBird = this.state.allBirdsInStage[id - 1]
    this.setState({ currentBird })
    console.log('id: ' + id)
    console.log('answer: ' + this.state.bird.id)
    console.log('userAction: ' + this.state.userAction)
    console.log('ball: ' + this.state.ball)
    return currentBird
  }

  onButtonClick = () => {
    const { count, userAction, score } = this.state

    if (count < 5 && userAction === this.state.bird.id) {
      this.setState({
        count: count + 1,
        ball: 5,
        score: score,
        answer: null,
        userAction: null,
        currentBird: null,
        allBirdsInStage: birdsData[count + 1],
        bird: birdsData[count + 1][Math.floor(Math.random() * Math.floor(birdsData[count + 1].length))]
      })
    }

    if (count === 5) {
      this.setState({
        count: 6,
        score: score,
        ball: 5,
        answer: null,
        userAction: null,
        currentBird: null,
        allBirdsInStage: birdsData[0],
        bird: birdsData[0][Math.floor(Math.random() * Math.floor(birdsData[0].length))]
      })
    }
  }

  replay = () => {
    this.setState({
      count: 0,
      score: 0,
      ball: 5,
      answer: null,
      userAction: null,
      currentBird: null,
      allBirdsInStage: birdsData[0],
      bird: birdsData[0][Math.floor(Math.random() * Math.floor(birdsData[0].length))]
    })
  }

  render() {
    const { count, score, userAction, currentBird, allBirdsInStage, bird } = this.state
    console.log(bird)
    return (
      <div>
        {count === 6 ? <GameOver
          score={score}
          replay={this.replay}
        /> : <Game
            bird={bird}
            count={count}
            score={score}
            click={this.click}
            userAction={userAction}
            currentBird={currentBird}
            allBirdsInStage={allBirdsInStage}
            onButtonClick={this.onButtonClick}
          />}
      </div>
    );
  }
}

export default App;

class Game extends Component {
  render() {
    const { count, score, userAction, currentBird, allBirdsInStage, bird, click, onButtonClick } = this.props
    return (
      <React.Fragment>
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
              userAction={userAction}
              answer={bird.id}
              click={click}
              bird={bird}
            />
          </div>
          <div className="col-md-6">
            <Description
              currentBird={currentBird}
            />
          </div>
          <button className={userAction === bird.id ? 'btn next-level' : 'btn'}
            onClick={onButtonClick}
          >Next level</button>
        </div>
      </React.Fragment>
    )
  }
}
