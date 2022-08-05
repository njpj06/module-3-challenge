// Assignment code heres
var passwordCapital = "";
var passwordLowercase = "";
var passwordNumeric = "";
var passwordSpecial = "";
var capital = "ABCDEFGHIJKLMNOPQURSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var special = "!@#$%^&*()_+-=[]{},./?";
var passString = "";
var passResult = "";

//textArea displays the password on screen
var textArea = document.getElementById("password");

function characterTypes() {
  var passwordCapital = confirm(" Do you want to include Capital letters? ");
  var passwordLowercase = confirm(
    " Do you want to include Lowercase letters? "
  );
  var passwordNumeric = confirm(" Do you want to include Numbers? ");
  var passwordSpecial = confirm(" Do you want to include Special characters? ");
  if (
    passwordCapital === true ||
    passwordLowercase === true ||
    passwordNumeric === true ||
    passwordSpecial === true
  ) {
    //if uppercase letters are selected its added to the variable "passString"
    if (passwordCapital === true) {
      passString += capital;

      //if lowercase letters are selected, its added to the variable "passString"
      if (passwordLowercase === true) {
        passString += lower;
      }
      //if numbers are selected, its added to the variable "passString"

      //if special characters are selected, its added to the variable "passString"
      if (passwordSpecial === true) {
        passString += special;
      }
    }
    //This statement else if none of the variable were selected and goes back to the beginning of characterTyes function/
    else {
      alert("You have to at least chose one element.");
      characterTypes();
    }
  }
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var text = "";

  // function questions allows for loop back if a value less than 8 or greater than 128 was chosen
  function questions() {
    var passwordLength = prompt(
      "How long would you like your password to be? Please choose a number between 8 characters to 128 characters."
    );
    if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
      characterTypes();
      //
      for (let i = 0; i < passwordLength; i++) {
        let x = passString[Math.floor(Math.random() * passString.length)];
        passResult += x;
      }
      console.log(passResult);
      console.log(textArea);
      text = document.createTextNode(passResult);

      //removes old password in the instance "generate password" was clicked after the first was made
      textArea.innerHTML = "";
      textArea.appendChild(text);
      passResult = "";
    }
  }
  questions();
}

// writePassword now connected with the generate password button
generateBtn.addEventListener("click", () => {
  writePassword();
});
