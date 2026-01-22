/*Create a Node.js program that reads a text file, counts the number of words, and writes the
count to a new file.*/


const fs = require("fs");
const inputFile = "input.txt";
const outputFile = "output.txt";

fs.readFile(inputFile, "utf8", (err, data) => {
  if (err) {
    console.log("Error reading file:", err);
    return;
  }

  const words = data.trim().split(/\s+/);
  const wordCount = data.trim() === "" ? 0 : words.length;

  fs.writeFile(outputFile, `Word Count: ${wordCount}`, (err) => {
    if (err) {
      console.log("Error writing file:", err);
      return;
    }
    console.log("Word count written to output.txt successfully!");
  });
});
