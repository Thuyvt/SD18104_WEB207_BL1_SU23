function xoaXeController($scope, $routeParams, $http) {
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
    // Hàm xác nhận xóa
    $scope.xacNhanXoa = function() {
        $http.delete("http://localhost:3000/xes/" + $scope.id)
        .then (function () {
            alert("Xóa thành công");
        })
        .catch (function (error) {
            alert("Xóa thất bại");
        });
    }
}