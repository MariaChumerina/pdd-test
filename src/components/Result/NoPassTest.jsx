import React from 'react';
import PropTypes from 'prop-types';
import { sessionSaver } from '../../SessionSaver.js';
import noPassTest from './media/nopass.svg';

export default function NoPassTest({ falseAnswers }) {
  return (
      <>
        <img src={noPassTest} alt="тест не пройден"/>
        <p>
          <b>{sessionSaver.getUserName()}</b>, к сожалению, вы не прошли тест.
        </p>
        <p>
          <b>Количество ошибок:</b> {falseAnswers.length}.
        </p>
      </>
  );
}

NoPassTest.propTypes = {
  falseAnswers: PropTypes.arrayOf(PropTypes.object).isRequired
}