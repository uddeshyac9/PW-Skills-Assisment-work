function hasUniqueCharacters(str) {
    const lowerCaseStr = str.toLowerCase(); // Convert to lowercase
    return new Set(lowerCaseStr).size === lowerCaseStr.length;
  }
  
  const inputString = "Mithun";
  
  if (hasUniqueCharacters(inputString)) {
    console.log(`The input string "${inputString}" has Unique Characters`);
  } else {
    console.log(`The input string "${inputString}" has Duplicate Characters`);
  }