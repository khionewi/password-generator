// Assignment code here

//Declare variables for character types
var resourceLowercase = "abcdefghijklmnopqrstuvwxyz";
var resourceUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var resourceNumeric = "0123456789";
var resourceSpecial = "!@#$%^&*()_+";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//User clicks button to generate password
//Event listener is used to call to function writePassword to prompt user for password criteria
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

 
function writePassword() {
  //User is prompted to enter a password length
  var passwordLength = prompt("Enter a password length between 8 and 128 characters");

  //Validate length entered between 8 and 128 characters 
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters");
   }

  //User is prompted to select character types to include in the password
  //User is prompted to select lowercase, uppercase, numeric, and/or special characters
  var isLowercase = confirm("Include lowercase characters?");
  var isUppercase = confirm("Include uppercase characters?");
  var isNumeric = confirm("Include numeric characters?");
  var isSpecial = confirm("Include special characters?");

    //Validate user selects at least one character type
  if (!isLowercase && !isUppercase && !isNumeric && !isSpecial) {
    alert("At least one character type must be selected");
   }

   //variable is defined for password
var password = "";

//Password is generated that matches the selected criteria
    var resource = " ";
    console.log(resource);

    if (isLowercase==true) {
      resource += resourceLowercase;
    }
    console.log(resource);
    if (isUppercase==true) {
        resource +=resourceUppercase;
    }
    console.log(resource);
    if (isNumeric==true) {
      resource += resourceNumeric;
    }
    console.log(resource);
    if (isSpecial==true) {
      resource +=resourceSpecial;
    }

    console.log(resource);

  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * password.length);
    password += resource.charAt(randomIndex);
  }

  //Password is displayed in an alert or written to the page
  window.alert("Your password is: " + password);

}

