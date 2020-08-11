import React, { Component } from 'react';

import './current-question.css';

import defaultBird from './default-bird.jpg'

import { defaultName } from '../../data/constants'

export default class CurrentQuestion extends Component {

  render() {
    const { userAction, answer, bird } = this.props
    return (
      <div className="current-question jumbotron rounded">
        <img className="bird-image" src={userAction === answer ? bird.image : defaultBird}></img>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3 className="term">{userAction === answer ? bird.name : defaultName}</h3>
          </li>
          <li className="list-group-item">
            <audio src={bird.audio} controls="true" style={{width: '100%'}} />
          </li>
        </ul>
      </div>
    );
  }
}