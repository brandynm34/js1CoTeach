// Ternary's
// An expression that evaluates to true or false

// condition ? expression1 : expression2
// if condition is true run expression 1
// if condition is false run expression2

// example 1 ////

if statment way
let inside = true;

if (inside){
  alert('we are inside');
} else {
  alert('we are outside');
}

let example1 = inside ? alert('we are inside') : alert('we are outside');
console.log(example1);

// example 2 ///

let number = 12;

let exmaple2 = (number > 20) ? 'number is greater than 20' : 'number is less than 20'
console.log(exmaple2)

//exmaple 3 Nested /////
// note do not do
let name = false;
let email = true;

//if statment way
if (name){
 console.log('we have have name')
} else if (email) {
  console.log('we have have email')
} else{
  consol.log('dont have either')}

let example3 = name ? 'we have name' : email ? 'have email' : 'dont have either';
console.log(example3)

//exmaple4//// Multiple conditions
// note do not do

let hungry = true;
let mealPrice = 5;

if (hungry){
  if (mealPrice >10){
    console.log("hungry and meal over 10")
  } else {
    console.log("hungry and meal not under 10")
  }
} else {
  if (mealPrice >10){
    console.log("not hungry and meal over 10")
  } else {
    console.log("not hungry and meal not under 10")
  }
}
let example4 = hungry ? ((mealPrice>10) ? "hungry and meal over 10" : "hungry and meal not under 10"):
  ((mealPrice>10) ? "not hungry and meal over 10 " : " not hungry and meal not under 10 ");

console.log(example4)

///exmaple 4 and 5 ///

let IamWearingYellow = false

IamWearingYellow ? "yes i am wearing yellow" : "no i am not";

let num = 23;

let example = (num = 23 || IamWearingYellow) ? "number = 23 and/or yellow" : "number not 23 and not yellow"
console.log(example)
