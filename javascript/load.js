"use strict";

////// Main CarLot iife

var CarLot = (function(otherCarLot) {

    var inventory = [];

  return {

    var dataRequest = new XMLHttpRequest();
console.log("loadSuccess");

      loadSuccess: function() {

      dataRequest.addEventListener("load", function() {

        console.log("loaded!");

        var data = JSON.parse(event.target.responseText);
        inventory.push(data);
        dataRequest.open("GET", "/inventory.json");
        dataRequest.send();
        console.log("dataTest", data);
        console.log("inventory: ", inventory);
        DOM(data);
      });

  },

    loadError: function(event) {
    console.log("NO LOAD!!!", event);
};

  return otherCarLot;
})(CarLot || {});
