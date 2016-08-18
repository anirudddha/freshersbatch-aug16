

function checkVowel(){
	var ltr = document.getElementById("txtLetter").value;
	
	if(isNaN(ltr))
	{ //letters
		if (ltr=='a' || ltr=='A' || ltr=='e' || ltr=='E' || ltr=='i' || ltr=='I' || ltr=='o' || ltr=='O' || ltr=='u' || ltr=='U')
		{
			alert("Letter is VOWEL!");
		}
		else
		{
			alert("Letter is NOT VOWEL!");
		}
	}
	else 
		alert("It's a number. \nPlease enter alphabet.");
}