"use strict";

var CarLot = (function (otherCarLot) {

    otherCarLot.changeCard = function() {

      var carCards = document.getElementsByClassName("car-card");
      var chosenCard = event.currentTarget;




      for (var i = 0; i < carCards.length; i++) {
        changeBackgroundAndBorder(i, carCards, chosenCard);
      }

        inputFunction(chosenCard);



        function changeBackgroundAndBorder(){
          console.log("yoyo");

          if (carCards[i] === chosenCard) {
            carCards[i].classList.toggle('dynamic-class');
          }
          if (carCards[i]!== chosenCard) {
            carCards[i].classList.remove('dynamic-class');
          }
        };

    function inputFunction(){
      console.log('inputFunction');

      var input = document.getElementById('input-box');
      input.focus();
      input.value = "";

      input.addEventListener("keypress", function() {
        if (chosenCard.classList.contains("dynamic-class")) {
          chosenCard.childNodes[9].innerHTML = "Description: " + input.value;
        }
      });

    };

  };

})(CarLot || {});
