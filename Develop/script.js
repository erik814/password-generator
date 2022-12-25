
var generateBtn = document.querySelector("#generate");
var numberOfCharacters;
var useUpperCase;
var useLowerCase;
var useNumbers;
var useSpecialCharacters;
var selectedCharacters = []
var randomCharacters = ""
var randomPassword = [];

//randompassword was ""    randomcharacters was []



var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
var nums = ["1","2","3","4","5","6","7","8","9","0",];
var specialCharacters = ["!","@","#","$","%","^","&","*","(","(","_","-","+","=","{","}","[","]","|",";",":","<",",",">",".","?","/",];




function generatePassword(){
  numberOfCharacters = parseInt(prompt("How many characters would you like to use? Please select a number from 8-128"));
  


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



  for(var x = 0; x < numberOfCharacters; x++){
    randomCharacters = selectedCharacters[(Math.floor(Math.random() * (selectedCharacters.length)))];
    randomPassword.push(...randomCharacters);
  }

  var finalPassword = randomPassword.join("");
  return(finalPassword);
  


// I think i need to turn randomPassword from seperate characters into a string

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
