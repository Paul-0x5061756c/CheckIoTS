import assert from "assert";

var splitPairs = (text: string): string[] =>
	[...text].reduce((pV, _, index) => {
		var arr = [...text];
		if (arr[index + index]) {
			pV.push(
				`${arr[index + index]}${
					arr[index + index + 1] ? arr[index + index + 1] : "_"
				}`
			);
		}
		return pV;
	}, []);
console.log("Example:");
console.log(splitPairs("abcdefghjufkug1j"));

// These "asserts" are used for self-checking
assert.deepEqual(splitPairs("abcd"), ["ab", "cd"]);
assert.deepEqual(splitPairs("abc"), ["ab", "c_"]);
assert.deepEqual(splitPairs("abcdf"), ["ab", "cd", "f_"]);
assert.deepEqual(splitPairs("a"), ["a_"]);
assert.deepEqual(splitPairs(""), []);

console.log("Coding complete? Click 'Check' to earn cool rewards!");
