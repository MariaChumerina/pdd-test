function getRandomNumber(leftBorder = 1, rightBorder = 2) {
  return Math.floor((Math.random() * (rightBorder - leftBorder)) + leftBorder);
}

function getArrayRandomNumbers(numbersCount, from, to) {
  const randomNumbers = [];
  while (randomNumbers.length < numbersCount) {
    const randomNumber = getRandomNumber(from, to);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
}

export default function getTickets(data) {
  const numbersOfSections = getArrayRandomNumbers(20, 0, data.length);
  return numbersOfSections.map((number) => {
    const section = data[number];
    const randomTicket = getRandomNumber(1, section.tickets.length);
    return section.tickets[randomTicket];
  });
}
