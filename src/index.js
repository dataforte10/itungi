const eNumber1 = document.getElementById("number1");
const eNumber2 = document.getElementById("number2");
const eOperator = document.getElementById("operator");
const eTotal = document.getElementById("total");
const eSubmit = document.getElementById("submit");
const operatorOption = ["+", "-"];

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function calculate(operator, number1, number2) {
    switch (operator) {
        case "+": return number1 + number2 ; break;
        case "-": return number1 - number2 ; break;
    }
}

function play() {
 var number1 = random (1, 20);
 var operator = operatorOption[random(0, 1)];
 var number2 = random(1, number1 - 1);

 eNumber1.value = number1;
 eNumber2.value = number2;
 eOperator.innerHTML = operator;

 eSubmit.addEventListener("click", evaluate);
}

function evaluate() {
    var answer = calculate(eOperator.innerHTML,
        parseInt(eNumber1.value),
        parseInt(eNumber2.value)
    );

if (answer === parseInt(eTotal.value)) {
    alert("Jawaban kamu benar" );
}
else{
    alert ("Jawaban yang benar adalah " + answer + " Jawaban kamu kurang tepat" );
}

eTotal.value = "";
play();

}

play()



