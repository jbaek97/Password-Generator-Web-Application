// Assignment code here
// Arrays
// Lowercase
letters = "abcdefghijklmnopqrstuvwxyz"
lowercaseArray = letters.split("");


// Uppercase
capitalLetters = letters.toUpperCase();
uppercaseArray = capitalLetters.split("");

// Numeric
numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special Characters. This list of characters was found on "https://owasp.org/www-community/password-special-characters". I included all the characters in the list except for the "space" character since most generated passwords don't include the "space" character.
specialCharactersArray = ["!", `"`, "#", "$", "%", "&", `'`, "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^" , "_", "`", "{", "|", "}", "~" ];



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
