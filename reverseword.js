/*Reverse Words in a Sentence
Input: "Java is fun" → Output: "fun is Java" */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (input) => {
    const words = input.split(' ');
    const reversedWords = words.reverse();
    const result = reversedWords.join(' ');
    console.log('Reversed sentence:', result);
    rl.close();
});

