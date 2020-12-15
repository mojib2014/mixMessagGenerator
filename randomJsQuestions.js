const colors = require("colors");
// Generates random number from 0 to the number - 1;
const generateRandomNumber = (number) => {
  return Math.floor(Math.random() * number);
};

// Random javascript questions and answers(❤️ JavaScript).
const randomMessages = {
  questions: [
    "What is JavaScript?",
    "What are the data types supported by JavaScript?",
    "What are the features of JavaScript?",
    "Is JavaScript a case-sensitive language?",
    "What are the advantages of JavaScript?",
    "How can you create an object in JavaScript?",
    "How can you create an Array in JavaScript?",
    "What is a name function in JavaScript & how to define it?",
  ],
  answers: [
    "JavaScript is a lightweight, interpreted programming language with object-oriented capabilities that allows you to build interactivity into otherwise static HTML pages.",
    "Undefined, Null, Boolean, String, Symbol, Number, Object",
    "It is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complementary to and integrated with Java. It is an open and cross-platform scripting language.",
    "Yes, JavaScript is a case sensitive language.  The language keywords, variables, function names, and any other identifiers must always be typed with a consistent capitalization of letters.",
    "Less server interaction. Immediate feedback to the visitors, Increased interactivity, Richer interfaces",
    "var emp = { name: 'Daniel', age: 23 };",
    "You can define arrays using the array literal as follows- var x = []; var y = [1, 2, 3, 4, 5];",
    "A named function declares a name as soon as it is defined. It can be defined using function keyword as : function named(){ // write code here }",
  ],
  inspirational: [
    "Be the change that you wish to see in the world.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "I have not failed. I've just found 10,000 ways that won't work.",
    "It is never too late to be what you might have been.",
    "Life isn't about finding yourself. Life is about creating yourself.",
  ],
  programmingJokes: [
    "How many programmers does it take to change a light bulb? None – It’s a hardware problem",
    "Why do programmers always mix up Halloween and Christmas? Because Oct 31 equals Dec 25.",
    "Whats the object-oriented way to become wealthy? Inheritance",
  ],
};

// store the result here
const messages = [];

// Generating random questions and answers from the array of randomQuestionsAndAnswers.
const generateRandomQuestionsAndAnswers = () => {
  const randomQuestionIdx = generateRandomNumber(
    randomMessages.questions.length,
  );
  const randomQuestion = randomMessages.questions[randomQuestionIdx];
  console.log("******* Question *******".rainbow);
  console.log(randomQuestion.red);
  const answerIdx = randomMessages.questions.indexOf(randomQuestion);
  console.log("******* Answer *******".rainbow);
  console.log(randomMessages.answers[answerIdx].green);
};

generateRandomQuestionsAndAnswers();

// Generate random messages
for (let key in randomMessages) {
  const index = generateRandomNumber(randomMessages[key].length);

  if (key === "inspirational")
    messages.push("Inspirational: ".rainbow, randomMessages[key][index].bold);
  if (key === "programmingJokes")
    messages.push(
      "Programming Jokes: ".rainbow,
      randomMessages[key][index].bold + "🤣🤣🤣🤣",
    );
}

const formatMessages = (messages) => {
  const formated = messages.join("\n");
  console.log("=================".blue);
  console.log(formated);
};

formatMessages(messages);
