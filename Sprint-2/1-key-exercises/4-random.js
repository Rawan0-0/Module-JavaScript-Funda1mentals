const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
console.log(num);
// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

//First, const minimum and const maximum are variables
// = is the assignment operator
// what comes after = is what the variable will store
// Math.floor is a method, and here we are telling it that its argument is to use the random method
// and multiply the result before rounding with the maximum and minimum variables we created
// * is a multiplication operator
//To understand what is going on, we need to understand what the floor and random methods do
//Math.floor (rounds down) and then pass it to Math.floor
//We are asking the program to round whatever result we have to the nearest whole number

//done
