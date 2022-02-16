function check() {
    var diem = 0;
    if (document.getElementById("c1").value == 4)
        diem = diem + 0.25;
    if (document.getElementById("c2").value == 1)
        diem = diem + 0.25;
    if (document.getElementById("c3").value == 4)
        diem = diem + 0.25;
    if (document.getElementById("c4").value == 2)
        diem = diem + 0.25;
    if (document.getElementById("c5").value == 1)
        diem = diem + 0.25;
    if (document.getElementById("c6").value == 3)
        diem = diem + 0.25;
    if (document.getElementById("c7").value == 2)
        diem = diem + 0.25;
    if (document.getElementById("c8").value == 3)
        diem = diem + 0.25;
    alert("Điểm = " + diem + "\nLàm nốt tự luận để được thêm 6 điểm :))");

}