const fs = require("fs");
const unzipper = require("unzipper");
const path = require("path");

const zipFilePath = path.join(__dirname, "output.zip");

const outputDir = path.join(__dirname, "extractFolder");

fs.createReadStream(zipFilePath)
  .pipe(unzipper.Extract({ path: outputDir }))
  .on("close", () => console.log("Extraction completed successfully."))
  .on("error", (err) => console.error("Extraction failed:", err));
