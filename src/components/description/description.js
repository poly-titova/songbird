import React, { Component } from 'react';

import './description.css';

export default class Description extends Component {
  render() {
    const { currentBird } = this.props
    return (
      <div className="description card">
        {currentBird ? <Info currentBird={currentBird}/> : <Intro />}
      </div>
    )
  }
}

class Info extends Component {
  render() {
    const { currentBird } = this.props
    return (
      <React.Fragment>
        <div className="card-body">
          <img className="image"
            src={currentBird && currentBird.image} alt={currentBird && currentBird.name} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{currentBird && currentBird.name}</h4>
            </li>
            <li className="list-group-item">
              <span>{currentBird && currentBird.species}</span>
            </li>
            <li className="list-group-item">
              <audio src={currentBird && currentBird.audio} controls="true" />
            </li>
          </ul>
        </div>
        <span>
          {currentBird && currentBird.description}
        </span>
      </React.Fragment>
    )
  }
}

class Intro extends Component {
  render() {
    return (
      <p className="intro">
        <span>Послушайте плеер.</span>
        <span>Выберите птицу из списка...</span>
      </p>
    )
  }
}