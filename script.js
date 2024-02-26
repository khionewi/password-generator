// Assignment code here

//Declare variables for character types
var resourceLowercase = "abcdefghijklmnopqrstuvwxyz";
var resourceUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var resourceNumeric = "0123456789";
var resourceSpecial = "!@#$%^&*()_+";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//User clicks button to generate password
//onclick event listener is used to call to prompt user for password criteria
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//User is prompted to enter a password length 
function writePassword() {
  var passwordLength = prompt("Enter a password length between 8 and 128 characters");

  //Validate length entered between 8 and 128 characters 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
    //return;
  }

  //User is prompted to select character types to include in the password
  //User is prompted to select lowercase, uppercase, numeric, and/or special characters
  var lowercase = confirm("Include lowercase characters?");
  var uppercase = confirm("Include uppercase characters?");
  var numeric = confirm("Include numeric characters?");
  var special = confirm("Include special characters?");

  console.log(lowercase);
  console.log(uppercase);
  console.log(numeric);
  console.log(special);

  console.log(passwordLength);
  console.log(resourceLowercase);
  console.log(resourceUppercase);
  console.log(resourceNumeric);
  console.log(resourceSpecial);


  //Validate user selects at least one character type
  if (!lowercase && !uppercase && !numeric && !special) {
    alert("At least one character type must be selected");
    //return;
  }

//works up to here!!

var password = "";

//Password is generated that matches the selected criteria


//Password is displayed in an alert or written to the page

// Write password to the #password input
//function writePassword() {
//  var password = generatePassword();
  //var passwordText = document.querySelector("#password");

//  function generatePassword() {
    var resource = " ";
    console.log(resource);

    if (lowercase==true) {
      resource += resourceLowercase;
    }
    console.log(resource);
    if (uppercase==true) {
        resource +=resourceUppercase;
    }
    console.log(resource);
    if (numeric==true) {
      resource += resourceNumeric;
    }
    console.log(resource);
    if (special==true) {
      resource +=resourceSpecial;
    }

    console.log(resource);

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * password.length);
    password += resource.charAt(randomIndex);
  }


  //passwordText.value = password;
  console.log (password);
  window.alert("Your password is: " + password);

}

//}
// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);
