/*Final Exam - Part 03*/
//Adam Schultz
var score = 0
const myQuestions = [ 
    {
        question: "What is the meaning of JS?",
        answers: { a:"Javascript", b:"HTML", c:"Style Sheets", d:"None" },
        correctAnswer: "a"
    },
    {
        question: "What is the meaning of HTML?",
        answers: { a:"Javascript", b:"Nodes", c:"HyperText Markup Language", d:"Style Sheets" },
        correctAnswer: "c"
    },
    {
        question: "What is the meaning of CSS?",
        answers: {a:"HyperText Markup Language", b:"Nodes", c:"JavaScript", d:"Cascading Style Sheets" },
        correctAnswer: "d"
    },
    {
        question: "What is the meaning of SQL",
        answers: { a:"HyperText Markup Language", b:"Nodes", c:"Structured Query Language", d:"Cascading Style Sheets" },
        correctAnswer: "c"
    },
    {
        question: "What is the meaning of PL?",
        answers: {a:"HyperText Markup Language", b:"Structured Query Language", c:"Javascript", d:"Procedural Language" },
        correctAnswer: "d"
    }
];
for (var testQuestions in myQuestions){
    var yourAnswer =prompt(myQuestions[testQuestions].question + '\n' +
    'a)' + myQuestions[testQuestions].answers.a + '\n' +
    'b)' + myQuestions[testQuestions].answers.b + '\n' +
    'c)' + myQuestions[testQuestions].answers.c + '\n' +
    'd)' + myQuestions[testQuestions].answers.d + '\n');

    if(yourAnswer == myQuestions[testQuestions].correctAnswer) {
        alert('Answer is Correct');
        score++;
    }
    else{
        alert('Answer is Wrong');
    }
}
alert ('Your Score is ' + score + '/' + myQuestions.length);