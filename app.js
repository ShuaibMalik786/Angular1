var app = angular.module("myApp", ["ngRoute"]);


app.controller('myctrl1',['$scope', function($scope) {

    $scope.setTab = function(newTab){
      $scope.tab = newTab;
    };

    $scope.isSet = function(tabNum){
      return $scope.tab === tabNum;
    };

}]);

app.controller('myctrl2',['$scope', function($scope) {

      $scope.setTabs = function(newTab2){
      $scope.tab = newTab2;
    };

        $scope.isSets = function(tabNum2){
      return $scope.tab === tabNum2;
    };
}]);