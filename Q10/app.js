// Using __dirname and __filename
console.log("Directory name:", __dirname);
console.log("File name:", __filename);

// Using setTimeout and setInterval (both are global)
setTimeout(() => {
  console.log("This message is shown after 2 seconds (setTimeout)");
}, 2000);

let count = 0;
const interval = setInterval(() => {
  console.log("Interval running:", ++count);
  if (count === 3) clearInterval(interval); // Stops after 3 times
}, 1000);

// Using console (global object)
console.log("This is a log message from global console");

// Using process (global object)
console.log("Node.js version:", process.version);
console.log("Platform:", process.platform);
