var usernames = [];

for (let i = 0; i <= usernames.length; i++) {
    if (usernames.length == 0){
        console.log("We need to find some users!");
        
    }else if (usernames[i] === 'admin' && usernames != 0){
        console.log("Hello " + usernames[i] + " would you like to see a status report?");
       
    } else if (usernames[i]!=='admin' && usernames.length>0 && i<usernames.length) {
        console.log("Hello " + usernames[i] +  " thank you for logging in again");
    }
}



