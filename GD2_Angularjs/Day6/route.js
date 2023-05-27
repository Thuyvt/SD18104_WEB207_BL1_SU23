// Khởi tạo app angualarjs
// Khai báo thư viện phụ thuộc
var myApp = angular.module("myApp", ["ngRoute"]);
// Khởi tạo controller với app
myApp.controller("trangChuController", trangChuController);
myApp.controller("gioiThieuController", gioiThieuController);
myApp.controller("lienHeController", lienHeController);
// Cấu hình chuyển nội dung giữa các trang
myApp.config(function($routeProvider, $locationProvider) {
    // Xóa khoảng trắng
    $locationProvider.hashPrefix("");
    // Chuyển trang
    $routeProvider
    .when("/home", {
        templateUrl: "./pages/trang-chu.html",
        controller: "trangChuController"
    })
    .when("/gioi-thieu", {
        templateUrl: "./pages/gioi-thieu.html",
        controller: "gioiThieuController"
    })
    .when("/lien-he/:ma", {
        templateUrl: "./pages/lien-he.html",
        controller: "lienHeController"
    })
    .otherwise({ 
        // Chạy vào trang home ở tất cả các trường hợp khác
        redirectTo: "/home"    
    })
}) 
