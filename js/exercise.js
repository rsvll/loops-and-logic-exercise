// log every number from 0 - 100, including 0 and 100, but if the number is evenly divisible by 3 log 'fizz' instead, if the number is evenlly divisible by 5 lo 'buzz' instead, if the number is evely divisble by either 3 0r 5 log 'fizzbuzz' if it not evenly divisible by either 3 or 5 log the number
//======= richs work =======
// for (var x = 0; x <= 100; x++){
//
//   if(x % 3 === 0){
//     console.log('fizz');
//   } if( x % 5 === 0){
//       console.log('buzz');
//     }  if (x % 3 === 0 && x % 5 == 0){
//       console.log('fizzbuzz');
//     } else{
  //  console.log(x);
//}
// }

//============= kurts answers================
// ========== for =========
// for ( var x = 0; x <= 100; x++){
//   if (x === 0){
//     console.log(x);
//   } else if(x % 3 === 0 && x % 5 === 0){
//     console.log('fizzbuzz');
//   } else if (x % 5 === 0){
//     console.log('buzz');
//   } else if(x % 3 === 0){
//     console.log('fizz');
//   } else{
//     console.log(x);
//   }
// }
//========== while ===============
// 
// var y = 0;
// while(y <= 100){
//   if (y === 0){
//     console.log(y);
//   } else if (y % 3 === 0 && y % 5 === 0){
//     console.log('fizzbuzz');
//   } else if(y % 3 === 0){
//     console.log('fizz');
//   } else if (y % 5 === 0){
//     console.log('buzz');
//   } else{
//     console.log(y);
//   }
//   y++;
// }






// for (var x = 0; x <= 100; x++){
//   var msg = x;
//   if(x % 3 ==== 0){
//     msg = 'fizz';
//   }
//
// }

// ======= reverse ======

var food = ['pizza', 'hamburgers', 'fries', 'beer'];
food.reverse();
