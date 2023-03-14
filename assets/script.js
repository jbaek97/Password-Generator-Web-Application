// Assignment code here
// Arrays
// Lowercase
var letters = "abcdefghijklmnopqrstuvwxyz"
var lowercaseArray = letters.split("");


// Uppercase
var capitalLetters = letters.toUpperCase();
var uppercaseArray = capitalLetters.split("");

// Numeric
var numericArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Special Characters. This list of characters was found on "https://owasp.org/www-community/password-special-characters". I included all the characters in the list except for the "space" character since most generated passwords don't include the "space" character.
var specialCharactersArray = ["!", `"`, "#", "$", "%", "&", `'`, "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^" , "_", "`", "{", "|", "}", "~" ];

function generatePassword() {
  //Character Amount Prompt
  var characters = prompt("Choose a length of the password. The password can be anywhere from at least 8 characters to no more than 128 characters:", "0");
  // Character Amount 
  if (JSON.parse(characters) < 8 || JSON.parse(characters) > 128) {
    alert("You have selected an invalid amount of characters. Please try again");
    return "Invalid input. Please try again."
  } else if( 7 < JSON.parse(characters) < 129) {}


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
