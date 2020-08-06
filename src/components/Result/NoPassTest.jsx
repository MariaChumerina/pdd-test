import { sessionSaver } from '../../SessionSaver.js';
import React from 'react';
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