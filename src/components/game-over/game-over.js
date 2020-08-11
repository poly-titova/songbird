import React, {Component} from 'react'

import Header from '../header'
import './game-over.css'

export default class GameOver extends Component {
  render() {
    const { score, count, replay } = this.props
    return (
      <React.Fragment>
        <Header
          count={count}
          score={score}
        />
        <React.Fragment>
          <ul className="list-group list-group-flush">
            <li className="list-group-item game-over">
              <h1 className="term">Поздравляем!</h1>
              <p>Вы прошли викторину и набрали {score} из 30 возможных баллов</p>
            </li>
            {score !== 30 ? <Replay replay={replay}/> : <img src="https://i.pinimg.com/originals/41/16/c0/4116c07b572e00a5f93fc0b335dcb0b8.png" />}
          </ul>
        </React.Fragment>
      </React.Fragment>
    )
  }
}

class Replay extends Component {
  render() {
    const { replay } = this.props
    return (
      <li className="list-group-item">
        <button className='btn'
          onClick={replay}
        >Пройти ещё раз</button>
      </li>
    )
  }
}