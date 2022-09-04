//bài 1
function tienthue() {
    var ten = document.getElementById('ten').value;
    var thunhap = document.getElementById('thunhap').value * 1;
    var songuoiphuthuoc = document.getElementById('songuoiphuthuoc').value * 1;
    var output=document.getElementById('thue')
    if (thunhap > 0) {
        var sotien = 0;
        if (thunhap <= 60) {
            sotien = 5 / 100;
        }
        else if (thunhap <= 120) {
            sotien = 10 / 100
        }
        else if (thunhap <= 210) {
            sotien = 15 / 100
        }
        else if (thunhap <= 384) {
            sotien = 20 / 100
        }
        else if (thunhap <= 624) {
            sotien = 25 / 100
        }
        else if (thunhap <= 960) {
            sotien = 30 / 100
        }
        else if (thunhap > 960) {
            sotien = 35 / 100
        }
        else {
            alert('Nhập lại')
        }
        var tax = new Intl.NumberFormat('Vn-vn').format((thunhap - 4 - songuoiphuthuoc * 1.6) * sotien)
        var ketQua = "Ông/Bà " + ten + " cần nộp số tiền thuế " + tax + " triệu đồng ";
        output.innerHTML = ketQua;
        output.style.display = "block";
    }
    else {
        alert('Nhập lại')
    }
}
//bài 2
function somuonketnoi(){
    if(document.getElementById('doanh_nghiep').checked){
    document.getElementById('box').style.display='block'
    }
    else{
        document.getElementById('box').style.display='none'
    }
}
function thanhToan(){
    var maso=document.getElementById('maso').value;
    var so_kenh=document.getElementById('so_kenh').value*1;
    var output=document.getElementById('thanhToan')
    var totalCost=0;
    if(document.getElementById('nhadan').checked){
        totalCost= 4.5+20.5+7.5*so_kenh;
    }
    else if(document.getElementById('doanh_nghiep').checked){
        var somuonketnoi=document.getElementById('somuonketnoi').value*1;
        if(somuonketnoi <=10){
            totalCost= 15+75+50*so_kenh;
        }
        else{
            totalCost= 15+75+5*(somuonketnoi-10)+50*so_kenh;
        }
    }
    var ketQua="số mã củakhách: "+maso+" cần thanh toán tiền cáp "+totalCost+" $";
    output.innerHTML = ketQua ;
    output.style.display="block";
}