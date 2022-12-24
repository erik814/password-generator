// Assignment Code
var generateBtn = document.querySelector("#generate");
var numberOfCharacters;
var useUpperCase;
var useLowerCase;
var useNumbers;
var useSpecialCharacters;
//i added this one vvv
var selectedCharacters = []
var finalPassword = "";

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var nums = ["1","2","3","4","5","6","7","8","9","0",];
var specialCharacters = ["!","@","#","$","%","^","&","*","(","(","_","-","+","=","{","}","[","]","|",";",":","<",",",">",".","?","/",];




function generatePassword(){
  numberOfCharacters = parseInt(prompt("How many characters would you like to use from 8-128?"));
  // can use numberOfCharacters as a variable now

  useUpperCase = confirm("Do you want to use uppercase letters?");
  useLowerCase = confirm("Do you want to use lowercase letters?");
  useNumbers = confirm("Do you want to use numbers?");
  useSpecialCharacters = confirm("Do you want to use special characters?");



  if(useUpperCase){
    selectedCharacters.push(...upperCase)
  }

  if(useLowerCase){
    selectedCharacters.push(...lowerCase)
  }

  if(useNumbers){
    selectedCharacters.push(...nums)
  }

  if(useSpecialCharacters){
    selectedCharacters.push(...specialCharacters)
  }




  // for(var x = 0; x < numberOfCharacters.length; x++){
  //   var randomPassword = selectedCharacters[(Math.floor(Math.random() * (selectedCharacters.length)))];
  //     console.log(randomPassword);
  // }

  for(var x = 0; x < numberOfCharacters; x++){
    var randomPassword = selectedCharacters[(Math.floor(Math.random() * (selectedCharacters.length)))];
    console.log(randomPassword);
  }

}




//  finalPassword +=  <--- will add another character


// Don't touch any code below this
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
