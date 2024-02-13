//CHAPTER 5
//Complete the following program so that it asks the user for his first and last names, then show the result of the sayHello() function.
//I was really stumpted with how to accomplish this, as functions are not my strongest
//I combined the first & last name into one parameter into two, because it felt less daunting this way and the code works!

function sayHello(firstAndLastName) {
    let answer = `Hey there, ${firstAndLastName}`;
    return answer;
}

let whatYourName = prompt("What is your first & last name?");
console.log(sayHello(answer = whatYourName));

//this is the split version of what the exercise was intended to be:
//learning that I call separate prompts was a life saver here! Yay! 

function sayHello(firstName, lastName) {
    let answer = `Hey there, ${firstName} ${lastName}`;
    return answer;
}

let firstName = prompt("What's your first name?");
let lastName = prompt("What's your last name?");
console.log(sayHello(answer = firstName, lastName));

//Fat arrow function practice

const sayHelloV2 = (fName, lName) => {
    const message = (`Your name is ${fName} ${lName}`);
    return message;
}

const fName = prompt("what is your firstname?");
const lName = prompt("what is your firstname?");
console.log(sayHelloV2(fName, lName));

//CHAPTER 5
//Complete the following program so that the square1() and square2() functions work properly.
//When it's done, update the program so that it shows the square of every number between 0 and 10.

// Square the given number x
function square1(x) {
    return x * x;
    //also doing x** would work here
  }

  //the 'updated' addition to show the square of every number between 0 - 10
  //to practice my loops, Im going to explain what I did here:
  //created a for loop
  //specified the initialization, set it as a variable and it is initially 0
  //set the condition as if the variable squareLoop needs to run under 10 times
  //setting the final expression to increase by 1 each time
  //console log - grabbing the function named square1, and having the loop 'squareLoop' run within the function
  for (let squareLoop = 0; squareLoop <= 10; squareLoop++ ) {
    console.log(square1(squareLoop));
  }

  // Square the given number x
  const square2 = x => x * x;

  //another solution is using a math method to get a square number
  //I wasn't sure at first what the squared math method would be, so thanks google! 
  //I added variable 'square3' so it would not interrupt the above functions, but change to square2 when using
  const square3 = x => Math.pow(x,2);
  
  console.log(square1(0)); // Must show 0
  console.log(square1(2)); // Must show 4
  console.log(square1(5)); // Must show 25
  
  console.log(square2(0)); // Must show 0
  console.log(square2(2)); // Must show 4
  console.log(square2(5)); // Must show 25

//CHAPTER 5
//Let's pretend the JavaScript Math.min() function doesn’t exist. 
//Complete the following program so that the min() function returns the minimum of its two received numbers.

const minNum = (num1, num2) => {
    if (num1 < num2) {
      return num1;
    }
    return num2; 
  };

console.log(minNum(4.5, 5)); // Must show 4.5
console.log(minNum(19, 9));  // Must show 9
console.log(minNum(1, 1));   // Must show 1

//CHAPTER 5
/*Complete the following program so that it offers the four basic arithmetical operations: 
addition, subtraction, multiplication and division. You can use either a function declaration or a function expression.*/

//Was stuck on this for awhile, but after trying a few things that didn't work out, a switch came in clutch! 

function calculate(number1, operation, number2) {
    let result;
    switch (operation) {
        case "+":
            result = number1 + number2;
            break;
        case "-":
            result = number1 - number2;
            break;
        case "*":
            result = number1 * number2;
            break;
        case "/":
            result = number1 * number2;
            break;
    } 
};

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

//CHAPTER 5
/*Write a program containing two functions to calculate the circumference and area of a circle defined by its radius. Test it using user input.

Here are some tips for solving this exercise:

Circumference and area calculation formulas should be part of your secondary school memories... Or a Google click away :)
The value of number π (Pi) is obtained with Math.PI in JavaScript.
You might want to use the exponentiation operator ** to perform computations.*/

//Will be returning to this -- seems a little complex for todays brain power

console.log(2 ** 3); // 8: 2 * 2 * 2
console.log(3 ** 2); // 9: 3 * 3