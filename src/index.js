module.exports = function solveEquation(equation) {

    let str, a, b, c, d, x1, x2;
    const res = [];

    str = equation.replace(" * x^2 ", "%");
    str = str.replace(" * x ", "%");
    str = str.replace(/ /g, "");
    const arr = str.split('%');

    a = parseInt(arr[0], 10);
    b = parseInt(arr[1], 10);
    c = parseInt(arr[2], 10);

    d = b*b - 4*a*c;

    x1 = (-b - Math.sqrt(d)) / (2*a);
    x2 = (-b + Math.sqrt(d)) / (2*a);

    res.push(Math.round(x1));
    res.push(Math.round(x2));


    return res.sort((left, right) => left - right);
}