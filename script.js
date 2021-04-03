var no1 = 0;
var no2 = 0;

function calculate() {
no1 = Number(document.getElementById("number1").value);
no2 = Number(document.getElementById("number2").value);
document.getElementById("answer").innerHTML = no1 + no2;
}

var urlParams = new URLSearchParams(window.location.search);
var varb = urlParams.get('varb');
var varc = urlParams.get('varc');
document.getElementById("number1").innerHTML = varb;
document.getElementById("number2").innerHTML = varc;
document.getElementById("answer").innerHTML = varb + varc;
