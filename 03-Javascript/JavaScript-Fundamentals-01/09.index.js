const arr = [1,2,999,"Uddeshya",45,"Choudhary"];
function findFirstString(arr) {
  for (const element of arr) {
    if (typeof element === 'string') {
      console.log('Found the First String:', element);
      return; // Exit the function after the first string is found
    } 
    }
    console.log('No string found in the array.');
}
findFirstString(arr)