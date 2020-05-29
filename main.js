console.log("Javascript is loaded!!");
var formula = "";
var firstnum = null;
var secondnum = null;
var total = null;
var operator = "";

function inputNumber(num){
    var number = parseInt(num);
    console.log(number);
    if (firstnum == null){
        firstnum = number;
        formula = formula + firstnum;
        displayOutput(firstnum);
    }
    else{
        secondnum = number;
        formula = formula + secondnum;
        displayOutput(secondnum);
    }
    displayFormula(formula);
}

function displayOutput(num, isResult = false){
    document.getElementById("output").textContent = num;
    if (isResult == true){
        firstnum = num; 
        secondnum = null;
    }

}

function displayFormula(formula){
    document.getElementById("formula").textContent = formula;
}

function inputOperator(op){
    operator = op;
    //i can check if last char is int
    len = formula.length;
    lastChar = formula.charAt(len-1);
    //check if last input was a operator
    if (lastChar == "+" || lastChar == "-" || 
    lastChar == "*" || lastChar == "/" || lastChar == "="){
        console.log("same operator!!");
    }
    else{
        formula = formula + op;
        displayFormula(formula); 
    }
}

function equals(equalOperator){
    if (equalOperator == "="){
        var result = operation(operator);
    }
    displayOutput(result, true);
}

function operation(operator){
    switch(operator){
        case '+':
            total = firstnum + secondnum;
            return total;
        
        case '-':
            total = firstnum - secondnum;
            return total;

        case '*': 
            total = firstnum * secondnum;
            return total;

        case '/': 
            total = firstnum / secondnum;
            return total;

    }
}


function reset(){
    //reset the formula string to ""
    formula = null;

    //reset the number display to 0
    displayOutput("0");

    //reset the formula display to 0
    displayFormula(formula);
    console.log(formula);
    firstnum , secondnum = null, null;
    operator = "";
}