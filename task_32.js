var current_users = ['amjad', 'asgher', 'rashid', 'attiq', 'asif'];
var new_users = ['hadi', 'abdullah','asgher','Attiq', 'azeem'];

new_users.forEach((user) => {
    current_users.includes(user.toLowerCase()) ?
        console.log("the person will need to enter a new username"):
        console.log("the username is available")
})


