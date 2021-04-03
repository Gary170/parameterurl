var no1 = 0;
var no2 = 0;

function calculate() {
no1 = Number(document.getElementById("number1").value);
no2 = Number(document.getElementById("number2").value)
document.getElementById("answer").innerHTML = no1 + no2;
}

var getParams = function (url) {
	var params = {};
	var parser = document.createElement('a');
	parser.href = url;
	var query = parser.search.substring(1);
	var vars = query.split('&');
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split('=');
		params[pair[0]] = decodeURIComponent(pair[1]);
	}
	params = Number(document.getElementById("number1").value);
};
