function trangChuController ($scope) {
    $scope.number1 = 0;
    $scope.number2 = 0;
    $scope.finalSum = 0;
    $scope.sum = function () { 
        $scope.finalSum = Number.parseInt($scope.number1) +
            Number.parseInt($scope.number2);
    };
}