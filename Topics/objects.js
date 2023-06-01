// Objects can be create using using three different methods.
/**
 *
 ***** 1: Object Literals
 ***** 2: using new Keyword
 ***** 3: using object.create()
 */

// Objectt creation using Literal Methodology
// const book = {};
// book.title = "JS DS & Algo";
// book.price = 850;

// const author = {};
// author.title = "Dennis Riche";
// author.expert = "JS";

// const obj = Object.assign({}, [book, author]);
// console.log(obj);

// const ages = { alice: 18, bob: 24 };

// function hasPerson(name) {
// 	return name in ages;
// }

// function getAge(name) {
// 	return ages[name];
// }

// const person = hasPerson("alice");
// console.log("Person: ", person);

// const personAge = getAge("bob");

// console.log("Person Age: ", personAge);

// const obj1 = { a: 0, b: { c: 0 } };
// const obj2 = { ...obj1 };

// obj1.a = 1;
// obj1.b.c = 8;

// console.log("obj1: ", obj1);
// console.log("obj2: ", obj2);

/**
 ** DEEP CLONING
 */
const obj1 = { a: 0, b: { c: 0 } };
const obj2 = JSON.parse(JSON.stringify(obj1));

obj1.a = 6;
obj1.b.c = 3;

console.log(`Obj 1 Type ${typeof obj1}`);
console.log(`Obj 2 Type ${typeof obj2}`);
console.log("Obj 1:", obj1);
console.log("Obj 2:", obj2);
