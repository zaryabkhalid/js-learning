//? What is hoisting ?
/**
 **  Hoisting is accessing a variable before its declaration. In case of var we get undefined but in case of let and const
 ** it gives us an error which is reference error that cannot access variable before declaration. For let and const     javascript stores them in a script storage while var is store with in a global object which is window in case of Browser.
  
  *! So for the let & const the time from the declaration to the initialize both of them in a temporal dead zone. 
*/

//! Variable case
// console.log(`B is ${b}`);
// console.log(`A is ${a}`);
// let a = 12;
// var b = 10;

//! Function Case

Sum();
console.log(Sum);

function Sum() {
	let a = 2;
	let b = 3;
	console.log(a + b);
}

console.log(addTwo);
var addTwo = () => {
	let a = 2;
	let b = 3;
	console.log(a + b);
};
