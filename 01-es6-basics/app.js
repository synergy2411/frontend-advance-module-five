// Named import
import { getLuckyNumber, getQuote } from './fortune.js';

// Default import
import addition from './maths.js';

console.log("Your lucky number today : ", getLuckyNumber());

console.log("Advice for the day : ", getQuote());

console.log("Sum is : ", addition(4, 5));