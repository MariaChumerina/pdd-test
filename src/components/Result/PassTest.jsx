import PropTypes from 'prop-types';
import passTest from './media/pass.svg';
import { sessionSaver } from '../../SessionSaver.js';
import React from 'react';

export default function PassTest({ falseAnswers }) {
  const countOfFalseAnswers = falseAnswers.length;

  return (
    <>
      <img src={passTest} alt="тест пройден" />
      <p>
        <b>{sessionSaver.getUserName()}</b>
        <span>
          , поздравляем, вы прошли тест!
        </span>
      </p>
      <p>
        {countOfFalseAnswers
          ? `Количество ошибок: ${countOfFalseAnswers}.` : 'Вы не совершили ни одной ошибки!'}
      </p>
    </>
  );
}

PassTest.propTypes = {
  falseAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
