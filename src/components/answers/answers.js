import React, { Component } from 'react';

import './answers.css';

export default class Answers extends Component {

  render() {
    const { allBirdsInStage, click } = this.props;
    return (
      <ul className="item-list list-group">
        {allBirdsInStage.map((item) => {
          const { id } = item
          return (
            <li className={`list-group-item`}
              id={item.id}
              onClick={() => click(id)}>
              <span className={`li-btn`}></span>
              {item.name}
            </li>
          )
        })}
      </ul>
    )
  }
}