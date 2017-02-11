'use strict';
console.log("activateEvents");
var CarLot = (function(firstCarLot) {
  firstCarLot.activateEvents = function(event) {
    var cardNum = document.getElementsByClassName('inside');
    for (var i = 0; i < cardNum.length; i++) {
      cardNum[i].addEventListener('click', CarLot.changeBorder_Background);
    }
  };

  return firstCarLot;

})(CarLot || {});
