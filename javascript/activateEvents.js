"use strict";
console.log("test");
////// Main CarLot iife

var CarLot = (function(otherCarLot) {
  console.log("test: inside");

  otherCarLot.eventListeners = function() {
    console.log('events');
    var cardAmount =
    document.getElemetnsByClassName('car-card');

  /// LOOPY

  for (var i = 0; i < cardAmount.length; i++) {
    console.log('looper--GreatMovie');
    cardAmount[i].addEventListener('click', CarLot.changeCard);
  }
};

    return otherCarLot;

})(CarLot || {});
