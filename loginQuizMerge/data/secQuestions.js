const quizData = {
    title: "Cyber Security"
  };
  

  const questions = [
    {
        text: "Which of the following examples best illustrates a cyber threat?",
        type: "mc",
        answers: [
          {text: "A friend uses your Netflix login information without your knowledge", correct: false },
          {text: "You receive an email from an unknown account asking you to click on a link to claim a prize. ", correct: true },
          {text: "Using a predictable password", correct: false },
          {text: "All of the above", correct: false },
        ],
    },
    {
        text: "Based on the IBM X-Force report “The shifting panorama of global cybercrime”, what is the biggest motivation for cybercriminals to attack companies around the world?",
        type: "mc",
        answers: [
          {text: "Terrorism", correct: false },
          {text: "Hacktivism", correct: false },
          {text: "Financial gain", correct: true },
          {text: "Espionage", correct: false },
        ],
    },
    {
        text: "The use of a cyber-attack for research purposes, such as probing potential vulnerabilities within a company’s network or conducting penetration testing, is known as:",
        type: "mc",
        answers: [
          {text: "Code red hacking", correct: false },
          {text: "Hacktivism", correct: false },
          {text: "white hat hacking", correct: true },
          {text: "Benign hacking", correct: false },
        ],
    },
    {
        text: "Which of the following motivators explain why cyber criminals carry out cyber-attacks?",
        type: "mc",
        answers: [
          {text: "Financial gain", correct: false },
          {text: "Hacktivism", correct: false },
          {text: "Espionage", correct: false },
          {text: "All of the above", correct: true },
        ],
      },
      {
        text: "What is true about misconfiguration as one of the most challenging types of cyber threats?",
        type: "mc",
        answers: [
          {text: "Incidents where attackers gain access to vulnerable systems left exposed by inexperienced administrators or users ", correct: true },
          {text: "Employees and insiders falling for phishing emails that resulted in account takeover or access to sensitive data.", correct: false },
          {text: "Misconfiguration is when your password is changed", correct: false },
          {text: "All of the above", correct: false },
        ],
      },
      {
        text: "Why is it important to create an integrated security domain system?",
        type: "mc",
        answers: [
          {text: "Because it involves the partner ecosystem that allows collaboration across companies and competitors, to understand global threats and data, and adapt to new threats", correct: true },
          {text: "Costly and complex fragmented security capabilities provide the visibility and coordination needed to stop today’s sophisticated attacks.", correct: false },
          {text: "The security portfolio structured around domains presents a less organized fashion to make sense of threats using logs, data, threats, flows, packets, etc.", correct: false },
          {text: "Because the traditional defense strategy is not to layer on another point-product tool or technology to an already fragmented and disjointed IT environment.", correct: false },
        ],
      },
      {
        text: "What type of cyber-attack involves causing a system to partially crash and be unable to perform work at normal levels?",
        type: "mc",
        answers: [
          {text: "Spear phishing attack", correct: false },
          {text: "Credential stuffing attack", correct: false },
          {text: "Denial of service attack ", correct: true },
          {text: "Man in the middle attack", correct: false },
        ],
      },
      {
        text: "What type of cyber-attack involves sending an email to an individual that appears to be from a trusted source, but instead has the intention of getting personal information, such as a password.",
        type: "mc",
        answers: [
          {text: "Structure query language injection", correct: false },
          {text: "Man in the middle attack", correct: false },
          {text: "Domain name system attack", correct: false },
          {text: "Phishing attack ", correct: true },
        ],
      },
      {
        text: "What is the chief weapon of a cyber attacker?",
        type: "mc",
        answers: [
          {text: "SQLi", correct: false },
          {text: "Brute force", correct: false },
          {text: "Malware", correct: true },
          {text: "Physical Access", correct: false },
        ],
      },
      {
        text: "Why are cyber-attacks significant for established companies?",
        type: "mc",
        answers: [
          {text: "The cost to businesses from cyber-attacks and their consequences, such as data breaches, are always affordable but exposes the company to internal inefficiencies which causes delays.", correct: false },
          {text: "Enhances the brand reputation and increases customer loyalty.", correct: false },
          {text: "Invites regulatory penalties", correct: true },
          {text: "All of the above", correct: false },
        ],
      },
    ];


try{
    module.exports = { quizData, questions };
  } catch (error) {
  }