
function isValidLinkdnProfileURL(url) {
    // Define the regular expression pattern
    const pattern = /^((https?:\/\/)?((www|\w\w)\.)?linkedin\.com\/)((([\w]{2,3})?)|([^\/]+\/(([\w|\d-&#?=])+\/?){1,}))$/igm;
    // Test the input URL against the pattern
    return pattern.test(url);
}

const LinkdnProfileURL = "https://www.linkedin.com/in/uddeshya-choudhary-015a83259/";

const isValid = isValidLinkdnProfileURL(LinkdnProfileURL);
if (isValid) {
    console.log("The input Linkdn Profile URL is valid.");
} else {
    console.log("The input Linkdn Profile URL is not valid.");
}

// output: The input Linkdn Profile URL is valid.