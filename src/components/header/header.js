import React from 'react';
import './header.css';

const listQuestions = ["Разминка", "Ворбьиные", "Лесные птицы", "Певчие птицы", "Хищные птицы", "Морские птицы",];

const Header = ({ count, score }) => {
  return (
    <div className="header d-flex">
      <div className="top-indent d-flex">
        <h3 className="logo">Songbird</h3>
        <div className="score">Score:
        <span>{' ' + score}</span>
        </div>
      </div>
      <ul className="pagination">
        {
          listQuestions.map((category, key) => (
            <HeaderItem
              category={category}
              key={key}
              active={count === key ? 'active' : null}
            />
          ))
        }
      </ul>
    </div>
  );
};

export default Header;

const HeaderItem = ({ category, active }) => (
  <li className="page-item">
    <span className={`page-link ${active}`}>{category}</span>
  </li>
)