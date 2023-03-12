const quizData = {
    title: "Engineering"
  };
  

  const questions = [
    {
        text: "Which is not a key discipline of the engineering lifecycle?",
        type: "mc",
        answers: [
          {text: "Requirements management", correct: false },
          {text: "System and software modelling", correct: false },
          {text: "Workflow management", correct: false },
          {text: "Artificial intelligence ", correct: true },
        ],
      },
      {
        text: "What does ELM stand for?",
        type: "mc",
        answers: [
          {text: "Engineering lifecycle management ", correct: true },
          {text: "Engineering lifecycle machine", correct: false },
          {text: "Electronic lifecycle management", correct: false },
          {text: "Electronic lifecycle machine", correct: false },
        ],
      },
      {
        text: "What does ELM do?",
        type: "mc",
        answers: [
          {text: "Utilises AI and analytics to help teams design and develop software-intensive products and systems ", correct: true },
          {text: "Manage a board of engineers", correct: false },
          {text: "List of instructions and methodologies for engineers to follow", correct: false },
          {text: "Provides engineering strategy", correct: false },
        ],
      },
      {
        text: "Who famously said “Everyone designs who devises courses of action aimed at changing existing situations into preferred ones.” ",
        type: "mc",
        answers: [
          {text: "Herbert Simon ", correct: true },
          {text: "Albert Einstein", correct: false },
          {text: "Von Neumann", correct: false },
          {text: "Alan Turing", correct: false },
        ],
      },
      {
        text: "What is design thinking?",
        type: "mc",
        answers: [
          {text: "A problem solving approach that aims to improve people’s experiences.", correct: false },
          {text: "The process of becoming a designer", correct: false },
          {text: "The answer to everything", correct: false },
          {text: "All of the above ", correct: true },
        ],
      },
      {
        text: "Which of the below are included in The Principles of Enterprise Design Thinking?",
        type: "mc",
        answers: [
          {text: "Focus on user outcomes", correct: false },
          {text: "Restless reinvention", correct: false },
          {text: "Diverse empowered Team", correct: false },
          {text: "All of the above ", correct: true },
        ],
      },
      {
        text: "What makes Enterprise Design thinking different?",
        type: "mc",
        answers: [
          {text: "It’s more effective for enterprise teams and their problems ", correct: true },
          {text: "It was made for industrial designers", correct: false },
          {text: "There’s a course I can take to learn it", correct: false },
          {text: "It takes longer to complete", correct: false },
        ],
      },
      {
        text: "What’s the Loop?",
        type: "mc",
        answers: [
          {text: "An infinity sign because the possibilities are infinite", correct: false },
          {text: "A continuous cycle of observing, reflecting and making ", correct: true },
          {text: "A situation you want to avoid: repeating the same action over and over again", correct: false },
          {text: "Ensure you use loops in your code", correct: false },
        ],
      },
      {
        text: "Which are the Keys of Enterprise Design Thinking?",
        type: "mc",
        answers: [
          {text: "Speed bumps, Hills, Mountains", correct: false },
          {text: "Sponsor Users, Hills, Playbacks", correct: false },
          {text: "Share backs, Hills, Sponsored Clients ", correct: true },
          {text: "Users, Loops, AI", correct: false },
        ],
      },
    ];

try{
    module.exports = { quizData, questions };
    } catch (error) {
    } 