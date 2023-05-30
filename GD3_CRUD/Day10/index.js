var app = angular.module("JsonServerDemo", []);
// đăng ký controllers
app.controller("listAccount", function ($scope, $http) {
    // Khai báo biến chứa danh sách account
    $scope.lstAccounts = [];
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
}); 