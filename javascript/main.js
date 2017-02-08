"use strict";

var carOuput = document.getElementById('car-output');

function DOM(data) {

  /* 1) for loop --- JSON
     2) add HTML */

  for (var i = 0; i < data.length; i++) {
    var make = data[i].make;
    var model = data[i].model;
    var year = data[i].year;
    var price = data[i].price;
    var description = data[i].description;

    carOutput.innerHTML += `<div class="col-md-4 car-card">
    <p>Make: ${make}</p>
    <p>Make: ${model}</p>
    <p>Make: ${year}</p>
    <p>Make: ${price}</p>
    <p>Make: ${description}</p>
    </div>`;
  }

  CarLot.eventListeners(); // Called from iiFe

}

///// Runs JSON

CarLot.loadSuccess();
