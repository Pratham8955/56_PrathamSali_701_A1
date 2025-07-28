
function getChatbotResponse(input) {
  const msg = input.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi")) {
    return "Hello! How can I assist you today?";
  } else if (msg.includes("course") || msg.includes("subject")) {
    return "We offer Web Development, Java, Python, and AI courses.";
  } else if (msg.includes("fees")) {
    return "Fees vary by course. Please contact admin for details.";
  } else if (msg.includes("bye")) {
    return "Goodbye! Have a great day.";
  } else {
    return "I'm not sure how to respond to that. Try asking about courses or fees.";
  }
}


module.exports = getChatbotResponse;
