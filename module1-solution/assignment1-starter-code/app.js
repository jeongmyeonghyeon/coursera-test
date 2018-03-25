(function () {
  'use strict';

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];

  function LunchCheckController ($scope) {
    $scope.title = "Lunch Checker";
    $scope.placeholder = "list comma separated dishes you usually have for lunch";
    $scope.buttonMessage = "Check If Too Much";
    $scope.inputColor = "MediumSeaGreen";
    $scope.inputFood = "";
    $scope.message = "";

    $scope.lunchCheckLive = function () {
      var foodLength = $scope.inputFood.split(",").length;
      if (foodLength > 3) {
        $scope.inputColor = "Tomato";
      } else {
        $scope.inputColor = "MediumSeaGreen";
      }
    };

    $scope.lunchCheck = function () {
      var foodLength = $scope.inputFood.split(",").length;
      console.log($scope.inputFood === "");
      if ($scope.inputFood === "") {
        $scope.message = "Please enter data first";
        return;
      }
      if (foodLength > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      }
    };
  }

})();
