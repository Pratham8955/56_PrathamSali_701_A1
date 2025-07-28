const fs = require("fs");
const archiver = require("archiver");
const path = require("path");

const output = fs.createWriteStream(__dirname + "/output.zip");
const archive = archiver("zip", {
  zlib: { level: 9 },
});

output.on("close", function () {
  console.log(` Zip created successfully.`);
});

archive.on("error", function (err) {
  throw err;
});

archive.pipe(output);

const folderPath = path.join(__dirname, "public");

archive.directory(folderPath, false);

archive.finalize();
