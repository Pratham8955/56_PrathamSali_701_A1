// app.js
const readline = require("readline");
const getChatbotResponse = require("./chatbot");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log(
  "Welcome to the CourseBot! Type your question or type 'exit' to quit."
);

rl.setPrompt("You: ");
rl.prompt();

rl.on("line", (input) => {
  if (input.toLowerCase() === "exit") {
    console.log("Chatbot: Bye! 👋");
    rl.close();
  } else {
    const reply = getChatbotResponse(input);
    console.log(`Chatbot: ${reply}`);
    rl.prompt();
  }
});
