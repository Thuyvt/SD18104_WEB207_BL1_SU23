function gioiThieuController($scope) {
    // biến dạng mảng đối tượng
    $scope.svArray = [
        {
            ma: "ph1234",
            ten: "Nguyễn Văn A",
            lab1: 4,
            lab2: 5,
            trangThai: false
        },
        {
            ma: "ph2345",
            ten: "Nguyễn Văn B",
            lab1: 8,
            lab2: 10,
            trangThai: true
        }
    ];
    // tạo đối tượng
    $scope.sinhVien = {
        ma: "",
        ten: "",
        lab1: 0,
        lab2: 0,
        trangThai: false
    }
    // tạo hàm thêm cho sự kiện click vào nút thêm
    $scope.them = function () {
        var sv = {ma: $scope.sinhVien.ma,
                ten: $scope.sinhVien.ten,
                lab1: $scope.sinhVien.lab1,
                lab2: $scope.sinhVien.lab2,
                trangThai: $scope.kiemTra($scope.sinhVien.lab1, $scope.sinhVien.lab2)
            }
        // dùng push để thêm đối tượng vào array
        $scope.svArray.push(sv);
    }
    // tạo hàm trả về trạng thái
    $scope.kiemTra = function(diem1, diem2) {
        var tb = (diem1 + diem2) / 2;
        if (tb <= 5) {
            return false;
        } else {
            return true;
        }
    }
    
}