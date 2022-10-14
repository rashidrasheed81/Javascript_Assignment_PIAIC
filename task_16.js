var guestList = ["attiq", "amjad", "asghar"];

console.log("\n")
console.log("Hi " + guestList[0] +"!"+ " I would like you to invite on dinner.");
console.log("Hi " + guestList[1] +"!"+ " I would like you to invite on dinner.");
console.log("Hi " + guestList[2] +"!"+ " I would like you to invite on dinner.");

console.log("\n")
console.log(guestList[2]+" is not coming to dinner. ");

guestList[2] = "Ejaz"

console.log("\n")
console.log("Hi " + guestList[0] +"!"+ " I would like you to invite on dinner.");
console.log("Hi " + guestList[1] +"!"+ " I would like you to invite on dinner.");
console.log("Hi " + guestList[2] +"!"+ " I would like you to invite on dinner.");


console.log("\n")
console.log("Hi " + guestList[0] +"!"+ " I found a bigger dinner table.");
console.log("Hi " + guestList[1] +"!"+ " I found a bigger dinner table.");
console.log("Hi " + guestList[2] +"!"+ " I found a bigger dinner table.");

guestList.unshift("Asif");
guestList.splice(2,0,"Azeem")
guestList.push("Jamal")

console.log("\n")
console.log(guestList);