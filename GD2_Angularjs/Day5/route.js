// Khởi tạo ứng dụng angularjs
// Khai báo các thư viện phụ thuộc
var mySPA = angular.module("mySPA", ["ngRoute"]); //cung cấp các tính năng liên quan đến routing, cho phép bạn quản lý các route và hiển thị 
//nội dung tương ứng với mỗi route trong ứng dụng đơn trang (SPA).

// Khởi tạo controller được sử dụng trong file html với app
mySPA.controller("myCtrl",myCtrl);
mySPA.controller("sanPhamController", sanPhamController);
mySPA.controller("app1", app1);


// Cấu hình url, chuyển được nội dung các trang theo từng url
mySPA.config(function ($routeProvider, $locationProvider) { //config Phương thức này được sử dụng để cấu hình các tham số và tùy chọn cho ứng dụng AngularJS 
    //Xóa khoảng trắng
    $locationProvider.hashPrefix(""); //là 1 tham số của config dùng để cấu hình quy tắc URL và định dạng URL của ứng dụng
    //Cấu hình chuyển trang
    $routeProvider //là 1 tham số của config có thể cấu hình các route
        .when("/trang-chu", {
            
            templateUrl: "./pages/trang-chu.html",
            controller: "app1"
        })
        .when("/thong-ke", {
            templateUrl: "./pages/thong-ke.html"
            
        })
        .when("/chi-tiet", {
            templateUrl: "./pages/chi-tiet-sp.html",
            controller: "myCtrl"
        })
        .when("/qlsp", {
            templateUrl: "./pages/qlsp.html",
            controller: "sanPhamController"

        })
        .otherwise({
            redirectTo: "/trang-chu" //.otherwise() để chỉ định route mặc định. Nếu không có route nào khớp với URL, 
            //ứng dụng sẽ tự động chuyển hướng đến "/trang-chu".
        })
});