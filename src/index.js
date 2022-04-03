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
 var total = random (1,40);
 var operator = operatorOption[random(0, 1)];
 var number2 = random(1, total - 1);

 eTotal.value = total;
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
    alert("Jawaban Kamu " + answer + " hasilnya bener lho" );
}
else{
    alert ("Jawaban Kamu " + answer + " hasilnya kurang tepat" );
}

eNumber1.value = "";
play();

}

play()



