// Sample list of users
const usersList = ["Uddeshya", "Mithun", "Vaibhav", "Satvik", "Shivani"];

// Function to check if a username is in the list
function isUsernameInList(username) {
  return usersList.includes(username);
}

// Usage
const usernameToCheck = "Uddeshya";
if (isUsernameInList(usernameToCheck)) {
  console.log(`${usernameToCheck} is present in the list of users.`);
} else {
  console.log(`${usernameToCheck} is not in the list of users.`);
}
