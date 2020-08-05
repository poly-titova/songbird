import React, { Component } from 'react';

import './current-question.css';

import defaultBird from './default-bird.jpg'

import { state, defaultName, bird } from '../../data/constants'

export default class CurrentQuestion extends Component {

  render() {
    return (
      <div className="current-question jumbotron rounded">
        <img className="bird-image" src={state.userAction === state.answer ? bird.image : defaultBird}></img>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3 className="term">{state.userAction === state.answer ? bird.name : defaultName}</h3>
          </li>
          <li className="list-group-item">
            <audio src={bird.audio} controls="true" />
          </li>
        </ul>
      </div>
    );
  }
}