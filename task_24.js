
let string1 = 'Hello';
let string2 = 'hello';
let string3 = "Lahore"
let string4 = "lahore"

let num1 = 23;
let num2 = 13;
let num3 = "23";

var arr1 = [];
var arr2 = ["Lahore", "Karachi", "Peshawar"]


console.log("Is string1 == 'Hello'? I predict True.");
console.log(string1 == 'Hello');

console.log("Is string2 == 'hello'? I predict True.");
console.log(string2 == 'hello');

console.log("Is string3 == 'Lahore'? I predict True.");
console.log(string3 == 'Lahore');

console.log("Is string1 == string2? I predict False.");
console.log(string1 == string2);

console.log("Is string1 == string2? I predict true.");
console.log(string1.toLowerCase() == string2);

console.log("Is string3 == string4? I predict true.");
console.log(string3.toLowerCase() == string4);


console.log("Is num1 == 23? I predict True.");
console.log(num1 == 23);

console.log("Is num2 == 13? I predict True.");
console.log(num2 == 13);

//Not comparing data type that's why its True
console.log("Is num1 == num3? I predict True.");
console.log(num1 == num3);

console.log("Is num1 >= num2? I predict True.");
console.log(num1 >= num2);

console.log("Is num1 <= num2? I predict False.");
console.log(num1 <= num2);

console.log("Is num1 < num2? I predict False.");
console.log(num1 < num3);

console.log("Is num1 > num2? I predict False.");
console.log(num1 > num3);


console.log("Is num1 > num2 and num2 < num3? I predict true.");
console.log(num1 > num2 && num2 < num3);

console.log("Is num1 > num2 or num2 > num3? I predict true.");
console.log(num1 > num2 || num2 > num3);

console.log("array 1 have any items? I predict true.");
console.log(arr1.length == 0);

console.log("array 2 have any items? I predict true.");
console.log(arr2.length != 0);

