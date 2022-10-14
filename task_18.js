//Store the locations in a array. Make sure the array is not in alphabetical order.
var places = ["London", "Tokoyo", "NewYork", "Berlin", "Toronto"];

//Print array in its original order
console.log(places);

//Print array in alphabetical order without modifying the actual list.
console.log(places.slice().sort());
console.log(places);

//Print array in reverse alphabetical order without changing the order of the original list.
console.log(places.slice().sort().reverse());
console.log(places)

//Reverse the order of your list. Print the array to show that its order has changed.
places.reverse();
console.log(places);

//Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log(places);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log(places);

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
places.sort();
console.log(places);
