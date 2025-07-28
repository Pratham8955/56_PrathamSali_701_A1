const fs = require("fs");
const util = require("util");
const path = require("path");

const unlinkAsync = util.promisify(fs.unlink);

const filePath = path.join(__dirname, "temp.txt");

async function deleteFile() {
  try {
    await unlinkAsync(filePath);
    console.log("File deleted successfully.");
  } catch (err) {
    console.error("Error deleting file:", err.message);
  }
}

deleteFile();
