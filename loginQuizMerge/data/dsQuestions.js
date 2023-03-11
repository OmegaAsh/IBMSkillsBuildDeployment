const quizData = {
  title: "Data Science"
};

const questions = [
  {
    text: "Identify the language which is used in data science?",
    type: "mc",
    answers: [
      {text: "C++", correct: false },
      {text: "R", correct: false },
      {text: "Java", correct: false },
      {text: "Ruby", correct: true },
    ],
  },
  {
    text: "Choose the correct components of data science.",
    type: "mc",
    answers: [
      {text: "Domain expertise", correct: false },
      {text: "Data engineering", correct: false },
      {text: "Advanced computing", correct: false },
      {text: "All of above", correct: true },
    ],
  },
  {
    text: "Which of the following is not a part of the data science process?",
    type: "mc",
    answers: [
      {text: "Communication building", correct: true },
      {text: "Operationalise", correct: false },
      {text: "Model planning", correct: false },
      {text: "Discovery", correct: false },
    ],
  },
  {
    text: "Total groups in which data can be characterized is?      ",
    type: "mc",
    answers: [
      {text: "1", correct: false },
      {text: "2", correct: true },
      {text: "3", correct: false },
      {text: "4", correct: false },
    ],
  },
  {
    text: "A column is a  _________- representation of data",
    type: "mc",
    answers: [
      {text: "Diagonal", correct: false },
      {text: "Vertical", correct: true },
      {text: "Top", correct: false },
      {text: "Horizontal", correct: false },
    ],
  },
  {
    text: "Among the following identify the one in which dimensionality reduction reduces.",
    type: "mc",
    answers: [
      {text: "Performance", correct: false },
      {text: "Entropy", correct: false },
      {text: "Stochastics", correct: false },
      {text: "Collinearity", correct: true },
    ],
  },
  {
    text: "Decision tree cannot be used for clustering",
    type: "mc",
    answers: [
      {text: "True", correct: false },
      {text: "False", correct: true },
    ],
  },
  {
    text: "Which of the following architecture is also known as systolic arrays?",
    type: "mc",
    answers: [
      {text: "MISD", correct: true },
      {text: "SISD", correct: false },
      {text: "SIMD", correct: false },
      {text: "None of the above", correct: false },
    ],
  },
  {
    text: "Machines running LISP are also called?      ",
    type: "mc",
    answers: [
      {text: "AI workstations", correct: true },
      {text: "Time sharing terminals", correct: false },
      {text: "Both A and B", correct: false },
      {text: "None of the above", correct: false },
    ],
  },
  {
    text: "Identify the key data science skills among the following",
    type: "mc",
    answers: [
      {text: "Data visualisation", correct: false },
      {text: "Machine learning", correct: false },
      {text: "Statistics", correct: false },
      {text: "All of the above", correct: true },
    ],
  }
  
];

module.exports = { quizData, questions };
