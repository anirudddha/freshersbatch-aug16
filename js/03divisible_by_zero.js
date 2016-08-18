

function checkDivisibility(){
	var numerator = document.getElementById("txtNum").value;
	var denominator = document.getElementById("txtDenom").value;
	
	if(isNaN(numerator) || isNaN(denominator))
		{
		alert("Please enter numbers!");
		return;
		}
	
	if (denominator == 0)
		{
			alert("Denominator is 0 \nNumber cannot be divided by 0.");
		}
	document.write("Result is : " + numerator/denominator);
		
}