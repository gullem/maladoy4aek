// Helper function to calculate the area of a circle
function calculateCircleArea(radius) {
    return Math.PI * Math.pow(radius, 2);
  }
  
  // Helper function to check if a string is a palindrome
  function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  // Helper function to generate a random number within a specified range
  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    console.log("Area of a circle with radius 4:", calculateCircleArea(4)); // Output: Approximately 50.265
    console.log("'radar' is a palindrome?", isPalindrome('radar'));   // Output: true
    console.log("'hello' is a palindrome?", isPalindrome('hello'));   // Output: false
  
    // Generate and print 5 random numbers between 1 and 10
    console.log("Random numbers between 1 and 10:");
    for (let i = 0; i < 5; i++) {
      console.log(getRandomNumber(1, 10));
    }
  }
  
  // Call the main function
  main();
  