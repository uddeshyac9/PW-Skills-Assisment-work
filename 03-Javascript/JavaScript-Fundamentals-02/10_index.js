// Define a function named wordCount that takes a sentence as input.
function wordCount(sentence) {
    // Split the sentence into individual words and convert them to lowercase.
  const words = sentence.toLowerCase().split(" ");
  // Create an empty map to store the word counts.
  const wordCounts = new Map();
  // Loop through each word in the array of words.
  for (const word of words) {
    // Check if the word is already present in the wordCounts map.
    if (wordCounts.has(word)) {
        // If yes, increment the count for that word.
        wordCounts.set(word, wordCounts.get(word)+1);
    } else {
        // If yes, increment the count for that word.
        wordCounts.set(word,1);
    }
  }
      return wordCounts
}

   // Example usage: define a sentence.
const sentence = "This is a sentence with  this repeated word.";
  const wordCounts = wordCount(sentence);
  console.log(wordCounts);