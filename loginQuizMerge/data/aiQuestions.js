const quizData = {
  title: "Artificial Intelligence"
};


const questions = [
  {
      text: "Which of the following is true about bias in AI systems?",
      type: "mc",
      answers: [
        {text: "Bias in AI systems is always the result of race", correct: false },
        {text: "Unwanted bias is a systematic error in AI systems that may result in unfair outcomes", correct: true },
        {text: "All bias in AI systems results in unfair outcomes", correct: false },
        {text: "Bias always enters AI systems through the actions of bad actors", correct: false },
      ],
  },
  {
      text: "Which of the following pillars of AI is exemplified by anyone being able to describe how an AI system makes a prediction or recommendation?",
      type: "mc",
      answers: [
        {text: "Robustness", correct: false },
        {text: "Explainability" , correct: true },
        {text: "Transparency", correct: false },
        {text: "Privacy", correct: false },
      ],
  },
  {
      text: "Fair in AI aims to minimise which of the following?",
      type: "mc",
      answers: [
        {text: "Protected attributes", correct: false },
        {text: "Favourable outcomes", correct: false },
        {text: "Unwanted bias ", correct: true },
        {text: "Unfavourable prediction", correct: false },
      ],
  },
  {
      text: "The Turing test is designed to:",
      type: "mc",
      answers: [
        {text: "Determine machine’s human ability", correct: true },
        {text: "Achieve artificial general intelligence ", correct: false },
        {text: "Solve the master algorithm", correct: false },
        {text: "Build machines that are aware of themselves", correct: false },
      ],
    },
    {
      text: "The key difference between narrow intelligence and broad intelligence is best described by which of the following phrases?",
      type: "mc",
      answers: [
        {text: "Narrow and broad intelligence is distinguished by complexity of algorithm", correct: false },
        {text: "Broad intelligence requires huge amounts of data, whereas narrow intelligence relies on minimum data", correct: false },
        {text: "Narrow AI can only do a certain task – and it can do it quite well – but narrow AI can’t transfer its knowledge to different sorts of problems as with Broad AI", correct: true },
        {text: "Broad intelligence can extract meaning from images, whereas Narrow Intelligence is best suited for language processing", correct: false },
      ],
    },
    {
      text: "Which of the following best depict General AI?",
      type: "mc",
      answers: [
        {text: "A chatbot that is also connected to Tone Analyzer", correct: false },
        {text: "Watson Machine Learning service", correct: false },
        {text: "The ability to use previous experience to come up with new creative ", correct: true },
        {text: "A system that is self-aware", correct: false },
      ],
    },
    {
      text: "Human experts could use AI expertise to address which of the follow challenges?",
      type: "mc",
      answers: [
        {text: "AI scales expertise to expand what is possible ", correct: true },
        {text: "AI systems have better vision", correct: false },
        {text: "AI systems can predict our preferences", correct: false },
        {text: "AI systems have world knowledge", correct: false },
      ],
    },
    {
      text: "Which of the following best describes the difference between AI, Machine Learning and Deep Learning?",
      type: "mc",
      answers: [
        {text: "Each level is differentiated by specific algorithms that power the system", correct: false },
        {text: "They are synonyms for the same approach for the field of artificial intelligence", correct: false },
        {text: "Deep Learning is a subset of Machine Learning, which in turn is a subset of artificial intelligence ", correct: true },
        {text: "Machine learning is a subset of Deep Learning, which in turn is a subset of artificial intelligence", correct: false },
      ],
    },
    {
      text: "Which of the following learning methods is predominantly used with self-driving cars?",
      type: "mc",
      answers: [
        {text: "Supervised learning", correct: false },
        {text: "Unsupervised learning", correct: false },
        {text: "Reinforcement learning ", correct: true },
        {text: "None of the above because self-driving cars use Broad AI", correct: false },
      ],
    },
    {
      text: "Natural language processing is needed when you wish to mine _______ data and extract meaningful insight from text.",
      type: "mc",
      answers: [
        {text: "Unstructured", correct: true },
        {text: "Structured", correct: false },
        {text: "Relational", correct: false },
        {text: "Formatted", correct: false },
      ],
    },
  ];


module.exports = { quizData, questions };
  try{
    module.exports = { quizData, questions };
  } catch (error) {
  }
