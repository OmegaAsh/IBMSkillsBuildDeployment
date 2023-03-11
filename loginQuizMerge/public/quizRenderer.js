var startBtn = document.querySelector(".start-btn"),
  nextBtn = document.querySelector(".next-btn"),
  questionElement = document.querySelector(".question"),
  answersContainer = document.querySelector(".q-container"),
  quizTitleElement = document.querySelector(".quiz-title"),
  correctCount = document.querySelector(".correct-count");

returnBtn = document.querySelector(".return-btn");
let currentQuestion = 0;
let randomList = [];
let correct = 0;

// import { email } from `login.js`;
let email = sessionStorage.getItem("email") || null;

async function sendRequest(url, options = undefined) {
  let response = {};
  try {
    if (options === undefined) {
      response = displayErrorOrPass(await fetch(url));
    } else {
      response = displayErrorOrPass(await fetch(url, options));
    }
  } catch (exception) {
    if (exception.name === "TypeError") {
      displayNetworkError();
    }
    alert(exception);
    return false;
  }
  return response;
}
function displayErrorOrPass(response) {
	if (response.ok === false) {
	    let title = "";
	    let message = "";
	    if (response.status === 400) {
			title = "Malformed request";
		    message = "One or more of the fields in your request was invalid. Make sure no fields are left empty.";
	    } else if (response.status === 404) {
		    title = "Resource does not exist";
		    message = "The resource with the ID you requested does not exist. Make sure that the ID is correct.";
	    } else if (response.status === 500) {
		    title = "Internal server error";
		    message = "An error has occurred due to an internal fault. This is likely unrelated to your request.";
	    } else {
		    title = "Unknown error";
		    message = "An unknown error has occured. Please try again later.";
	    }
	    alert(title + ": " + message);
 
		return false;
	} else {
		return response;
	}
}

function displayNetworkError() {
	alert("Server disconnected");
}

function startQuiz() {
  startBtn.classList.add("hide");
  returnBtn.classList.add("hide");
  nextBtn.classList.remove("hide");
  questionElement.classList.remove("hide");
  answersContainer.classList.remove("hide");
  correctCount.classList.remove("hide");
  randomList = [];
  quizTitleElement.innerHTML = quizData.title;
  /**generates 5 unique random indexes from 0 to 9 */

  while (randomList.length < 5) {
    rand = Math.floor(Math.random() * 10);
    if (!randomList.includes(rand)) {
      randomList.push(rand);
    }
  }
  loadQuestion(randomList[currentQuestion]);
}

