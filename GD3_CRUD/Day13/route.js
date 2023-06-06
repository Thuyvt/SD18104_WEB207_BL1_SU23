// Khởi tạo app
var appXe = angular.module("appXe", ["ngRoute"]);

// Khởi tạo controller
appXe.controller("trangChuController", trangChuController);
appXe.controller("themXeController", themXeController);
appXe.controller("xoaXeController", xoaXeController);
appXe.controller("suaXeController", suaXeController);

//  Khai báo route
appXe.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix("");
    // Chuyển trang
    $routeProvider
    .when("/xes", {
        templateUrl: "./page/trang-chu.html",
        controller: "trangChuController"
    })
    .when("/lien-he", {
        templateUrl: "./page/lien-he.html",
    })
    .when("/xes/add", {
        templateUrl: "./page/them-xe.html",
        controller: "themXeController"
    })
    .when("/xes/delete/:id", {
        templateUrl: "./page/xoa-xe.html",
        controller: "xoaXeController"
    })
    .when("/xes/sua/:id", {
        templateUrl: "./page/sua-xe.html",
        controller: "suaXeController"
    })
});
