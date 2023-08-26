    
function generateRandomNumberWithDelay(delayinSeconds) {
let remainingTime = delayinSeconds;
const interval =  setInterval(() => {
    console.log(`Time remaining: ${remainingTime} seconds`);
    remainingTime--;
    if (remainingTime <= 0) {
       clearInterval(interval);
       const randomNumber = Math.floor(Math.random() * 100 + 1);
       console.log(`Generated random number: ${randomNumber}`);

    }
}, 1000);
}
const delay = 3; // Delay in seconds
generateRandomNumberWithDelay(delay);

//Output  Generated random number:
