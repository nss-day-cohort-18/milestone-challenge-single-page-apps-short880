"use strict";
console.log("MAIN");

/*************************
We have to define the userInput && output element for our card.
**************************/

let outputDiv = document.getElementById("output");
let input = document.getElementById('userInput');

/*************************
postToDOM function will set HTML output format
postToDOM will also limit the amount of rows allowed
  (starting at 1) (resetting at 3)
**************************/

function postToDOM(cars) {
  // console.log('main.js inventory: ', cars);
  var counter = 1;
  let card = document.createElement('div');
  card.classList.add(`container`);
  card.classList.add(`row`);
  let fill;
  for (fill in cars) {
    // console.log("hello", cars)
    let blankCard = '';
    let car = cars[fill];
    // console.log("ddd", car);
      blankCard += `<div class="col-md-4 carCard" "title"=click to  edit">
                  <div class="inside black-border">
                  <h3 class="text-center">${car.make}
                  ${car.model}</h3>
                  <h4>${car.year}</h4>
                  <h4>${car.price}</h4>
                  <p>${car.description}</p>
                  </div>
                  </div>`;
    card.innerHTML += blankCard;
    outputDiv.append(card);
    var count = counter % 3;
    if (count === 0) {
      card = document.createElement('div');
      card.classList.add(`container`);
      card.classList.add(`row`);
    }
    counter++;
  }
/**********************
  We have to loop through JSON and provide HTML layout
***********************/

/**********************
Now we create eventListeners call
***********************/

CarLot.activateEvents();

}

/**********************
load inventory for callback
***********************/


CarLot.loadInventory();
