import React from 'react';
import FormInputName from '../FormInputName/FormInputName.jsx';
import TestTrafficLawsData from '../../TestTrafficLawsData/questions.json';
import { sessionSaver } from '../../SessionSaver.js';
import getTickets from '../../utils/getTickets.js';
import Answers from '../Answers/Answers.jsx';
import './TestTrafficLaws.css';
import Result from '../Result/Result.jsx';
import getImageSrc from '../../utils/getImage.js';

export default class TestTrafficLaws extends React.Component {
  state = {
    isSubmitted: false,
    tickets: [],
    indexOfTicket: 0,
    wrongAnswers: [],
  }

  componentDidMount() {
    const tickets = getTickets(TestTrafficLawsData);
    this.setState({ tickets });
  }

  handleSubmit = (value) => {
    const { isSubmitted } = this.state;
    sessionSaver.setUserName(value);
    this.setState({ isSubmitted: !isSubmitted });
  }

  chooseAnswer = (answer) => {
    const { indexOfTicket } = this.state;
    this.setState({ indexOfTicket: indexOfTicket + 1 });
    this.checkAnswer(answer + 1, indexOfTicket);
  }

  checkAnswer = (answerNumber, indexOfTicket) => {
    const { tickets, wrongAnswers } = this.state;
    const trueAnswer = Number(tickets[indexOfTicket].correct);
    if (trueAnswer !== answerNumber) {
      this.setState({
        wrongAnswers: [...wrongAnswers, {
          ticketNumber: indexOfTicket,
          answer: tickets[indexOfTicket].answers[answerNumber - 1],
          correct: tickets[indexOfTicket].answers[trueAnswer - 1],
        }],
      });
    }
  }

  getImage = () => {
    const { tickets, indexOfTicket } = this.state;
    const ticket = tickets[indexOfTicket];
    return !ticket.image.includes('no_image.jpg')
      ? <img src={getImageSrc(ticket.image)} alt="изображение ситуации" /> : '';
  }

  startTest = () => {
    const tickets = getTickets(TestTrafficLawsData);
    this.setState({ tickets, indexOfTicket: 0, wrongAnswers: [] });
  }

  renderTest = () => {
    const { tickets, indexOfTicket, wrongAnswers } = this.state;
    const numberOfQuestion = indexOfTicket + 1;

    return (
      indexOfTicket <= 19
        ? (
          <div className="container margin-top-50">
            {this.getImage()}
            <p>
              <span>
                {`${numberOfQuestion} `}
              </span>
              <span>
                из 20
              </span>
            </p>
            <h2>
              {tickets[indexOfTicket].title}
            </h2>
            <div>
              <Answers
                answers={tickets[indexOfTicket].answers}
                chooseAnswer={this.chooseAnswer}
                hint={tickets[indexOfTicket].hint}
              />
            </div>
          </div>
        ) : (
          <Result
            wrongAnswers={wrongAnswers}
            startTest={this.startTest}
            tickets={tickets}
          />
        )
    );
  }

  render() {
    const { isSubmitted } = this.state;
    return (
      isSubmitted
        ? this.renderTest() : <FormInputName onSubmit={this.handleSubmit} />
    );
  }
}
