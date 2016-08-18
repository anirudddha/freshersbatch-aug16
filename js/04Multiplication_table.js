

function generateTable(){
	var number = document.getElementById("txtNum").value;
	var i=1;
	
	if(isNaN(number))
		{
			alert("Enter an integer!");
			return;
		}
	
	document.write("Table of " + number + "<hr color=red>");
	for(i=1; i<=10; i++)
		{
			document.write(number*i + "<br>");
		}
	document.write("<hr color=red>");
	document.write("<input type='button' onClick='next()' value='next'>");
}

function next(){
	var result = confirm("Do you want to continue with next number?");
	if (result == true)
		{
		window.location.assign("04multiplication_table.html");
				 
		}
	else
		{
			document.write("<br><h1>Thank you!</h1>");
			return;
		}
	
}