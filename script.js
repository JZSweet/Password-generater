var generateBtn = document.querySelector("#generate");
const lowerCaseChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const upperCaseChars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const passwordChar = lowerCaseChars.concat(upperCaseChars);
var specCharArr = ["@", "#", "$", "&", "*", "<", ">"];
var number = ["1", "2", "3", "4", "4", "5", "6", "7", "8", "9", "0"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  var length = parseInt(prompt("How long should the password be?  (At least 8 characters and no more than 128 characters)"));
  var result = "";
  var ranPasswordChar = passwordChar

  var includeSpecCharArr = confirm("Would you like to inculde special character?");
  if (includeSpecCharArr) {
    ranPasswordChar = ranPasswordChar.concat(specCharArr);
  }

  var includeNumber = confirm("Would you like to inculde Numbers?");
  if (includeNumber) {
    ranPasswordChar = ranPasswordChar.concat(number);
  }

  for (var i = 0; i < length; i++) {
    var random = Math.floor(Math.random() * Math.floor(ranPasswordChar.length));
    result = result + ranPasswordChar[random];
  }
  console.log("I'm a label so you can find this log easier", result);

  return result;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);