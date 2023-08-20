function reverseString(inputStr) {
    let reversed = '';
    for (let i = 0; i < inputStr.length; i++) {
        reversed = inputStr[i] + reversed; 
    }
    return reversed;
    
}

console.log(reverseString("UDDESHYA"));