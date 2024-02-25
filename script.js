// Assignment code here

//User clicks button to generate password

//onclick event listener is used to call to prompt user for password criteria

//User is prompted to enter a password length 
//var passwordLength = prompt("Enter a password length between 8 and 128 characters");

//Validate length entered between 8 and 128 characters 
//if (passwordLength < 8 || passwordLength > 128) {
  //alert("Password length must be between 8 and 128 characters");
  //return;

//User is prompted to select character types to include in the password
//User is prompted to select lowercase, uppercase, numeric, and/or special characters
//var lowercase = confirm("Include lowercase characters?");
//var uppercase = confirm("Include uppercase characters?");
//var numeric = confirm("Include numeric characters?");
//var special = confirm("Include special characters?");


//Validate user selects at least one character type
//if (!lowercase && !uppercase && !numeric && !special) {
  //alert("At least one character type must be selected");
  //return;
//}

//var password = "";

//var resourceLowercase = "abcdefghijklmnopqrstuvwxyz";
//var resourceUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//var resourceNumeric = "0123456789";
//var resourceSpecial = "!@#$%^&*()_+";

//Password is generated that matches the selected criteria
//for (var i = 0; i < passwordLength; i++) {
  //var randomIndex = Math.floor(Math.random() * resource.length);
  //password += resource.charAt(randomIndex);
//}

//Password is displayed in an alert or written to the page


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
