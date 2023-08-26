function isValidURL(url) {
    // Define the regular expression pattern
    const pattern = /^(https?:\/\/)?([\da-z\.-]+\.[a-z\.]{2,6}|[\d\.]+)([\/:?=&#]{1}[\da-z\.-]+)*[\/\?]?$/igm;
    // Test the input URL against the pattern
    return pattern.test(url);
}

const inputURL = "https://learn.pwskills.com/";

const isValid = isValidURL(inputURL);
if (isValid) {
    console.log("The input URL is valid.");
} else {
    console.log("The input URL is not valid.");
}

// output: The input URL is valid.
