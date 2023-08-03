// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// A variable named `name` is declared and assigned the string value 'Dane'. 
//We then check if the `name` variable is exactly equal to the string 'Mary'. 
//If it is, we log 'Hi, Mary!' to the console. If `name` is not 'Mary',
// we log 'How do you do?' to the console.
// Since name isn't marry it will log out How do you do? 

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// Here, we declare a variable `secret` without a value, and another variable `code` with the value 123. 
//If `code` is exactly equal to 123, which it is in this case, we assign the string 'super' to `secret` 
//and double the value of `code`. After that, we check if `code` is greater than 250. 
//If true, which is not the case here (as `code` is now 246), we assign the string 'duper' to `secret`. 
//At the end, we log the current value of `secret`, which is 'super', to the console.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We declare three variables: `isStudent` (a Boolean with a value of true), `age` (a number with a value of 34), 
//and `zip` (a number with a value of 55407). We first check if `isStudent` is true and if `zip` is greater than 80000.
// If both are true, we log 'You're a student on the West Coast!' to the console. 
//However, in this case, since `zip` is not greater than 80000, this condition is not met. 
//We then check if `isStudent` is false or if `age` is less than 30. 
//If either condition is true, we log 'What are your hobbies?' to the console. 
//As both conditions are false in this instance, we move to the next condition. 
//We check if `isStudent` is true. If it is, which is the case here, we log 'Welcome to Prime!' to the console.
// The final else block acts as a catch-all, logging 'How about the weather?' to the console if none of the above conditions are met.
// In this case, it doesn't execute, because one of the previous conditions was met.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
//Fix- Assign colorOne to blue
// Should be let colorOne = blue;
let colorOne = 'red';
//Fix- Assign colorTwo to red
// Should be let colorTwo = red;
let colorTwo = 'blue';
let mix = true;

// Fix refactor, should be if (mix)
if (mix === true) {
  colorOne = 'purple';
  // FIX - Also set colorTwo to 'purple'
  // should be colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;
// Fix: Change || to && operator
//should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// Fix: the variable age should come first then the operator should be changed to greater than or equal to
// should be if(age >= minAge)
if(minAge <= age) { 
  // Fix: Change 'no entry' to 'enter' should be console.log('enter');
  console.log('no entry'); 
} else {
  // Fix: Change 'enter' to 'no entry' should be console.log('no entry');
  console.log('enter');
}
*/

