"use strict";
console.log("INVENTORY");
/************************
  First iiFE
*************************/
var CarLot = (function () {

/************************
  Private Array
*************************/

  var cars;

return {
/************************
  Access JSON function
*************************/
  loadInventory: function(callback){

var inventoryData = new XMLHttpRequest();
/************************
connect to function from main.js call
*************************/

    inventoryData.addEventListener("load", function(){
      // console.log("loadSuccess");

/************************
  Parse JSON file and call function
*************************/
    var data = JSON.parse(event.target.responseText);
    // console.log('inventory A: ', data);
    cars = data.cars;
    // console.log("data", data);
    // console.log("inventory: ", cars);
    postToDOM(cars);
  });

inventoryData.open("GET", "../inventory.json");
inventoryData.send();
},
getInventory: function(callback) {
  return cars;
  }
};
/************************
return private information
*************************/

})(CarLot || {});
