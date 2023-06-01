/**
 * ! REDUCE EXAMPLE
 * ? How it works and what is the use case of this method ?
 * TODO: There can be many use cases for this method but the most common case is calculating multiple values and then returning the single value either its a sum or subtract value etc.
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const initialValue = 0;

//! When first time this function runs the acc ==> accumulator value is going to be the initial value

const newNumber = numbers.reduce((acc, curr) => {
	console.log(`Accumulator value is ${acc} and Current Val is ${curr}`);
	return acc + curr;
}, initialValue);

console.log(newNumber);

/*
 * PRACTICAL EXAMPLE OF REDUCE METHOD
 * SHOPING CART EXAMPLE
 */

const shoppingCart = [
	{
		productName: "Mac Book Pro",
		price: 250000,
	},
	{
		productName: "Iphone 12",
		price: 150000,
	},
	{
		productName: "AirPods Pro",
		price: 25000,
	},
];

const priceToPay = shoppingCart.reduce((acc, item) => {
	if (Number(item.price)) {
		console.log(`Item Price is ${item.price}`);
		return acc + item.price;
	}
}, 0);

console.log(priceToPay);
