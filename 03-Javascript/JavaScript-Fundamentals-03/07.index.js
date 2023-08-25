const userMap = new Map();
// add a user 
function addUser (name, age, email) {
    const user = {name, age, email};
    userMap.set(email,user);
}
// update a user
function updateUser(email, updatedInfo) {
    if (userMap.has(email)) {
        const user = userMap.get(email);
        userMap.set(email, { ...user, ...updatedInfo });
    }
    
}
// remove a user
function removeUser(email) {
    userMap.delete(email);
    
}
// Adding users
addUser('Uddeshya', 25, 'Uddeshyac9@gmail.com');
addUser('Bob', 30, 'bob@example.com');
// console.log(userMap)

//update user 
updateUser('Uddeshyac9@gmail.com', { age: 23 });
// console.log(userMap)

// remove user
removeUser('bob@example.com');
// console.log(userMap)

// // Displaying all users
for (const [email, user] of userMap) {
    console.log(`Name: ${user.name}, Age: ${user.age}, Email: ${email}`);
}
//output: Name: Uddeshya, Age: 23, Email: Uddeshyac9@gmail.com