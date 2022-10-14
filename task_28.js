var person = [{name:"Rashid", age: 41}]

if (person[0].age < 2){
    console.log("Person is baby.");
}else if (person[0].age >= 2 && person[0].age < 4){
    console.log("Person is toddler.");
}else if (person[0].age >= 4 && person[0].age < 13){
    console.log("Person is kid.");
}else if (person[0].age >= 13 && person[0].age < 20){
    console.log("Person is teenager.");
}else if (person[0].age >= 20 && person[0].age < 65){
    console.log("Person is adult.");
}else if (person[0].age >= 65){
    console.log("Person is elder.");
}