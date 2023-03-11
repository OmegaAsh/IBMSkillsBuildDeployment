const quizData = {
    title: "Cyber Security"
};

const questions = [
    {
        text: "In which of the following, a person is constantly followed/chased by another person or group of several peoples?",
        type: "mc",
        answers: [
            { text: "Phishing", correct: false },
            { text: "Bulling", correct: false },
            { text: "Stalking", correct: true },
            { text: "Identity theft", correct: false },
        ],
    },
    {
        text: "Which one of the following can be considered as the class of computer threats?",
        type: "mc",
        answers: [
            { text: "Dos attack", correct: true },
            { text: "Phishing", correct: false },
            { text: "Soliciting", correct: false },
            { text: "Both A and C", correct: false },
        ],
    },
    {
        text: "Which of the following is considered as the unsolicited commercial email?",
        type: "mc",
        answers: [
            { text: "Virus", correct: false },
            { text: "Malware", correct: false },
            { text: "Spam", correct: true },
            { text: "All of the above", correct: false },
        ],
    },
    {
        text: "Which of the following usually observe each activity on the internet of the victim, gather all information in the background, and send it to someone else?",
        type: "mc",
        answers: [
            { text: "Malware", correct: false },
            { text: "Spyware", correct: true },
            { text: "Adware", correct: false },
            { text: "All of the above", correct: false },
        ],
    },
    {
        text: "Which of the following refers to stealing one's idea or invention of others and use it for their own benefits?",
        type: "mc",
        answers: [
            { text: "Piracy", correct: false },
            { text: "Plagiarism", correct: false },
            { text: "Intellectual property rights", correct: false },
            { text: "All of the above", correct: true },
        ],
    },
    {
        text: "Which one of the following refers to the technique used for verifying the integrity of the message?",
        type: "mc",
        answers: [
            { text: "Digital signature", correct: false },
            { text: "Decryption algorithm", correct: false },
            { text: "Protocol", correct: false },
            { text: "Message digest", correct: true },
        ],
    },
    {
        text: "Which of the following is not a type of scanning?",
        type: "mc",
        answers: [
            { text: "Xmas tree scan", correct: false },
            { text: "Cloud scan", correct: true },
            { text: "Null scan", correct: false },
            { text: "SYN stealth", correct: false },
        ],
    },
    {
        text: "In system hacking, which of the following is the most crucial activity?",
        type: "mc",
        answers: [
            { text: "Information gathering", correct: false },
            { text: "Covering tracks", correct: false },
            { text: "Cracking passwords", correct: true },
            { text: "None of the above", correct: false },
        ],
    },
    {
        text: "The response time and transit time is used to measure the ____________ of a network",
        type: "mc",
        answers: [
            { text: "Security", correct: true },
            { text: "Longevity", correct: false },
            { text: "Reliability", correct: false },
            { text: "Performance", correct: false },
        ],
    },
    {
        text: "Which of the following factor of the network gets hugely impacted when the number of users exceeds the network's limit?",
        type: "mc",
        answers: [
            { text: "Reliability", correct: false },
            { text: "Performance", correct: false },
            { text: "Security", correct: false },
            { text: "Longevity", correct: true },
        ],
    }
];

module.exports = { quizData, questions };