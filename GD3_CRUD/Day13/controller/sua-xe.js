function suaXeController($scope, $http) {
    $scope.id = $routeParams.id;
    $scope.xe = {
        id: "",
        ten: "",
        loai: "",
        hang:   "",
        gia: 0
    }
    $http.get("http://localhost:3000/xes/" + $scope.id)
    .then (function (response) {
        $scope.xe = response.data;
    })
    .catch (function (error) {});
    // Hàm sửa
    $scope.xacNhanSua = function() {
        $http.put("http://localhost:3000/xes/" + $scope.id)
        .then (function () {
            alert("Sửa thành công");
        })
        .catch (function (error) {
            alert("Sửa thất bại");
        });
    }
}