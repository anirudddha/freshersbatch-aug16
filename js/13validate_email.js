
function validateEmail(){
	var mail = document.getElementById("txtEmail").value;
	var atpos = mail.indexOf("@");
    var dotpos = mail.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=mail.length)
    	{
        	alert("Invalid Email ID");
		}
    else
    	alert("Valid Email ID");
}
