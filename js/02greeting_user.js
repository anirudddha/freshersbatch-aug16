

function greetUser(){
	var name = document.getElementById("txtName").value;
	var d = new Date();
	var tm = d.getHours();
	
	//document.write(tm);
	if(tm >= 5 && tm<12)
		document.write("<center><font color=red><h1> Good Morning " + name +"! </h1> </font></center>");
	else 
	if(tm>=12 && tm<16) 
		document.write("<center><font color=red><h1> Good Afternoon " + name +"!</h1> </font></center>");
	else 
	if(tm>=16 && tm<20) 
		document.write("<center><font color=red><h1> Good Evening " + name +"!</h1> </font></center>");
	else 
		document.write("<center><font color=red><h1> Good Night " + name +"!</h1> </font></center>");
		
}