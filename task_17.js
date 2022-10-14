var guestList = ["attiq", "amjad", "asghar"];

console.log("\n")
console.log("Hi " + guestList[0] +"!"+ " I would like you to invite on dinner.");
console.log("Hi " + guestList[1] +"!"+ " I would like you to invite on dinner.");
console.log("Hi " + guestList[2] +"!"+ " I would like you to invite on dinner.\n");

console.log(guestList[2]+" is not coming to dinner. \n");

guestList[2] = "Ejaz"

console.log("\n")
console.log("Hi " + guestList[0] +"!"+ " I would like you to invite on dinner.");
console.log("Hi " + guestList[1] +"!"+ " I would like you to invite on dinner.");
console.log("Hi " + guestList[2] +"!"+ " I would like you to invite on dinner.\n");


console.log("\n")
console.log("Hi " + guestList[0] +"!"+ " I found a bigger dinner table.");
console.log("Hi " + guestList[1] +"!"+ " I found a bigger dinner table.");
console.log("Hi " + guestList[2] +"!"+ " I found a bigger dinner table.\n");

guestList.unshift("Asif");
guestList.splice(2,0,"Azeem")
guestList.push("Jamal")
console.log("\n")
console.log(guestList + "\n");

//
console.log("\n")
console.log("Hi " + guestList[0] +"!"+ " Sorry, I only invite two people.");
console.log("Hi " + guestList[1] +"!"+ "  Sorry, I only invite two people.");
console.log("Hi " + guestList[2] +"!"+ " Sorry, I only invite two people.\n");


remGuests = guestList.pop()
console.log(remGuests + " You're sorry I can't invite you to dinner.");
remGuests = guestList.pop()
console.log(remGuests + " You're sorry I can't invite you to dinner.");
remGuests = guestList.pop()
console.log(remGuests + " You're sorry I can't invite you to dinner.");
remGuests = guestList.pop()
console.log(remGuests + " You're sorry I can't invite you to dinner.\n");

console.log(guestList + "\n")

guestList.splice(0,2)
console.log(guestList)