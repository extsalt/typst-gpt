const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("."));
app.use(express.static("public"));
app.use('/.well-known', express.static('.well-known'))
/*
Tool endpoint
ChatGPT will call this
*/
app.post("/tool/generateQuiz", (req, res) => {

    const topic = req.body.topic || "general knowledge";

    const quiz = [
        {
            question: `What best describes ${topic}?`,
            options: [
                "A concept",
                "A programming language",
                "A database",
                "An operating system"
            ],
            answer: "A concept"
        },
        {
            question: `Which field studies ${topic}?`,
            options: [
                "Computer Science",
                "Biology",
                "Geography",
                "Chemistry"
            ],
            answer: "Computer Science"
        }
    ];

    res.json({
        quiz
    });

});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});