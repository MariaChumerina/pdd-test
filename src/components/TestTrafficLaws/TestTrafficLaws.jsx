import React from 'react';
import FormInputName from '../FormInputName/FormInputName.jsx';
import TestTrafficLawsData from '../../TestTrafficLawsData/questions.json';
import { sessionSaver } from '../../SessionSaver.js';
import getTickets from '../../utils/getTickets.js';
import SuggestedAnswers from '../SuggestedAnswers/SuggestedAnswers.jsx';
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

  chooseAnswer = (indexOfUserAnswer) => {
    const { indexOfTicket } = this.state;
    const userAnswer = indexOfUserAnswer + 1;

    // after choosing an answer change ticket(question) at test to next
    const nextTicket = indexOfTicket + 1;
    this.setState({ indexOfTicket: nextTicket });

    this.checkUserAnswer(userAnswer, indexOfTicket);
  }

  checkUserAnswer = (userAnswer, indexOfTicket) => {
    const { tickets, wrongAnswers } = this.state;
    const trueAnswer = Number(tickets[indexOfTicket].correct);

    if (trueAnswer !== userAnswer) {
      /* if userAnswer is wrong, add block with wrong answer includes
      number of ticket, answer from user and true answer.
      further for convenient processing in the results
     */
      this.setState({
        wrongAnswers: [...wrongAnswers, {
          ticketNumber: indexOfTicket,
          userAnswer: tickets[indexOfTicket].answers[userAnswer - 1],
          correct: tickets[indexOfTicket].answers[trueAnswer - 1],
        }],
      });
    }
  }

  getImage = () => {
    const { tickets, indexOfTicket } = this.state;
    const imageName = tickets[indexOfTicket].image;
    return !imageName.includes('no_image.jpg')
      ? <img src={getImageSrc(imageName)} alt="изображение ситуации" /> : '';
  }

  // when user try pass test again
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
              <SuggestedAnswers
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
