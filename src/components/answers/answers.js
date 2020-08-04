import React, { Component } from 'react';

import './answers.css';

import birdsData from '../../data/birds-data'

export default class Answers extends Component {

  render() {
    const allBirdsInStage = birdsData[0]

    return (
      <ul className="item-list list-group">
        {allBirdsInStage.map((item) => (<li className="list-group-item"><span className="li-btn"></span>{item.name}</li>))}
      </ul>
    )
  }
}