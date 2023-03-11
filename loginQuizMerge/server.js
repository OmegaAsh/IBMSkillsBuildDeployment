const express = require("express");
const app = express();
const { createHash } = require("crypto");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const fs = require("fs");
const cors = require("cors");

var jsonParser = bodyParser.json()



app.set("view engine", "ejs");
app.use(cors());
app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));
app.use("/data", express.static(__dirname + "/data"));

mongoose.connect('mongodb+srv://user01:IBMWebJournal30@ibmwebjournal.koxrqnt.mongodb.net/?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: 'This email is already in use.',
    required: true,
  },
  psw: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  interest: {
    type: String,
    required: true,
  },
  aiComplete: {
    type: Number,
    default: 0,
  },
  cloudComplete: {
    type: Number,
    default: 0,
  },
  dsComplete: {
    type: Number,
    default: 0,
  },
  engiComplete: {
    type: Number,
    default: 0,
  },
  quantumComplete: {
    type: Number,
    default: 0,
  },
  securityComplete: {
    type: Number,
    default: 0,
  },
  tokens: {
    type: Number,
    default: 0,
  }
});

const userModel = mongoose.model("User", UserSchema);


/** reads data from common-knowledge.js */
const quizFileDir = fs
  .readdirSync("./data")
  .filter((name) => name.endsWith(".js"));

const quizzes = [];

for (const file of quizFileDir) {
  const quizFile = require(`./data/${file}`);
  quizzes.push({
    title: quizFile.quizData.title,
    slug: file.replace(".js", "")
  });
}

function hash(string) {
  return createHash('sha256').update(string).digest('hex');
}

// Routes

app.get("/", (req, res) => {
  res.render("login.ejs");
});

app.get("/quizSelection", async (req, res) => {
  let email = {"email": req.query.email};
  const userLogin = await userModel.findOne(email);

  res.render("index.ejs", {data: { quizzes, userLogin}});
});



app.get("/getRecord", async (req, res) => {
  let email = {"email": req.query.email};
  const userLogin = await userModel.findOne(email);
  res.send(JSON.stringify(userLogin.toObject()));
});

  



app.get("/quiz", (req, res) => {
  res.render("quiz.ejs", { query: req.query.name });
});

app.post("/login", async (req, res) => {

  const loginData = req.body;
  loginData['psw'] = hash(loginData['psw']);


  const users = await userModel.findOne(loginData);
  userInfo = users;



  try {
    if (users) {
      const verification = JSON.stringify({"status": "verified"});
      res.send(verification);


    } else {
      const verification = JSON.stringify({"status": "nomatch"});
      res.send(verification);
    }
    
  } catch (error) {
    const verification = JSON.stringify({"status": "error"});

    res.status(500).send(verification);
  }

});


app.post("/updateScore", jsonParser, async (req, res) => {
  try {
    user = req.body;


  
    await userModel.updateOne( { email: user["email"], psw: user["psw"]},
      {
        $set: {
          aiComplete: user["aiComplete"],
          cloudComplete: user["cloudComplete"],

          dsComplete: user["dsComplete"],
          engiComplete: user["engiComplete"],
          quantumComplete: user["quantumComplete"],
          securityComplete: user["securityComplete"],

          tokens: user["aiComplete"] + user["cloudComplete"] +user["dsComplete"] +user["engiComplete"] +user["quantumComplete"] +user["securityComplete"] 

        }
      } )
    const updateResponse = JSON.stringify({"status": "complete"});

    res.send(updateResponse);
  } catch (error) {
    console.log(error);
    const updateResponse = JSON.stringify({"status": "failed"});

    res.send(updateResponse);
  }
  




});


app.post("/newUser", jsonParser, async (req, res) => {
  const newUserRecord = req.body;

  newUserRecord['psw'] = hash(newUserRecord['psw']);


  newUserRecord['aiComplete'] = 0;
  newUserRecord['cloudComplete'] = 0;
  newUserRecord['dsComplete'] = 0;
  newUserRecord['engiComplete'] = 0;
  newUserRecord['quantumComplete'] = 0;
  newUserRecord['securityComplete'] = 0;
  newUserRecord['tokens'] = 0;


  const user = new userModel(newUserRecord);
  myList = await userModel.find({"email" : newUserRecord["email"]}).exec();
  if (myList.length >= 1) {
    const signUpResult = JSON.stringify({"status": "duplicate"});
    res.send(signUpResult);
  } else {
    try {
      await user.save();
      const signUpResult = JSON.stringify({"status": "verified"});
      res.send(signUpResult);
      res.render("index.ejs", [{ quizzes} , {myList}]);
    } catch (error) {
      const signUpResult = JSON.stringify({"status": "error"});
      res.status(500).send(signUpResult);
    }
  }

  
});





app.listen(3000);
