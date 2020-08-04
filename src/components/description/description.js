import React, { Component } from 'react';

import './description.css';

import birdsData from '../../data/birds-data'

export default class Description extends Component {

  render() {
    return (
      <div className="description card">
        <div className="card-body">
          <img className="image"
            src={birdsData[0][0].image} alt={birdsData[0][0].name} />
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <h4>{birdsData[0][0].name}</h4>
            </li>
            <li className="list-group-item">
              <span>{birdsData[0][0].species}</span>
            </li>
            <li className="list-group-item">
              <audio src={birdsData[0][0].audio} controls="true" />
            </li>
          </ul>
        </div>
        <span>
          {birdsData[0][0].description}
        </span>
      </div>
    )
  }
}