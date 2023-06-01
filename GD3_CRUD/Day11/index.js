var app = angular.module("JsonServerDemo", []);
// đăng ký controllers
app.controller("listAccount", function ($scope, $http) {
    // Khai báo biến
    // Khai báo biến chứa danh sách account
    $scope.lstAccounts = [];
    $scope.acc = {
        id: 0,
        name: "",
        email: "",
        password: ""
    };
    $scope.selectedIndex = -1;
    // Khai báo đường dẫn api
    const apiAccount = "http://localhost:3000/account";
    // Gửi yêu cầu đến api để lấy ra được danh sách
    $http.get(apiAccount)// request dạng get để đọc dữ diệu
    .then(function (response) {// sau khi có dữ liệu, xử lý dữ liệu
        console.log(response);
        $scope.lstAccounts = response.data; // lấy giá trị data trong dữ liệu trả về  
    })
    .catch(function (error) {
        console.log(error);
    })

    // Tạo hàm submit form 
    $scope.onSubmit = function (event) {
        event.preventDefault();
        console.log($scope.acc)
        // gọi api lưu dữ liệu account vừa nhập
        $http
        .post(apiAccount, $scope.acc)
        .then (function () {
            console.log("Thêm thành công");
            $scope.lstAccounts.push($scope.acc);
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    // Xóa đối tượng
    $scope.delete = function (index) {
        var id = $scope.lstAccounts[index].id;
        $http
        .delete(apiAccount + "/" + id)
        .then(function () {
            // xóa dòng dữ liệu trên bảng
            $scope.lstAccounts.splice(index, 1);
        })
        .catch (function(error) {
            console.log(error);
        })
    }

    // Hàm lấy giá trị dòng được chọn
    $scope.selectAcc = function (index) {
        // Lấy id dòng được chọn
        var id = $scope.lstAccounts[index].id;
        $http
        .get(apiAccount +"/" + id)
        .then(function (response) {
            console.log(response)
            $scope.acc = response.data;
            console.log($scope.acc)
        }) 
        .catch (function (error) {
        })
    }
}); 