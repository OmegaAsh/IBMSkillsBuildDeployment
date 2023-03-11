const quizData = {
    title: "Artificial Intelligence"
  };
  

  const questions = [
    {
      
  text: "AI is incorporated into a variety of different types of technology. Here are some of the examples EXCEPT",
  type: "mc",    
  answers: [
        {text: "Automation", correct: false },
        {text: "Machine vision", correct: true },
        {text: "SIRI", correct: false },
        {text: "Natural language processing", correct: false },
      ],
    },
    {
      text: "Which one of these is not an area of AI?",
      type: "mc",
      answers: [
        {text: "computer vision/image recognition", correct: true },
        {text: "Voice recognition", correct: false },
        {text: "Web design", correct: false },
        {text: "Robotics", correct: false },
      ],
    },
    {
      text: "Which of these does NOT use machine learning/AI?",
      type: "mc",
      answers: [
        {text: "Driverless cars", correct: true },
        {text: "SIRI/Alexa", correct: false },
        {text: "Sonos wireless speakers", correct: false },
        {text: "Facial recognition on your phone", correct: false },
      ],
    },
    {
      text: "Artificial Intelligence is the process that allows computers to learn and make decisions like humans",
      type: "mc",
      answers: [
        {text: "True", correct: false },
        {text: "False", correct: true },
      ],
    },
    {
      text: "Blind Search can be used for which of the following situations?",
      type: "mc",
      answers: [
        {text: "Real-life simulation", correct: false },
        {text: "Small search space", correct: true },
        {text: "Advanced game theory", correct: false },
        {text: "None of the above", correct: false },
      ],
    },
    {
      text: "Which of the following is the common language for Artificial Intelligence?",
      type: "mc",
      answers: [
        {text: "Python", correct: true },
        {text: "Java", correct: false },
        {text: "Lisp", correct: false },
        {text: "PHP", correct: false },
      ],
    },
    {
      text: "Which of the following symbols in AI are logical symbols?",
      type: "mc",
      answers: [
        {text: "Negation", correct: false },
        {text: "Conjunction", correct: false },
        {text: "Implication", correct: false },
        {text: "All of the above", correct: true },
      ],
    },
    {
      text: "How many types of recognition are there in AI?",
      type: "mc",
      answers: [
        {text: "5", correct: false },
        {text: "3", correct: true },
        {text: "2", correct: false },
        {text: "1", correct: false },
      ],
    },
    {
      text: "What are the different types of Artificial Intelligence approaches?",
      type: "mc",
      answers: [
        {text: "Strong approach", correct: false },
        {text: "Weak approach", correct: false },
        {text: "Applied approach", correct: false },
        {text: "All of the above", correct: true },
      ],
    },
    {
      text: "How does an AI agent interacts with its environment?",
      type: "mc",
      answers: [
        {text: "Using sesnsors and perceivers", correct: true },
        {text: "Using only sensors", correct: false },
        {text: "Using only perceivers", correct: false },
        {text: "None of the above", correct: false },
      ],
    }];

  try{
    module.exports = { quizData, questions };
  } catch (error) {
  }