async function loadQuestion(questionNum) {
  if (currentQuestion === randomList.length) {
    /** if correct is more or equal to 3, pass and award tokens, amount of tokens */
    /** being the amount of questions the user got correct. */
    if (correct >= 3) {
      /**award tokens to user */
      /**print congrats pass and amount of tokens earned on screen */
      /**and also new token balance. */
      returnBtn.classList.remove("hide");
      nextBtn.classList.add("hide");
      questionElement.classList.add("hide");
      answersContainer.classList.add("hide");
      quizTitleElement.innerHTML = `Congrats! You passed and earned ${correct} tokens!`;

      const options = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };

      const userBoom = await fetch(`https://ibm-skills-build-quiz.onrender.com/getRecord?email=${email}`,options);
      const userInfo = await userBoom.json();

      let course = 0;
      if (userInfo === 404) {
        alert('User not found.');
      } else {
        if (quizData.title === "Artificial Intelligence") {
          userInfo.aiComplete = correct;
          course = "AI";
        } else if (quizData.title === "IBM Cloud") {
          userInfo.cloudComplete = correct;
          course = "CLOUD";
          
        } else if (quizData.title === "Data Science") {
          userInfo.dsComplete = correct;
          course = "DS";

        } else if (quizData.title === "Engineering") {
          userInfo.engiComplete = correct;
          course = "ENGI";

        } else if (quizData.title === "Quantum") {
          userInfo.quantumComplete = correct;
          course = "QTM";

        } else if (quizData.title === "Cyber Security") {
          userInfo.securityComplete = correct;
          course = "SEC";

        }
  
        
  
        const options2 = {
          method: "POST",
          body: JSON.stringify(userInfo),
          headers: { "Content-Type": "application/json" },
        };
        const update_Response = await sendRequest(
          "https://ibm-skills-build-quiz.onrender.com/updateScore",
          options2
        );
        
        const updateResp = await update_Response.json();
  
        if (updateResp['status'] === 'complete') {
          
          emailCourse = {"email" : email, "course": course}
          const options3 = {
            method: "POST",
            body: JSON.stringify(emailCourse),
            headers: { "Content-Type": "application/json" },
          };
          const resp = await sendRequest("https://ibm-skills-build-quiz.onrender.com/sendEmail", options3)

          if (resp === "success") {
            alert('Course link has been sent to your email.');
          } else if (resp === "error") {
            console.log("error sending email")
          } else {
            console.log("server error.");
          }

        } else if (updateResp['status'] === 'failed') {
          alert('There has been an error updating your record.');
        } else {
          alert('Server Error.');
        }
      }
    }



       else {
      /**print fail on the screen */
      startBtn.classList.remove("hide");
      returnBtn.classList.remove("hide");
      nextBtn.classList.add("hide");
      questionElement.classList.add("hide");
      answersContainer.classList.add("hide");
      startBtn.innerHTML = `Restart`;
      quizTitleElement.innerHTML = `Sorry, you lost! Need at least 3 to pass, try again!`;
    }

    correctCount.innerHTML = `Correct: ${correct}/5`;
    correct = 0;
    currentQuestion = 0;
    randomList = [];
  } else {
    while (answersContainer.firstChild) {
      answersContainer.removeChild(answersContainer.firstChild);
    }
    answersContainer.dataset.type = null;
    questionElement.innerHTML = questions[questionNum].text;

    // Question types

    if (questions[questionNum].type === "mc") {
      var btnGrid = document.createElement("div");
      answersContainer.appendChild(btnGrid);
      questions[questionNum].answers.forEach((answer) => {
        var answerElement = document.createElement("button");
        btnGrid.classList.add("btn-grid");
        answerElement.innerHTML = answer.text;
        answerElement.dataset.correct = answer.correct;
        answerElement.addEventListener("click", (e) => {
          Array.from(btnGrid.children).forEach(
            (element) => (element.disabled = true)
          );
          e.target.dataset.clicked = "true";
          checkAnswer();
        });
        btnGrid.appendChild(answerElement);
      });
      answersContainer.dataset.type = "mc";
    } else if (questions[questionNum].type === "txt") {
      var inputElement = document.createElement("input");
      var checkBtn = document.createElement("button");
      checkBtn.innerHTML = "Check";
      checkBtn.classList.add("check-btn");
      inputElement.type = "text";
      checkBtn.addEventListener("click", (e) => {
        checkAnswer();
      });
      answersContainer.appendChild(inputElement);
      answersContainer.appendChild(checkBtn);
      answersContainer.dataset.type = "txt";
    }

    //End types

    correctCount.innerHTML = `Correct: ${correct}`;
  }
}

function checkAnswer() {
  // Check different types

  switch (answersContainer.dataset.type) {
    case "mc":
      Array.from(answersContainer.children[0].children).forEach((button) => {
        if (button.dataset.correct === "true") {
          button.classList.add("correct");
          if (
            button.dataset.correct === "true" &&
            button.dataset.clicked === "true"
          ) {
            correct++;
          }
        } else {
          button.classList.add("wrong");
        }
      });
      currentQuestion++;
      break;

    case "txt":
      var qInputElement = answersContainer.children[0];
      var foundValues = questions[currentQuestion].answers.find(
        (answer) => answer.toUpperCase() === qInputElement.value.toUpperCase()
      );
      if (foundValues) {
        qInputElement.classList.add("correct");
        correct++;
      } else {
        qInputElement.classList.add("wrong");
      }
      currentQuestion++;
      break;

    default:
      return;
      break;
  }

  //End different types
}

window.addEventListener("load", () => {
  quizTitleElement.innerHTML = quizData.title;
});

startBtn.addEventListener("click", () => {
  startQuiz();
});

returnBtn.addEventListener("click", () => {
  window.location = `/quizSelection?email=${email}`;
});

nextBtn.addEventListener("click", () => {
  loadQuestion(randomList[currentQuestion]);
});