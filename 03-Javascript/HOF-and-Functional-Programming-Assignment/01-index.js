function reverseString(inputStr) {
    let reversed = '';
    for (let i = 0; i < inputStr.length; i++) {
        reversed = inputStr[i] + reversed; 
    }
    return reversed;
    
}

const reversed = reverseString("PWSKILLS");

setTimeout(() => {
    
 console.log(reversed);
}, 2000);

console.log(reverseString("pwSkills"));

// output: sllikSwp , SLLIKSWP
                 