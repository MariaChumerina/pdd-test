import React from 'react';
import getImageSrc from '../../utils/getImage.js';
import PropTypes from 'prop-types';

export default function WrongAnswers({ tickets, wrongAnswers }) {
  const getImage = (imageName) => (!imageName.includes('no_image.jpg')
    ? <img className="margin-top-15" src={getImageSrc(imageName)} alt="изображение ситуации" /> : '');

  return (
    <div className="result-errors-block margin-top-30">
      {wrongAnswers.map((answer) => {
        const ticket = tickets[answer.ticketNumber];

        return (
          <div className="result-answers-block margin-top-30" key={answer.ticketNumber}>
            {getImage(ticket.image)}
            <h3>
              {ticket.title}
            </h3>
            <div className="margin-top-15">
              Ваш ответ:
              <p className="wrong-answer">
                {answer.answer}
              </p>
            </div>
            <div className="margin-top-15">
              Правильный ответ:
              <p className="right-answer">
                {answer.correct}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

WrongAnswers.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.object).isRequired,
  wrongAnswers: PropTypes.arrayOf(PropTypes.object).isRequired,
};
