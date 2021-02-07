//https://github.com/joinalzx/basic-js

 // kiloToMeter Starting ....
 function kilometerToMeter (kilometer){
    var meter = kilometer * 1000;
       return meter;
   }
   var totalMeter = kilometerToMeter(7)
   console.log(totalMeter);

// hotelCost Starting ....
function hotelCost(days){
    var rent = 0;
    if(days<=10){
        rent = days * 100;
    } else if (days<=20){
        var first10days = 10 * 100;
        var remaining = days - 10;
        var second10days = remaining * 80;
        rent = first10days + second10days;
    }else {
        var first10days = 10*100;
        var second10days = 10* 80;
        var remaining = days - 20;
        var lastpart = remaining * 50;
        rent = first10days + second10days + lastpart;
    }return rent;
   } 
   console.log(hotelCost(19));
   
// megaFriend Starting....

var friendList = ["Abdul Aziz","panu mollah", "Aminul Islam", "Mushfiqur Rahman"];
var megaFriend = function(friendList){
    var longest = friendList.reduce(function(a,b){
    return (a.length > b.length) ? a : b;
  });
    return longest;
}
console.log(megaFriend(friendList));
  

//budgetCalcualtor Starting....
function budgetCalculator (gori, phone, laptop){
    var budget = gori + phone + laptop;
    return budget;
}
var result = budgetCalculator(50, 100, 500);
console.log(result);
