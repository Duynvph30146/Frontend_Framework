function myCtrl($scope) {
    $scope.luongNam = 0;
    $scope.thueTNCN = 0;
    $scope.tinhThue = function () {
        const luongNam = parseFloat($scope.luongNam);
        let thueTNCN = 0;
        if (luongNam <= 60000000) {
            thueTNCN = luongNam * 0.05;
        } else if (luongNam >= 60000000 && luongNam <= 120000000) {
            thueTNCN = luongNam * 0.1;
        } else if (luongNam >= 120000000 && luongNam <= 216000000) {
            thueTNCN = luongNam * 0.15;
        } else if (luongNam >= 216000000 && luongNam <= 384000000) {
            thueTNCN = luongNam * 0.2;
        }
        $scope.thueTNCN = thueTNCN;
    };
};