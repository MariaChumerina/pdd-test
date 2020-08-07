import PropTypes from 'prop-types';
import passTest from './media/pass.svg';
import { sessionSaver } from '../../SessionSaver.js';
import React from 'react';

export default function PassTest({ wrongAnswers }) {
  const countOfWrongAnswers = wrongAnswers.length;

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
        {countOfWrongAnswers > 0
          ? `Количество ошибок: ${countOfWrongAnswers}.` : 'Вы не совершили ни одной ошибки!'}
      </p>
    </>
  );
}

PassTest.propTypes = {
  wrongAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
