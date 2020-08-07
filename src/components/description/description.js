import React, { Component } from 'react';

import './description.css';

export default class Description extends Component {

  render() {
    let {currentBird} = this.props
    console.log(currentBird)
    return (
      <div className="description card">
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
      </div>
    )
  }
}