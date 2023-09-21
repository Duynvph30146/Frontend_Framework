function sanPhamController($scope) {
    $scope.listSp = {
            id: 1,
            tensp: "Iphone",
            giasp: 13000000,
        },
        $scope.listSp2 = {
            id2: 2,
            tensp2: "SamSung",
            giasp2: 9000000,
        };

    $scope.tinhTongTien = function () {
        return ($scope.listSp.giasp * $scope.soLuong) + ($scope.listSp2.giasp2 * $scope.soLuong2);
    };


}