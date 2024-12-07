const numbers = document.querySelectorAll(".numbers")
const operator = document.querySelectorAll(".operations")
const display = document.querySelector(".displayOutput")
let currOpr = ''
let str = ""
let result = 0
isArithmetic=true
numbers.forEach((num) => {
    num.addEventListener(("click"), () => {
        switch (num.id) {
            case "one":
                dgt = '1';
                break;
            case "two":
                dgt = '2';
                break;
            case "three":
                dgt = '3';
                break;
            case "four":
                dgt = '4';
                break;
            case "five":
                dgt = '5';
                break;
            case "six":
                dgt = '6';
                break;
            case "seven":
                dgt = '7';
                break;
            case "eight":
                dgt = '8';
                break;
            case "nine":
                dgt = '9';
                break;
            case "zero":
                dgt = '0';
                break;
        }
        str += dgt
        display.textContent = str
    });
});

operator.forEach((opr) => {
    opr.addEventListener(("click"), () => {
        switch (opr.id) {
            case "add":
                currOpr = '+' 
                break;
            case "minus":
                currOpr = '-'
                break;
            case "multiply":
                currOpr = '*'
                break;
            case "divide":
                currOpr = '/'
                break;
            case "bracketOpen":
                currOpr = '('
                break;
            case "bracketClose":
                currOpr = " )"
                break;
            case "point":
                currOpr = '.'
                break;
            case "equal":
                isArithmetic = false
                result = eval(str);
                str = result
                display.textContent = str
                break;
            case "backspace":
                str = str.slice(0, -1);
                display.textContent=str
                isArithmetic=false
                break;
            case "AC":
                str=""
                display.textContent=str
                isArithmetic=false
                break;
        }
        if (isArithmetic) {
            str = str+currOpr
            display.textContent = str
        }
        isArithmetic=true
    });
});