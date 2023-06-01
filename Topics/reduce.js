/**
 * TODO: REDUCE EXAMPLE
 * ? How it works and what is the use case of this method ?
 */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const initialValue = 0;

const newNumber = numbers.reduce((acc, curr) => {
	// console.log(`Accumulator value is ${acc} and Current Val is ${curr}`);
	return acc + curr;
}, initialValue);

// console.log(newNumber);

/*
 * PRACTICAL EXAMPLE OF REDUCE METHOD
 * SHOPING CART
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
