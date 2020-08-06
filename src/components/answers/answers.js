import React, { Component } from 'react';

import './answers.css';

import { allBirdsInStage } from '../../data/constants'

export default class Answers extends Component {

  render() {
    const { comparisonId } = this.props;
    return (
      <ul className="item-list list-group">
        {allBirdsInStage.map((item) => {
          const { id } = item
          return (
            <li className="list-group-item"
              id={item.id}
              onClick={() => comparisonId(id)}>
              <span className="li-btn"></span>
              {item.name}
            </li>
          )
        })}
      </ul>
    )
  }
}