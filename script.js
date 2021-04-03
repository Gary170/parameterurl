var no1 = 0;
var no2 = 0;

function calculate() {
no1 = Number(document.getElementById("number1").value);
no2 = Number(document.getElementById("number2").value);
document.getElementById("answer").innerHTML = no1 + no2;
}

const urlParams = new URLSearchParams(window.location.search);
const var1 = urlParams.get('var1');
const var2 = urlParams.get('var2');
document.getElementById("number1").innerHTML = var1;
document.getElementById("number2").innerHTML = var2;
document.getElementById("answer").innerHTML = var1 + var2;
