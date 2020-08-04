import React, { Component } from 'react';

import './current-question.css';

import birdsData from '../../data/birds-data'
import defaultBird from './default-bird.jpg'

export default class CurrentQuestion extends Component {

  render() {
    const defaultName = '*****'
    const bird = birdsData[1][1]
    return (
      <div className="current-question jumbotron rounded">
        <img className="bird-image" src={defaultBird}></img>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h3 className="term">{defaultName}</h3>
          </li>
          <li className="list-group-item">
            <audio src={bird.audio} controls="true" />
          </li>
        </ul>
      </div>
    );
  }
}