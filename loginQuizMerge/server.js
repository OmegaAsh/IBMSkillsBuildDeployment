const express = require("express");
const app = express();
const { createHash } = require("crypto");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const fs = require("fs");
const cors = require("cors");
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ibmskillsbuildquiz@gmail.com',
    pass: 'ovcyrzbddqeephfc'
  }
});



var jsonParser = bodyParser.json()



const courses = {
  "Artificial Intelligence":  'Getting Started with AI:  https://ole03.yourlearning.ibm.com/mod/scorm/player.php?a=473&currentorg=articulate_rise&scoid=2355&display=popup&mode=normal&lang=en \n Explore IBM Skills Build Area for AI: https://www.ibm.com/academic/topic/artificial-intelligence',
  "Cloud": 'Introduction to Cloud:  https://yl-ptech.skillsnetwork.site/courses/course-v1:IBMDeveloperSkillsNetwork+CC0101EN+v1 \n Explore IBM Skills Build Area for Cloud: https://www.ibm.com/academic/topic/cloud',
  "Data Science" : 'Getting Started with Enterprise Data Science:  https://www.ibm.com/academic/topic/data-science \n Explore IBM Skills Build Area for Data Science: https://www.ibm.com/academic/topic/data-science',
  "Engineering": 'IBM Design Thinking:  https://www.ibm.com/design/thinking/ \n Explore IBM Skills Build Area for Engineering: https://www.ibm.com/academic/topic/engineering',
  "Quantum": 'Introduction to Quantum Computing and Hardware: https://qiskit.org/learn/summer-school/introduction-to-quantum-computing-and-quantum-hardware-2020/ \n Explore IBM Skills Build Area for Quantum: https://www.ibm.com/academic/topic/quantum-computing',
  "Security": 'Getting Started with Threat Intelligence and Hunting: https://www.ibm.com/academic/topic/security \n Explore IBM Skills Build Area for Security: https://www.ibm.com/academic/topic/security'
}

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

app.post("/sendEmail", async (req, res) => {
  let emailCourse = req.body;
  let email = emailCourse['email'];
  let courseName = emailCourse['course']
  let course = courses[courseName];

  var mailOptions = {
    from: 'ibmskillsbuildquiz@gmail.com',
    to: email,
    subject: `IBM Skills Build ${courseName} Course Link`,
    text: `${course}`
  };

  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      res.send("error");
      console.log(error)

    } else {
      res.send("success");
    }
  });



  
});

app.get("/quizSelection", async (req, res) => {
  
  const userLogin = await userModel.findOne({"email": req.query.email, "psw": hash(req.query.psw)});

  res.render("index.ejs", {data: { quizzes, userLogin}});
});



app.get("/getRecord", async (req, res) => {
  const userLogin = await userModel.findOne({"email": req.query.email, "psw": hash(req.query.psw)});

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
  if (myList.length > 1) {
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
