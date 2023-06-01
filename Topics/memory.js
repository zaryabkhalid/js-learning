/*************************************************** STACK MEMORY */
/******* It stores the actual values in memory even if you make a clone of one variable it will store that clone as a new value. ********/

let myName = "John";
let myNewName = myName;
myNewName = "Doe";
console.log("myName Value: ", myName);
console.log("myNewName Value: ", myNewName);

/*************************************************** HEAP MEMORY */
/** This memory stores the reference of values
 *
 * Suppose we have an object which is stores in a heap memory now we assign this object to the new value what happen is we are not cloning that object again but we are also referencing that object to the new varible Now if we change the object value it will effect both objects because they both have same memory address of that object.
 */

const tinderUser = {
	name: "zaryab",
	age: 25,
	isLoggedIn: true,
};
const newTinderUser = tinderUser;
newTinderUser.postLength = 44;

console.log("Tinder User", tinderUser);
console.log("New Tinder User", newTinderUser);
