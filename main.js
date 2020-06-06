console.log("Javascript is loaded!!");
var formula = "";
var firstnum = null;
var secondnum = null;
var total = null;
var operator = "";

function inputNumber(num){
    var number = parseInt(num);
    console.log(number);
    String(formula +=number);
    displayOutput();
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
        firstnum = parseFloat(formula.split(operator)[0]);
        displayFormula(formula); 
    }
}

function equals(equalOperator){
    if (equalOperator == "="){
        secondnum = parseFloat(formula.split(operator)[1]);
        var result = operation(operator);
    }
    displayOutput(result, true);
}

function operation(operator){
    switch(operator){
        case '+':
            total = firstnum + secondnum;
            break;
        
        case '-':
            total = firstnum - secondnum;
            break;

        case '*': 
            total = firstnum * secondnum;
            break;

        case '/': 
            total = firstnum / secondnum;
            break;
  
    }
    firstnum = total;
    secondnum = null;
    return total;
}


function reset(){
    //reset the formula string to ""
    formula = null;

    //reset the number display to 0
    displayOutput("0");

    //reset the formula display to 0
    displayFormula("");
    console.log(formula);
    firstnum , secondnum = null, null;
    operator = "";
}