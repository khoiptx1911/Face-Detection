// Khai báo hàm vẽ đường thẳng bằng thuật toán DDA
function drawLineDDA() {
    // Lấy giá trị x và y từ các trường input trong HTML
    let x1 = parseFloat(document.getElementById("x1").value);
    let y1 = parseFloat(document.getElementById("y1").value);
    let x2 = parseFloat(document.getElementById("x2").value);
    let y2 = parseFloat(document.getElementById("y2").value);

    // Tính toán độ lệch giữa hai điểm theo trục x và y
    let dx = x2 - x1;
    let dy = y2 - y1;
    
    // Xác định số bước cần phải thực hiện
    let steps = Math.abs(dx) > Math.abs(dy) ? Math.abs(dx) : Math.abs(dy);
    
    // Tính toán khoảng cách tăng giá trị x và y sau mỗi bước di chuyển
    let deltaX = dx / steps;
    let deltaY = dy / steps;
    
    // Lấy thẻ canvas từ HTML
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    // Đặt màu và chiều rộng của đường thẳng
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;

    // Bắt đầu vẽ đường thẳng
    ctx.beginPath();
    ctx.moveTo(x1, y1);

    // Vẽ từng điểm trên đường thẳng
    let x = x1;
    let y = y1;
    for (let i = 0; i <= steps; i++) {
        // Vẽ điểm (x, y)
        ctx.lineTo(Math.round(x), Math.round(y));
        x += deltaX;
        y += deltaY;
    }
    // Kết thúc vẽ đường thẳng
    ctx.stroke();
}
