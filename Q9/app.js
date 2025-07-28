const fs = require("fs");

// 1. Create/write to a file
fs.writeFileSync("demo.txt", "This is the first line.\n");
console.log("File created and written.");

// 2. Append data to the file
fs.appendFileSync("demo.txt", "This is an appended line.\n");
console.log("Data appended.");

// 3. Read the file content
const content = fs.readFileSync("demo.txt", "utf-8");
console.log("File content:\n" + content);

// 4. Rename the file
fs.renameSync("demo.txt", "updated-demo.txt");
console.log("File renamed to updated-demo.txt");

// 5. Delete the file
fs.unlinkSync("updated-demo.txt");
console.log("File deleted.");
