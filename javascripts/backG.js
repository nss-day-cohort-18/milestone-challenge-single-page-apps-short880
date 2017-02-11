"use strict";
console.log("backG");
/************************
Stying iiFE
  - changes border
  - edit description
*************************/

var CarLot = (function(firstCarLot) {
  firstCarLot.changeBorder_Background = function() {
    var productCards =
    document.getElementsByClassName('inside');

/************************
  This tells which card was clicked
*************************/

    var clickedOn = event.currentTarget;
    console.log("clicked", event);
/************************
looping through inner-pad class
test parameters applied
*************************/
console.log("BACKGINSIDE");
        for (var i = 0; i < productCards.length; i++){
          changeBorder_Red(i, productCards, clickedOn);
        }
/************************
  Runs Edit Function
*************************/
        edit(clickedOn);
  };
  function changeBorder_Red(i, productCards, clickedOn) {
    if (productCards[i] === clickedOn) {
      productCards[i].classList.add("red-border");
/************************
  STOP. Referenced code (ABOVE).
    - if not the clicked on the & it has red black-border
    - The border will be removed.
*************************/
    }
      if (productCards[i] !== clickedOn && productCards[i].classList.contains("red-border")) {
        productCards[i].classList.remove("red-border");
      }
  }
/************************
Function edit();
  - put cursor in the input box
  - set value to blank
  - keypress eventListener
  - check for border class
  *************************/

  function edit(clickedOn) {
    input.focus();
    input.value = "";
    input.addEventListener('keydown', function() {
      if (clickedOn.classList.contains("red-border")) {
        clickedOn.childNodes[7].innerHTML = input.value;
/************************
  The Node.childNodes read-only property returns a live collection of child nodes of the given element.
*************************/
    };
});
}
return firstCarLot;

})(CarLot || {});
