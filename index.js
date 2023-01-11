function operate (num1, num2, operator) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return sub(num1, num2);
        case '*':
            return mul(num1, num2);
        case '/':
            return div(num1, num2);
    }

}
function add (a, b) {
	return a + b;
};

function sub (a, b) {
	return a - b;
};

function div (a,b) {
    let x = a / b;
    return x;
}
function mul (a,b) {
    let x = a * b;
    return x;

};


function power (num, pwr) {
	return Math.pow(num, pwr);
};


console.log(operate(42,2, "/"));