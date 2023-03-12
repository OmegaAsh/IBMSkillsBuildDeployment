const quizData = {
  title: "Quantum Computing"
};


const questions = [
  {
      text: "What is not true about qubits?",
      type: "mc",
      answers: [
        {text: "Short for quantum bit", correct: false },
        {text: "Physical carrier of quantum information", correct: false },
        {text: "Its quantum state can be written in 2-D vectors", correct: false },
        {text: "One qubit can take the value of 4 bits ", correct: true },
      ],
  },
  {
      text: "What materials is a physical type of qubit made from?",
      type: "mc",
      answers: [
        {text: "Niobium", correct: false },
        {text: "Aluminium", correct: false },
        {text: "Silicon substrate", correct: false },
        {text: "All of the above ", correct: true },
      ],
  },
  {
      text: "What does the h in the E=hf stand for?",
      type: "mc",
      answers: [
        {text: "Planck’s constant ", correct: true },
        {text: "Boltzmann’s constant", correct: false },
        {text: "Herbert’s constant", correct: false },
        {text: "Einstein’s constant", correct: false },
      ],
  },
  {
      text: "What frequency is a qubit targeted to be around?",
      type: "mc",
      answers: [
        {text: "5 GHz", correct: true },
        {text: "5 MHz", correct: false },
        {text: "3 GHz", correct: false },
        {text: "5 Hz", correct: false },
      ],
    },
    {
      text: "What is the simplest logic gate?",
      type: "mc",
      answers: [
        {text: "NOT", correct: true },
        {text: "XOR", correct: false },
        {text: "OR", correct: false },
        {text: "AND", correct: false },
      ],
    },
    {
      text: "What does the NOT gate do?",
      type: "mc",
      answers: [
        {text: "Flips the 0 to a 1 or vice versa ", correct: true },
        {text: "Adds two bits together", correct: false },
        {text: "Chooses one bit or the other", correct: false },
        {text: "Combines two bits together", correct: false },
      ],
    },
    {
      text: "Why is Quantum computing important?",
      type: "mc",
      answers: [
        {text: "To solve complex problems", correct: false },
        {text: "It’s computation power also scales exponentially as system size grows", correct: false },
        {text: "Many problems can’t be solved on classical computer", correct: false },
        {text: "All of the above ", correct: true },
      ],
    },
    {
      text: "Why is it important to keep the temperature cold in an IBM Quantum lab?",
      type: "mc",
      answers: [
        {text: "To minimize ambient noise or heat that could excite superconducting qubit ", correct: true },
        {text: "To save energy bills", correct: false },
        {text: "So that the qubit does not react with any elements in the lab", correct: false },
        {text: "Qubits can only exist in cold temperatures", correct: false },
      ],
    },
    {
      text: "What is an entangled state?",
      type: "mc",
      answers: [
        {text: "States of a whole computer that do not correspond to any assignment of states of the individual qubits ", correct: true },
        {text: "The process of untangling a knot", correct: false },
        {text: "A type of physical deformation that occurs in metals", correct: false },
        {text: "A term used in computer science to describe a type of software error", correct: false },
      ],
    },
    {
      text: "When was it discovered that quantum theory applies to bits and logic operations in a computer?",
      type: "mc",
      answers: [
        {text: "Late 20th century", correct: true },
        {text: "Late 19th century", correct: false },
        {text: "Early 20th century", correct: false },
        {text: "Early 21st century", correct: false },
      ],
    },
  ];
    try{
      module.exports = { quizData, questions };
    } catch (error) {
    }