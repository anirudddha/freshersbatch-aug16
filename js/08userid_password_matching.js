

function login(){
	var userID = document.getElementById("txtUserID").value;
	var password = document.getElementById("txtPassword").value;
	
	var counter = document.getElementById("txtCounter").value;
	

	if (userID == "ABC" && password=="XYZ")
		{
			document.write("LOGIN IN SUCCESSFUL!");
		}
	
	else
		{
			alert("Wrong UserID/Password");
			document.getElementById("txtUserID").value = "";
			document.getElementById("txtPassword").value = "";
			counter++;
			document.getElementById("txtCounter").value = counter;
			if(counter == 3)
				{
					document.write("You have entered wrong UserID/Password more than 3 times.");
				}
		}
	
}