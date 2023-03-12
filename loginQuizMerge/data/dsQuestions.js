const quizData = {
  title: "Data Science"
};



const questions = [
  {
      text: "Which of the following is one of the most fundamental characteristics of a data scientist?",
      type: "mc",
      answers: [
        {text: "Being proficient in R or python", correct: false },
        {text: "Having a sense of curiosity about all things ", correct: true },
        {text: "Using open-source software libraries and packages", correct: false },
        {text: "Having a strong background in high power computing", correct: false },
      ],
  },
  {
      text: "The field of data science is the process of _______. Select which does not apply.",
      type: "mc",
      answers: [
        {text: "Preparing data for analysis and processing", correct: false },
        {text: "Working exclusively with spreadsheets and table ", correct: true },
        {text: "Performing advanced data analysis", correct: false },
        {text: "Visualising the results to reveal patterns", correct: false },
      ],
  },
  {
      text: "When thinking about the 5 main Vs of data, what does Veracity refer to?",
      type: "mc",
      answers: [
        {text: "Refers to the vast amounts of data generated every second", correct: false },
        {text: "Refers to the different types of data we can now use.", correct: false },
        {text: "Refers to the speed at which new data is generated and the speed at which data moves around", correct: false },
        {text: "Refers to the trustworthiness of the data ", correct: true },
      ],
  },
  {
      text: "Data in all of its forms, both structured and unstructured, would be the focus of which of the following 5 V’s of data?",
      type: "mc",
      answers: [
        {text: "Volume", correct: false },
        {text: "Velocity", correct: false },
        {text: "Variety", correct: true },
        {text: "Veracity", correct: false },
      ],
    },
    {
      text: "Which is an example of structure data?",
      type: "mc",
      answers: [
        {text: "CSV files ", correct: true },
        {text: "Facebook images", correct: false },
        {text: "Twitter feeds", correct: false },
        {text: "Instagram profiles", correct: false },
      ],
    },
    {
      text: "A data analyst is reviewing an Excel spreadsheet from an insurance company. The customer data that she is analyzing is sorted by name, home address, policy number, etc. What type of data is she most likely working with?",
      type: "mc",
      answers: [
        {text: "Structured data ", correct: true },
        {text: "Unstructured data", correct: false },
        {text: "Bilaterally structured data", correct: false },
        {text: "Unilaterally structured data", correct: false },
      ],
    },
    {
      text: "Which is not a domain of data science?",
      type: "mc",
      answers: [
        {text: "Technology", correct: false },
        {text: "Science", correct: false },
        {text: "Data", correct: false },
        {text: "Language", correct: true },
      ],
    },
    {
      text: "What is data science?",
      type: "mc",
      answers: [
        {text: "Study of the world through scientific analysis of digital data", correct: true },
        {text: "The study of how data is stored and managed in databases", correct: false },
        {text: "The application of artificial intelligence to create intelligent machines that can perform tasks without human intervention", correct: false },
        {text: "The process of creating and designing computer programs and applications", correct: false },
      ],
    },
    {
      text: "Which is not a critical role involved in a data science project?",
      type: "mc",
      answers: [
        {text: "Data scientists", correct: false },
        {text: "Data analysts", correct: false },
        {text: "Data engineers", correct: false },
        {text: "Data researchers", correct: true },
      ],
    },
    {
      text: "What type of data is on a driver's license that records a person's eye colour and hair colour?",
      type: "mc",
      answers: [
        {text: "Qualitative data ", correct: true },
        {text: "Quantative data", correct: false },
        {text: "Standard data", correct: false },
        {text: "Feature data", correct: false },
      ],
    },
  ];

try{
  module.exports = { quizData, questions };
} catch (error) {
}
