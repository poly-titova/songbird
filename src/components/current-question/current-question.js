import React, { Component } from 'react';

import './current-question.css';

import defaultBird from './default-bird.jpg'

import { defaultName } from '../../data/constants'

export default class CurrentQuestion extends Component {

  render() {
    const { bird, next } = this.props
    return (
      <div className="current-question jumbotron rounded">
        <img className="bird-image" src={next === true ? bird.image : defaultBird}></img>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3 className="term">{next === true ? bird.name : defaultName}</h3>
          </li>
          <li className="list-group-item">
            <audio id='bird' src={bird.audio} controls="true" style={{width: '100%'}} />
            {next === true ? document.getElementById('bird').pause() : null}
          </li>
        </ul>
      </div>
    );
  }
}