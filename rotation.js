/*  Check for Rotation
Given two strings, check if one is a rotation of another.
Input: "ABCD", "CDAB" → Output: true  */
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
rl.question('Enter the first string: ', (str1) => {
    rl.question('Enter the second string: ', (str2) => {
        if (str1.length !== str2.length) {  
            console.log('Output: false');
        } else {
            const combined = str1 + str1;
            const isRotation = combined.includes(str2);
            console.log('Output:', isRotation);
        }   
        rl.close();
    }   );
});