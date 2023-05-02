var characterLength = 8;
var choice = [];
// options that will be presented to user
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var number = ['0','1','2','3','4','5','6','7','8','9','0'];
var specialChar = [' ','!','"','#','$','%','&','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','~'];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  var password = "";
  for(var i = 0; 1 < characterLength; i++) {
    var randomCharacter = Math.floor(Math.random() * choice.length)
    password = password + choice[randomCharacter];
  }
  return password;
}

function getPrompts() {
    choice = [];

    characterLength = parseInt(prompt("How long do you want your password to be? Must choose number between 8-128"));
// alerts user if they have inputted an invalid number option
    if(isNaN(characterLength) || characterLength <8 || characterLength > 128) {
      alert("Error: Must type a number between 8-128. Please try again.");
      return false;
    }

    if (confirm("Would you like to have lowercase letters in your password?")) {
      choice = choice.concat(lowerCase);
    }

    if (confirm("Would you like to have uppercase letters in your password?")) {
      choice = choice.concat(upperCase);
    }

    if (confirm("Would you like to have numbers in your password?")) {
      choice = choice.concat(number);
    }

    if (confirm("Would you like to have special characters in your password?")) {
      choice = choice.concat(specialChar);
    }

    return true;
}