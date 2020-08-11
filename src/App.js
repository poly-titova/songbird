import React, { Component } from 'react';

import Header from './components/header';
import CurrentQuestion from './components/current-question';
import Answers from './components/answers'
import Description from './components/description'
import GameOver from './components/game-over'

import rightSound from '../src/data/win.mp3'
import errorSound from '../src/data/error.mp3'

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
    bird: birdsData[0][Math.floor(Math.random() * Math.floor(birdsData[0].length))],
    status: Array(6).fill(null),
    next: null
  }

  onItemClick = (item) => {
    this.state.userAction = Number(item.target.id)
    if (this.state.userAction === this.state.bird.id) {
      this.state.score = this.state.score + this.state.ball
    }

    const newStatus = this.state.status.slice()
    if (this.state.next === null) {
      if (this.state.userAction === this.state.bird.id) {
        newStatus[this.state.userAction] = 'right'
        document.getElementById("right").play()
        this.setState({ status: newStatus, next: true })
      } else {
        newStatus[this.state.userAction] = 'error'
        document.getElementById("error").play()
        this.setState({ status: newStatus })
      }
    } else {
      newStatus[this.state.userAction] = null
    }

    if (this.state.userAction !== this.state.bird.id) {
      this.setState(state => {
        return {
          ball: state.ball - 1
        }
      })
    }

    if (this.state.ball < 0) {
      this.state.ball = 0
    }

    const currentBird = this.state.allBirdsInStage[this.state.userAction - 1]
    this.setState({ currentBird })
    console.log('id: ' + this.state.userAction)
    console.log('answer: ' + this.state.bird.id)
    console.log('userAction: ' + this.state.userAction)
    console.log('ball: ' + this.state.ball)
    return currentBird
  }

  onButtonClick = () => {
    const { count, score } = this.state

    if (count < 5 && this.state.next === true) {
      this.setState({
        count: count + 1,
        ball: 5,
        score: score,
        answer: null,
        userAction: null,
        currentBird: null,
        allBirdsInStage: birdsData[count + 1],
        bird: birdsData[count + 1][Math.floor(Math.random() * Math.floor(birdsData[count + 1].length))],
        status: Array(6).fill(null),
        next: null
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
        bird: birdsData[0][Math.floor(Math.random() * Math.floor(birdsData[0].length))],
        status: Array(6).fill(null),
        next: null
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
      bird: birdsData[0][Math.floor(Math.random() * Math.floor(birdsData[0].length))],
      status: Array(6).fill(null),
      next: null
    })
  }

  render() {
    const { count, score, userAction, currentBird, allBirdsInStage, bird, status, next } = this.state
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
            userAction={userAction}
            onItemClick={this.onItemClick}
            currentBird={currentBird}
            status={status}
            next={next}
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
    const { count, score, userAction, currentBird, allBirdsInStage, bird, onButtonClick, onItemClick, status, next } = this.props
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
          next={next}
        />
        <div className="row mb2">
          <div className="col-md-6">
            <Answers
              allBirdsInStage={allBirdsInStage}
              userAction={userAction}
              onItemClick={onItemClick}
              status={status}
              answer={bird.id}
              bird={bird}
            />
          </div>
          <div className="col-md-6">
            <Description
              currentBird={currentBird}
            />
          </div>
          <button className={next === true ? 'btn next-level' : 'btn'}
            onClick={onButtonClick}
          >Next level</button>
          <audio id="right" src={rightSound} />
          <audio id="error" src={errorSound} />
        </div>
      </React.Fragment>
    )
  }
}
