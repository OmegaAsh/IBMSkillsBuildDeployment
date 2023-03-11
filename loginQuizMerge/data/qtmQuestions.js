const quizData = {
    title: "Quantum"
  };

  const questions = [
    {
      text: "What do we call the pieces of information in a quantum computer?",
      type: "mc",
      answers: [
        {text: "Bits", correct: false },
        {text: "Bytes", correct: false },
        {text: "Qubits", correct: true },
        {text: "Qubytes", correct: false },
      ],
    },
    {
      text: "When the information is between 0 and 1 in a quantum computer, what do we call this?",
      type: "mc",
      answers: [
        {text: "Same position", correct: false },
        {text: "Different position", correct: false },
        {text: "Superposition", correct: true },
        {text: "Ordinary position", correct: false },
      ],
    },
    {
      text: "Quantum computers are very good at dealing with ...",
      type: "mc",
      answers: [
        {text: "Certainity", correct: false },
        {text: "Uncertainty", correct: true },
        {text: "Reliability", correct: false },
        {text: "Clarity", correct: false },
      ],
    },
    {
      text: "What does entanglement mean?",
      type: "mc",
      answers: [
        {text: "Two particles are connected", correct: true },
        {text: "Two particles are separate", correct: false },
        {text: "Two particles are different", correct: false },
        {text: "Two particles are independent", correct: false },
      ],
    },
    {
      text: "True of false: Quantum encryption keys can be hacked and broken into.",
      type: "mc",
      answers: [
        {text: "False", correct: true },
        {text: "True", correct: false },
      ],
    },
    {
      text: "Which company has a quantum computer that we can use through their website?",
      type: "mc",
      answers: [
        {text: "Microsoft", correct: false },
        {text: "IBM", correct: true },
        {text: "Apple", correct: false },
        {text: "Google", correct: false },
      ],
    },
    {
      text: "True or False. Quantum computers are powerful, but not reliable yet.",
      type: "mc",
      answers: [
        {text: "True", correct: true },
        {text: "False", correct: false },
      ],
    },
    {
      text: "In which year first quantum computer (2-qubit) was created?",
      type: "mc",
      answers: [
        {text: "1998", correct: true },
        {text: "2000", correct: false },
        {text: "2001", correct: false },
        {text: "2003", correct: false },
      ],
    },
    {
      text: "Who is the father of quantum computing?",
      type: "mc",
      answers: [
        {text: "Isaac Chuang", correct: false },
        {text: "Neil Gershenfeld", correct: false },
        {text: "Philip Glass", correct: false },
        {text: "David Deutsch", correct: true },
      ],
    },
    {
      text: "Generation of computers powered by levers and gears.",
      type: "mc",
      answers: [
        {text: "First Gen", correct: false },
        {text: "Pre Gen", correct: true },
        {text: "Second Gen", correct: false },
        {text: "All of the above", correct: false },
      ],
    }];

    try{
      module.exports = { quizData, questions };
    } catch (error) {
    }