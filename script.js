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

// Generates an array of possible characters to pick our password from based on user-selected criteria
function generatePossibleCharacters() {

  // Prompt user "How many characters would you like your password to contain?"
  let passwordLength = prompt("How many characters would you like your password to contain?");
  console.log(`Password length: ${passwordLength}`);

  // Check if password length is at least 8 characters and no greater than 128 characters.
  if (passwordLength < 8 || passwordLength > 128) {
    
    // If password length is not acceptable, alert user and program ends
    alert("Password length must be at least 8 and no greater than 128 characters");
    
    // If password length is acceptable, ask user to select special, numeric, lowercase and uppercase characters
  } else {

    // Confirm whether to use special characters.
    var isSpecialChar = confirm("Click OK to confirm including special characters");

    // If isSpecialChar == true, add all special characters to possibleCharactersArray
    if (isSpecialChar) {
      possibleCharactersArray = possibleCharactersArray.concat(specialCharArray);
      console.log("Selected OK to special characters");
      console.log(possibleCharactersArray);
    } else {
      console.log("Selected Cancel to special characters");
    }
    
    
    // Confirm whether to use numeric characters.
    var isNumericChar = confirm("Click OK to confirm including numeric characters");

    // If isNumericChar == true, add all numeric characters to possibleCharactersArray
    if (isNumericChar) {
      possibleCharactersArray = possibleCharactersArray.concat(numericCharArray);
      console.log("Selected OK to numeric characters");
      console.log(possibleCharactersArray);
    } else {
      console.log("Selected Cancel to numeric characters");
    }
    
    
    // Confirm whether to use lowercase characters.
    var isLowercaseChar = confirm("Click OK to confirm including lowercase characters");

    // If isLowercaseChar == true, add all lowercase characters to possibleCharactersArray
    if (isLowercaseChar) {
      possibleCharactersArray = possibleCharactersArray.concat(lowercaseCharArray);
      console.log("Selected OK to lowercase characters");
      console.log(possibleCharactersArray);
    } else {
      console.log("Selected Cancel to lowercase characters");
    }
    
    
    // Confirm whether to use uppercase characters.
    var isUppercaseChar = confirm("Click OK to confirm including uppercase characters");

    // If isUppercaseChar == true, add all uppercase characters to possibleCharactersArray
    if (isUppercaseChar) {
      possibleCharactersArray = possibleCharactersArray.concat(uppercaseCharArray);
      console.log("Selected OK to uppercase characters");
      console.log(possibleCharactersArray);
    } else {
      console.log("Selected Cancel to uppercase characters");
    }


    // Check if possibleCharactersArray is empty. If so, prompt user they must select special, numeric, lowercase or uppercase characters and call generatePossibleCharacters()
    if (possibleCharactersArray.length === 0) {
      alert("You must select special, numeric, lowercase or uppercase characters");
      generatePossibleCharacters();
      
      // Else, return possibleCharactersArray
    } else {
      console.log("Returning possibleCharactersArray");
      return possibleCharactersArray;
    }

  }

}


// After all prompts are answered, password is generated
// Randomly select correct amount of characters from possibleCharactersArray and add to passwordArray
// Password should be correct length and contain at least one of each type of character selected by the user. If not, randomly select a new password from possibleCharactersArray
// return passwordArray




function generatePassword() {


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
