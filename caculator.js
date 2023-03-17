exports.AddANumber = (a, b, dau) => {
    if (dau == '+') {
        var i = a + b;
        return "Tổng là: " + i;
    } else if (dau == '-') {
        var i = a - b;
        return "Hiệu là: " + i;
    } else if (dau == '*') {
        var i = a * b;
        return "Tích là: " + i;
    } else if (dau == '/') {
        var i = a / b;
        return "Thương là: " + i;
    }
}