let magicians = ["magician1", "magician2","magician3","magician4"]
console.log("Original");
console.log(magicians);

function show_magicians(array){
    for (let i = 0; i < array.length; i++) {      
        console.log([array[i]])
    }
    
}

console.log("show function show_magicians")
show_magicians(magicians);


function make_great(array){
    for (let i = 0; i < array.length; i++) {              
        console.log([array[i] = array[i] + " the Great"]);
    }
    
}

console.log("show function make_great")
array1 = magicians.slice(0,4);
make_great(array1);

console.log("Showing again original array")
console.log(magicians);


