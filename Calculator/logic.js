let dgt = 0
let lastinput = 0
let output = 0
let currOpr = ''
let lastOpr = ''
let isFirst=true
const numbers = document.querySelectorAll(".numbers")
const operator = document.querySelectorAll(".operations")
const display = document.querySelector(".displayOutput")

function printf(yeDikhao) {
    display.textContent = yeDikhao
}

numbers.forEach((dgt) => {
    dgt.addEventListener(("click"), () => {
        if (currOpr == '') {
            switch (dgt.id) {
                case "one":
                    dgt = 1;
                    break;
                case "two":
                    dgt = 2;
                    break;
                case "three":
                    dgt = 3;
                    break;
                case "four":
                    dgt = 4;
                    break;
                case "five":
                    dgt = 5;
                    break;
                case "six":
                    dgt = 6;
                    break;
                case "seven":
                    dgt = 7;
                    break;
                case "eight":
                    dgt = 8;
                    break;
                case "nine":
                    dgt = 9;
                    break;
                case "zero":
                    dgt = 0;
                    break;
            }

            lastinput = lastinput * 10 + dgt
            printf(lastinput)
        }
    });
});
operator.forEach((opr) => {
    opr.addEventListener(("click"), () => {
        if(isFirst)
            {
                isFirst=false;
                output=lastinput
            }
        switch (opr.id) {
            case "add":
                currOpr = '+' //no actual use except currOpr!=''
                break;
            case "minus":
                currOpr = '-'
                break;
            case "multiply":
                currOpr = 'X'
                break;
            case "divide":
                currOpr = '/'
                break;
            case "equal":
                calculate(lastOpr)
                printf(output)
                break;
        }
        if(currOpr!='=')
        {
            printf(currOpr)       
            calculate(currOpr)
        }
        update()
    });
});
function update() {
    lastinput = 0
    lastOpr = currOpr
    currOpr = ''
}
function calculate(operatorInHand) {
    switch (operatorInHand) {
        case "+":
            output += lastinput
            break;
        case "-":
            output -= lastinput
            break;
        case "X":
            output *= lastinput
            break;
        case "/":
            output /= lastinput
            break;
    }
}