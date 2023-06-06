function trangChuController($scope, $http) {
    $scope.lstXe =[];

    var apiUrl = 'http://localhost:3000/xes';    // Lấy danh sách từ xe.json
    // Call api lấy dữ liệu
    $http.get(apiUrl)
    .then (function (response) {
        $scope.lstXe = response.data;
    })
    .catch (function () {
        // xử lý lỗi
    });
}