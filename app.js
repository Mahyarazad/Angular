(function () {
    'use strict';

    angular.module('FoodApp', [])
        .controller('FoodController', FoodController);
    
        FoodController.$inject = ['$scope'];
        function FoodController($scope){
            $scope.checkMeal = function(){
                

                if($scope.foodInput === undefined || $scope.foodInput.length === 0){
                    $scope.message = "Please enter data first";
                    return;
                }

                var splittedText = $scope.foodInput.split(",");            
                console.log(splittedText);
                if (splittedText.length <= 3) {
                    $scope.message = "Enjoy!"
                }
                if (splittedText.length > 3) {
                    $scope.message = "Too much!"
                }
            }

        }
})();
