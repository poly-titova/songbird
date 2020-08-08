import React, { Component } from 'react';

import './answers.css';

export default class Answers extends Component {

  render() {
    const { allBirdsInStage, click, answer } = this.props;
    const color = (id) => {
      let a
      id === answer ? a = 'right' : a = 'error'
      return a
    }
    return (
      <ul className="item-list list-group">
        {allBirdsInStage.map((item) => {
          const { id } = item
          return (
            <li className={`list-group-item`}
            // ${id === answer ? `right` : `error`}
              id={item.id}
              onClick={() => color(id)}
              onClick={() => click(id)}>
              <span className={`li-btn ${this.a}`}></span>
              {item.name}
            </li>
          )
        })}
      </ul>
    )
  }
}