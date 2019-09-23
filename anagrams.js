var test = function(string_1, string_2) {
	const new_string_1 = string_1.toLowerCase().replace(/\W/g, "").split("").sort().join("");
	const new_string_2 = string_2.toLowerCase().replace(/\W/g, "").split("").sort().join("");

	return new_string_1 == new_string_2;
}

console.log(test("DAD", 'dad'));
console.log(test("SLEEP!!", "speel"));
console.log(test("Hi", "Bye"));