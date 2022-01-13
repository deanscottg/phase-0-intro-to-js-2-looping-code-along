// Code your solutions in this file
function writeCards(giftArray,event){
    const namesArray=[];
     for (let i = 0; i < giftArray.length; i++){
       namesArray.push(`Thank you, ${giftArray[i]}, for the wonderful ${event} gift!`)
     };
     return namesArray;
    }
    function countDown(number){
        for (let i = number; i >= 0; i--){
           console.log(i);
        }
    }