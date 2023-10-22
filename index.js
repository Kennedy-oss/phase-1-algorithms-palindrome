function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length; // get the length of the string
  for (let i = 0; i < len / 2; i++) {
    // iterate over the string from both ends, comparing the characters
    if (word[i] !== word[len - 1 - i]) {
      // if any characters don't match, the string is not a palindrome
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
*/
// Algorithm: isPalindrome(word)
// Input: A string word
// Output: A boolean value indicating whether the word is a palindrome or not

// 1. Initialize len as the length of word
// 2. FOR i from 0 to len/2
//   a. IF word[i] is not equal to word[len - 1 - i]
//      THEN
//        RETURN false
//      END IF
//   END FOR
// 3. RETURN true


/*
  Add written explanation of your solution here
*/
// The given JavaScript function, isPalindrome, aims to determine whether an input string, denoted as word, is a palindrome. A palindrome is a string that reads the same forward and backward. The algorithm employs a loop to compare characters from both ends of the string. If it finds a discrepancy between any two corresponding characters, the function returns false. Otherwise, it returns true. 

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
