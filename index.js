// Code your solutions in this file
//for (let age = 30; age < 40; age++){
   // console.log (`I'm ${age} years old. Happy birthday to me !`);
 //   debugger;
//}

//const gifts = ["teddy bear", "drone","doll"];

//function wrapGifts(gifts){
  //  for (let i = 0; i < gifts.length; i++){
    //    console.log(`wrapped ${gifts[i]} and added a bow!`);
      //  debugger;
    //}
    //return gifts;
//}
//wrapGifts(gifts);
const names = [];

function writeCards(names, event){
    let message = []
    for (let i = 0; i < names.length; i++){
        message.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message;
}

function countDown (makeCount){
    while (makeCount > 0){
    console.log(makeCount);
    makeCount--;
   }
console.log(makeCount);
}