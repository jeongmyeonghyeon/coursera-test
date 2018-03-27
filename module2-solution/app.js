(function () {

  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.toBuyItems = ShoppingListCheckOffService.toBuyItems;

    toBuyList.boughtItem = function (itemIndex) {
      ShoppingListCheckOffService.boughtItem(itemIndex);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var alreadyBuyList = this;

    alreadyBuyList.alreadyBuyItems = ShoppingListCheckOffService.boughtItems;
  }

  function ShoppingListCheckOffService () {
    var service = this;

    // toBuy, Array
    service.toBuyItems = [
      {
        "name": "Apple",
        "quantity": 10
      },
      {
        "name": "Banana",
        "quantity": 5
      },
      {
        "name": "Cherries",
        "quantity": 20
      },
      {
        "name": "Dates",
        "quantity": 15
      },
      {
        "name": "Elderberry",
        "quantity": 3
      }
    ];

    // bought, Array
    service.boughtItems = [];

    service.boughtItem = function (itemIndex) {
      service.boughtItems.push(service.toBuyItems[itemIndex]);
      service.toBuyItems.splice(itemIndex, 1);
    };
  }

})();
