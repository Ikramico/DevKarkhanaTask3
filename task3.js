/* 
1. Write a program that will convert integer decimal number to binary and vice versa
*/


// from binary to decimal
let binary = "1010";
let decimal = parseInt(binary, 2);
console.log("the Decimal of 1010 is " + decimal)

// from decimal to binary

let binary2 = decimal.toString(2);
console.log("the binary of " + decimal + " is " + binary2 + "\n");







/* 
2. Write a Program that will find out maximum number from any nested array.
Array example is [2,3,[5,6,[7,8],9]]
*/

let array = [2, 3, [5, 6, [7, 8], 9]];

const newArray = array.flat(2)

// finding maximum value
const max = Math.max(...newArray)

// finding minimum value
const min = Math.min(...newArray)

console.log("the maximum number in this nested array is " + max)
console.log("the minimum number in this nested array is " + min + "\n")

/* 
3.Write a program to calculate the freq of words in a string.
 */

let testSentence = "Hi, I am Ikram Ico. Using this sentence for testing"

const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
let testing = testSentence.replace(regex, '');
let freq = [];
testing = testing.split(' ');
testing.forEach((i) => {
    if (!freq[i]) {
        freq[i] = 0;
    }
    freq[i] = freq[i] + 1;
});

console.table(freq);