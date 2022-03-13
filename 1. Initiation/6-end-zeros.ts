import assert from "assert";

var endZeros = (value: number): number => {
    var arr = value
		.toString()
		.split("")
		.map((e) => e.replace(new RegExp("[1-9]"), "^"))
		.reverse();
	if (arr.length == 1) {
		return arr[0] == "0" ? 1 : 0;
	} else {
		return arr.findIndex((e) => e == "^");
	}
};

console.log('Example:');
console.log(endZeros(0));

// These "asserts" are used for self-checking
assert.equal(endZeros(0), 1);
assert.equal(endZeros(1), 0);
assert.equal(endZeros(10), 1);
assert.equal(endZeros(101), 0);
assert.equal(endZeros(245), 0);
assert.equal(endZeros(100100), 2);

console.log("Coding complete? Click 'Check' to earn cool rewards!");