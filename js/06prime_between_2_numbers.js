

function findPrime(){
	var num1 = document.getElementById("txtNum1").value;
	var num2 = document.getElementById("txtNum2").value;
	
	
	if(isNaN(num1) || isNaN(num2))
		{
			alert("Please enter numbers only!");
			return;
		}
	//Both numbers
	if (num2<num1)
		{
			var t = document.getElementById("txtNum1").value;
			document.getElementById("txtNum1").value = document.getElementById("txtNum2").value;
			document.getElementById("txtNum2").value = t;
		}
	num1 = document.getElementById("txtNum1").value;
	num2 = document.getElementById("txtNum2").value;
	
	document.write("Prime numbers between " + num1 + " and " + num2 + " are : <br>"); 
	var i;
	var num;
	num = num1;
	
	if(num1 <=3)
		{
			document.write("2 3 ");
			num = 6;
		}
	if (num%2==0)
		{
			num++;
		}
	
	for (i = num; i<=num2; i++)
	{
		isPrime(i);		
	}
}

function isPrime(n){
	var j;
	var t = n/2;
	for(j=3; j<=t; j++)
		{
			if (n%j==0)
				return;
		}
	document.write(n + " ");
}