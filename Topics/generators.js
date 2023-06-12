/**
 * ! The generator functions does not gives us the result when they call first time otherwise it return us an object which contain two properties value and done value is the value contains the value which we pass as an argument and done is the boolean value which determines that is function execution is completed or not.
 ** We call the generator function using the next() function the generator function is run piece by piece when ever it faces the yeild keyword it stops the execution and then next time when we call the gen.next() again it execute the function from where the last execution is stopped.
 */

// Simple generator function example
function* anotherGen(a) {
	yield a + 2;
	yield a + 3;
	yield a + 4;
}
function* anotherGenOne(a) {
	yield a + 4;
	yield a + 5;
	yield a + 6;
}

// Calling multiple generator functions with in generator function
function* generator(a) {
	yield a;
	yield* anotherGen(a);
	yield* anotherGenOne(a);
	yield a + 10;
}

const gen = generator(1);

console.log(gen.next()); // output {value:1, done:false}
console.log(gen.next()); // output {value:3, done:false}
console.log(gen.next()); // output {value:4, done:false}
console.log(gen.next()); // output {value:5, done:false}
console.log(gen.next()); // output {value:5, done:false}
console.log(gen.next()); // output {value:6, done:false}
console.log(gen.next()); // output {value:7, done:false}
console.log(gen.next()); // output {value:11, done:false}
console.log(gen.next()); // output {value:undefined, done:true}
