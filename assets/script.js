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
  } else if( 7 < JSON.parse(characters) < 129) { 
    //Prompts
    var lowercase = prompt("Would you like the password to include lowercase values? (Press ok to include these values or press cancel to not include these values)", "");
    console.log(lowercase);
    var uppercase = prompt("Would you like the password to include uppercase values? (Press ok to include these values or press cancel to not include these values)", "");
    var numeric = prompt("Would you like the password to include numeric values? (Press ok to include these values or press cancel to not include these values)", "");
    var specialCharacters = prompt("Would you like the password to include special character values? (Press ok to include these values or press cancel to not include these values)", "");
    //Characters Selected
    var selectedCharacters = [];
    //Adding the selected characters
    //Lowercase
    if (lowercase != null) {
    selectedCharacters.push(...lowercaseArray);
    };
    //Uppercase
    if (uppercase != null) {
    selectedCharacters.push(...uppercaseArray);
    };
    //Numeric
    if (numeric != null) {
    selectedCharacters.push(...numericArray);
    };
    //Special Characters
    if (specialCharacters != null) {
    selectedCharacters.push(...specialCharactersArray);
    };
    //If no characters are selected, this message will pop-up
    if (lowercase === null && uppercase === null && numeric === null && specialCharacters === null) {
    alert("You have selected no characters so no password has been made.");
    }
    //Password Array
    var passwordArray = [];
    //For Loop
    for (i=0; i < characters; i++){
    passwordArray.push(selectedCharacters[Math.floor(Math.random()*selectedCharacters.length)])};
    return passwordArray.join(""); }
};



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
