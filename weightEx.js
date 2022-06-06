
function showWeightGoals() {
		
	var OGweight = Number(document.getElementById("weight").value);
	var weeklyLoss = OGweight * 0.1 / 7;
	var outputText =""
	
	for (var i = 1; i <= 7; i++) {
		OGweight = OGweight - weeklyLoss;
		outputText += "After "+i+". week "+ OGweight.toFixed(1)+" kg"+'<br>';
		document.getElementById("answer").innerHTML = outputText;
	}		
}
