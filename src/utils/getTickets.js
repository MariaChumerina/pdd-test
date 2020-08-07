import TestTrafficLawsData from '../TestTrafficLawsData/questions.json';
import { countOfQuestions } from '../settings/settings.js';

function getRandomNumber(leftBorder = 1, rightBorder = 2) {
  return Math.floor((Math.random() * (rightBorder - leftBorder)) + leftBorder);
}

function getArrayRandomNumbers(numbersCount, from, to) {
  const randomNumbers = [];
  while (randomNumbers.length < numbersCount) {
    const randomNumber = getRandomNumber(from, to);
    // check that numbers not repeated
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

export default function getTickets() {
  // first get a random sections
  const numbersOfSections = getArrayRandomNumbers(countOfQuestions, 0, TestTrafficLawsData.length);
  // then select one ticket at each sections
  return numbersOfSections.map((number) => {
    const section = TestTrafficLawsData[number];
    const randomTicket = getRandomNumber(1, section.tickets.length);
    return section.tickets[randomTicket];
  });
}
