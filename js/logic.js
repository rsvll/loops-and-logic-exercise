var myNum = 3;
//=============== if ===================
// if statements test to see if the expression nested within the () evaluates to true, if it does it preforms the code nested within the following{} if it does not no action is taking by default
if (myNum > 5){
  console.log(myNum + ' is greater than 5');
}

//============ if, else ==========
//else statements are not required though they can be set to perform some default action if the if statement evaluates to false
if (myNum === 5){
  console.log('myNum is currently set to 5');
}else{
  console.log('myNum is currently not 5')
}

//=========== if, else if, else ===========
//else if statements can be added on to if statements to perform additional logic tests if the previous if or else if statements evaluate to false.
if(myNum > 0){
  console.log('myNum is greater than 0');
} else if (myNum < 0){
  console.log('myNum is less than 0');
} else{
  console.log('myNum is either 0 or is not a number')
}
//anything other then 0 is true
if(1 == true){
  console.log('1 is truthy');
}

//=============== loops ===================












// setTimeout(wakeUpUser, 2000);
//  function wakeUpUser() {
//  alert("Are you going to stare at this boring page forever?");
//  }
