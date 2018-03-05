#!/usr/bin/env node
'use strict';

// this program should accept at least one number as a command-line argument. The arguments should be summed up into a single value

let [, , ...myArgs] = process.argv;

let sum; 

if (myArgs.length !== null) {
  sum = myArgs.map(Number).reduce((a, b) => a + b, 0);
} else {
  sum = 0;
}

console.log(sum);



  

