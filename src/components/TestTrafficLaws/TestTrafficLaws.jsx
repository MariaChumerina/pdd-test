import React from 'react';
import FormInputName from '../FormInputName/FormInputName.jsx';
import { sessionSaver } from '../../SessionSaver.js';
import getTickets from '../../utils/getTickets.js';
import SuggestedAnswers from '../SuggestedAnswers/SuggestedAnswers.jsx';
import './TestTrafficLaws.css';
import Result from '../Result/Result.jsx';
import getImageSrc from '../../utils/getImage.js';
import { countOfQuestions } from '../../settings/settings.js';

export default class TestTrafficLaws extends React.Component {
  state = {
    isSubmitted: false,
    tickets: [],
    indexOfTicket: 0,
    wrongAnswers: [],
    isTestEnded: false,
  }

  componentDidMount() {
    const tickets = getTickets();
    this.setState({ tickets });
  }

  handleSubmit = (value) => {
    sessionSaver.setUserName(value);
    this.setState({ isSubmitted: true });
  }

  selectAnswer = (indexOfUserAnswer) => {
    const { indexOfTicket } = this.state;
    const nextTicket = indexOfTicket + 1;
    const userAnswer = indexOfUserAnswer + 1;

    /* if number of next question is not more than count of question,
    change ticket(question) at test to next
    */
    if (nextTicket < countOfQuestions) {
      this.setState({ indexOfTicket: nextTicket });
    } else this.setState({ isTestEnded: true });

    this.checkUserAnswer(userAnswer, indexOfTicket);
  }

  checkUserAnswer = (userAnswer, indexOfTicket) => {
    const { tickets, wrongAnswers } = this.state;
    const ticket = tickets[indexOfTicket];
    const trueAnswer = Number(ticket.correct);

    if (trueAnswer !== userAnswer) {
      /* if userAnswer is wrong, add block with wrong answer includes
      number of ticket, answer from user and true answer.
      further for convenient processing in the results
     */
      this.setState({
        wrongAnswers: [...wrongAnswers, {
          ticketNumber: indexOfTicket,
          userAnswer: ticket.answers[userAnswer - 1],
          correct: ticket.answers[trueAnswer - 1],
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
  tryTestAgain = () => {
    const tickets = getTickets();
    this.setState({ tickets, indexOfTicket: 0, wrongAnswers: [], isTestEnded: false });
  }

  renderTest = () => {
    const { tickets, indexOfTicket, wrongAnswers, isTestEnded } = this.state;
    const ticket = tickets[indexOfTicket];
    const numberOfQuestion = indexOfTicket + 1;

    return (
      isTestEnded
      ? (
        <Result
            wrongAnswers={wrongAnswers}
            startTest={this.tryTestAgain}
            tickets={tickets}
        />
      ) : (
      <div className="container margin-top-50">
        {this.getImage()}
        <p>
          <span>
            {`${numberOfQuestion} `}
          </span>
          <span>
            из {countOfQuestions}
          </span>
        </p>
        <h2>
          {ticket.title}
        </h2>
        <div>
          <SuggestedAnswers
            answers={ticket.answers}
            selectAnswer={this.selectAnswer}
            hint={ticket.hint}
          />
        </div>
      </div>
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
