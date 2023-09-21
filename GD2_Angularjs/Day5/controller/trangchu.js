
 function app1($scope) {
    $scope.userData = {}; // Dữ liệu người dùng sẽ được lưu trữ ở đây
    $scope.showTable = false; // Ban đầu ẩn bảng
    $scope.submitForm = function () {
        // Khi nút "Submit" được nhấn, hiển thị bảng và lưu trữ dữ liệu người dùng
        $scope.showTable = true;
    };
};