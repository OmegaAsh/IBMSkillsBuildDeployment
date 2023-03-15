// Functions for error handling
// Displays an error dialog if an error occurs, or passes the response onward
var email;
var psw;
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
 
 // Wrapper around the fetch function to allow for error handling
async function sendRequest(url, options=undefined) {
	let response = {};
	try {
	    if (options === undefined) {
			response = displayErrorOrPass(await fetch(url));
	    } else {
			response = displayErrorOrPass(await fetch(url, options));
	    }
	} catch(exception) {
	    if (exception.name === "TypeError") {
			displayNetworkError();
		}
	    return false;
	}
	return response;
}

// toggle overlay
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

		


if (signUpButton) {
	signUpButton.addEventListener('click', () => {
		container.classList.add("right-panel-active");
	});
}
	


if (signInButton) {
	signInButton.addEventListener('click', () => {
		container.classList.remove("right-panel-active");
})};


//password visibility
function pswVis() {
	var x = document.getElementById("psw");
	var y = document.getElementById("cpsw");
	if (x.type === "password") {
		x.type = "text";
		y.type = "text";
	} else {
	  x.type = "password";
	  y.type = "password";
	}
  }


// input handling

// Sign up Form

const signupInfo = document.getElementById("signupInfo");

if (signupInfo) {
	const signupInfo = document.getElementById("signupInfo");
	signupInfo.addEventListener('submit', async function (event) {
	event.preventDefault();
	// check if passwords match
	const psw = document.getElementById("psw");
	const cpsw = document.getElementById("cpsw");
	if (psw.value !== cpsw.value) {
		alert("Passwords do not match");
		signupInfo.reset();
		return
	}

	
	
	// toggle modal form when submit button is clicked
	var modal = document.getElementById("modalSignup");	

	if (modal) {
		modal.style.display = "block";
	
	const signupUpdate = document.getElementById("signupUpdate");

	if (signupUpdate) {
		signupUpdate.addEventListener("submit", async function (event) {
			event.preventDefault();
	
			const params = {
				"name" : document.getElementById("name").value,
				"email" : document.getElementById("email").value,
				"psw" : document.getElementById("psw").value,
				"course" : document.getElementById("course").value,
				"year" : document.getElementById("year").value,
				"interest" : document.getElementById("interest").value,
			};
			const options = {
				method: 'POST',
				body: JSON.stringify(params),
				headers: { 'Content-Type': 'application/json' }
			};
	
			const new_user_resp = await sendRequest("https://ibm-skills-build-quiz-7z0i.onrender.com/newUser", options);
			const new_user = await new_user_resp.json();
	
			// check user data is handled correctly, if not ask user to retry
			if (new_user) {
				if (new_user["status"] === "verified") {
					location.assign("/");
				}
				if (new_user["status"] === "duplicate") {
					alert("Email is already in use!");
					location.assign("/");
				}
				if (new_user["status"] === "error") {
					alert("Unable to create your account at the current time. Please try again later");
					location.assign("/");
				}
			}
		})
	}
	
	}

	
})};

	
	






// Sign in Form


const loginInfo = document.getElementById("signinInfo");
if (loginInfo) {
	loginInfo.addEventListener("submit", async function (event) {
		event.preventDefault();
		const username = document.getElementById("username").value;
		const password = document.getElementById("password").value;
		email = username;
	
		sessionStorage.setItem("email",email);
		sessionStorage.setItem("psw", password);
		
		const login = {
			"email": username,
			"psw": password,
		}
	
		const options = {
			method: 'POST',
			body: JSON.stringify(login),
			headers: { 'Content-Type': 'application/json' }
		}
		const login_resp = await sendRequest("https://ibm-skills-build-quiz-7z0i.onrender.com/login", options);
	
		// Check response, if verified, redirect to homepage, else deny
		const verification = await login_resp.json();
		if (verification["status"] === "error") {
			alert("Account doesn't exist. Please sign up");
			location.assign("/");
		}
		if (verification["status"] === "nomatch") {
			alert("Email or password is incorrect. Try again");
			location.assign("/");
		}
		if (verification["status"] === "verified") {
			location.assign(`/quizSelection?email=${username}&psw=${password}`);			
	}})
}


// module.exports = { email };
