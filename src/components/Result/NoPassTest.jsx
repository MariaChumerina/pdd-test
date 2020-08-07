import React from 'react';
import PropTypes from 'prop-types';
import { sessionSaver } from '../../SessionSaver.js';
import noPassTest from './media/nopass.svg';

export default function NoPassTest({ wrongAnswers }) {
  return (
    <>
      <img src={noPassTest} alt="тест не пройден" />
      <p>
        <b>
          {sessionSaver.getUserName()}
        </b>
        <span>
          , к сожалению, вы не прошли тест.
        </span>
      </p>
      <p>
        <b>
          Количество ошибок:
        </b>
        <span>
          {` ${wrongAnswers.length}.`}
        </span>
      </p>
    </>
  );
}

NoPassTest.propTypes = {
  wrongAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
