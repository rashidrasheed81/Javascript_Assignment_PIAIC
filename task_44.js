items = ["Mayonnaise", "Cheese", "Ketchup", "Lattuce"]

function sandwich(...items){
    console.log("Summary: " + items.join(", "));

}

sandwich(items);
sandwich(items, "Olives");
sandwich(items, "Olives","Jalapeno");

