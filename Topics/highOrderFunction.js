const radiusArray = [2, 3, 4, 6];

// Calculating Area
const calculate = function (radius, areaLogic) {
	let output = [];
	for (let i = 0; i < radius.length; i++) {
		output.push(areaLogic(radius[i]));
	}
	return output;
};

// console.log(
// 	calculate(radiusArray, radius => Math.floor(Math.PI * radius * radius)),
// );

//  Making Filter high order function

const data = [2, 3, 4, 5, 6, 7, 8, 13, 100, 98, 65, 76, 34, 67];

Array.prototype.customFilter = function (filterLogic) {
	const result = [];
	for (let i = 0; i < this.length; i++) {
		const filteredValue = filterLogic(this[i]);
		if (Number(filteredValue)) {
			result.push(filteredValue);
		}
	}
	return result;
};

const output = data.customFilter(value => (value > 5 ? value : null));
console.log(output);

// function filterLogic(value) {
// 	if (value > 5) {
// 		return value;
// 	}
// }

// const output = customFilter(data, value => (value > 5 ? value : null));
// console.log(output);
