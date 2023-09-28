// Arrays containing characters for the user to select from
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "?"];
var numericCharArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowercaseCharArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseCharArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// This is the user's password array (initialized to an empty array)
var passwordArray = [];

// This is an array of possible characters we can select from based on the user-selected criteria (initialized to an empty array)
var possibleCharactersArray = [];

// Selects the "Generate Password" button
var generateBtn = document.querySelector("#generate");

// Generates password based on user-selected criteria
function generatePassword() {

  // Prompt user "How many characters would you like your password to contain?"
  let passwordLength = prompt("How many characters would you like your password to contain?");
  console.log(`Password length: ${passwordLength}`);

  // Check if password length is at least 8 characters and no greater than 128 characters.
  if (passwordLength < 8 || passwordLength > 128) {
    // If not, alert user "Password length must be at least 8 and no greater than 128 characters" and program ends
    alert("Password length must be at least 8 and no greater than 128 characters");
    
  } else {

    // Confirm whether to use special characters.
    var specialChar = confirm("Click OK to confirm including special characters");

    // If specialChar == true, add all special characters to possibleCharactersArray
    if (specialChar) {
      possibleCharactersArray = possibleCharactersArray.concat(specialCharArray);
      console.log("Selected OK to special characters");
      console.log(possibleCharactersArray);
    } else {
      console.log("Selected Cancel to special characters");
    }


  }
  
  // Else, confirm("Click OK to confirm including numeric characters"). Add all numeric characters to possibleCharactersArray
  // Else, confirm("Click OK to confirm including lowercase characters"). Add all lowercase characters to possibleCharactersArray
  // Else, confirm("Click OK to confirm including uppercase characters"). Add all uppercase characters to possibleCharactersArray
  // At least one character type should be selected
  // After all prompts are answered, password is generated
  // Randomly select correct amount of characters from possibleCharactersArray and add to passwordArray
  // Password should be correct length and contain at least one of each type of character selected by the user. If not, randomly select a new password from possibleCharactersArray
  // return passwordArray
}









// Write password to the #password input
function writePassword() {

  // Generates password
  var password = generatePassword();

  // Selects <textarea>
  var passwordText = document.querySelector("#password");

  // Writes to #password input
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
