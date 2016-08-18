
function BankAccount(accNo, accBalance, accName){
	this.accNo = accNo;
	this.accBalance = accBalance;
	this.accName = accName;
	this.amount = 0;
	
	this.withdraw = function(amount){
		
	}
	
	this.withdraw = function(amount){
	
	}

	
}

function withdraw(){
	var accNo = document.getElementById("txtAccNo").value;
	var accName = document.getElementById("txtName").value;
	var accBalance = document.getElementById("txtBalance").value;
	var amount = document.getElementById("txtAmount").value;
	
	var obj = new BankAccount(accNo, accBalance, accName);
	
	if(amount < 0)
		{
			alert("You entered negative amount to withdraw. \nCannot process a request.");
			return;
		}
	
	if( accBalance >= 0)
		{
			accBalance = accBalance - amount;
			obj.accBalance = accBalance;
			document.getElementById("txtBalance").value = accBalance;
		}
	else
		{
			alert("Your balance is below 0. You cannot withdraw");
		}
	document.getElementById("txtBalance").value = accBalance;
}

function deposit(){
	var accNo = parseInt(document.getElementById("txtAccNo").value);
	var accName = parseInt(document.getElementById("txtName").value);
	var accBalance = parseInt(document.getElementById("txtBalance").value);
	var amount = parseInt(document.getElementById("txtAmount").value);
	
	var obj = new BankAccount(accNo, accBalance, accName);
	
	if( amount >= 0)
		{
			accBalance = accBalance + amount;
			obj.accBalance = accBalance;
			document.getElementById("txtBalance").value = accBalance;
		}
	else
		{
			alert("You entered negative amount to deposit. \nCannot process a request.");
			return;
		}
	document.getElementById("txtBalance").value = accBalance;
}