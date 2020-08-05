import React from 'react';
import FormInputName from '../FormInputName/FormInputName.jsx';
import pddData from '../../pddData/questions.json';
import { sessionSaver } from '../../SessionSaver.js';
import getTickets from '../../utils/getTickets.js';
import Answers from './Answers.jsx';
import './Quiz.css';
import Result from './Result.jsx';

export default class Quiz extends React.Component {
  state = {
    isSubmitted: false,
    tickets: [],
    indexOfTicket: 0,
    falseAnswers: [],
  }

  componentDidMount() {
    const tickets = getTickets(pddData);
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
    this.checkAnswer(Number(answer) + 1, indexOfTicket);
  }

  checkAnswer = (answerNumber, indexOfTicket) => {
    const { tickets, falseAnswers } = this.state;
    const trueAnswer = tickets[indexOfTicket].correct;
    if (Number(trueAnswer) !== answerNumber) {
      this.setState({ falseAnswers: falseAnswers.concat(indexOfTicket)})
    }
  }

  renderQuiz = () => {
    const { tickets, indexOfTicket, falseAnswers } = this.state;
    return (
      indexOfTicket < 19
        ? (
            <div className="container margin-top-50">
              <h2>
                {tickets[indexOfTicket].title}
              </h2>
              <ul className="list-group">
                <Answers answers={tickets[indexOfTicket].answers} chooseAnswer={this.chooseAnswer} />
              </ul>
            </div>
        ) : <Result falseAnswers={falseAnswers} />
    );
  }

  render() {
    const { isSubmitted } = this.state;
    return (
      isSubmitted
        ? this.renderQuiz()  : <FormInputName onSubmit={this.handleSubmit} />
    );
  }
}