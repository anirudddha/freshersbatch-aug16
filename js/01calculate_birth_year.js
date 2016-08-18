

function calBirthYear(){
	var age = document.getElementById("txtAge").value;
	var d = new Date();
	var currentYear = d.getFullYear();
	var birthYear = currentYear - age;
	
	document.write("Birth Year: " + birthYear + "<br>");
}