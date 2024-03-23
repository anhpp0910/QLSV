var showInfo = function () {
  var sinhVien = {
    maSV: Number(document.getElementById("txtMaSV").value),
    tenSV: document.getElementById("txtTenSV").value,
    loaiSV: document.getElementById("loaiSV").value,
    diemToan: Number(document.getElementById("txtDiemToan").value),
    diemVan: Number(document.getElementById("txtDiemVan").value),
    diemTB() {
      return (this.diemToan + this.diemVan) / 2;
    },
    xepLoai() {
      var result = "";
      if (this.diemTB() >= 8) {
        result = "Giỏi";
      } else if (this.diemTB() >= 6.5 && this.diemTB() < 8) {
        result = "Khá";
      } else if (this.diemTB() >= 5 && this.diemTB() < 6.5) {
        result = "Trung bình";
      } else {
        result = "Yếu";
      }
      return result;
    },
  };

  document.getElementById("spanTenSV").innerHTML = sinhVien.tenSV;
  document.getElementById("spanMaSV").innerHTML = sinhVien.maSV;
  document.getElementById("spanLoaiSV").innerHTML = sinhVien.loaiSV;
  document.getElementById("spanDTB").innerHTML = sinhVien.diemTB();
  document.getElementById("spanXepLoai").innerHTML = sinhVien.xepLoai();
};
