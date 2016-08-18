

function findFactorial(){
	
	var number = document.getElementById("txtNum").value;
	var fact = 1;
	var i;
	
	if(isNaN(number))
		{
			alert("Please enter a number!");
			return;
		}
	
	for (i=number; i>=1; i--)
		{
			fact = fact*i;
		}
	document.write("Factorial of " + number + " is : " + fact);
}