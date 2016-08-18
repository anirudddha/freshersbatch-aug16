
function calculateVowel(){
	
	var txt = document.getElementById("txt").value;
	var len = txt.length;
	var vowelNumber=0;
	var i;
	
	for(i=0; i<len; i++)
		{
		if (txt[i]=='a' || txt[i]=='A' || txt[i]=='e' || txt[i]=='E' || txt[i]=='i' || txt[i]=='I' || txt[i]=='o' || txt[i]=='O' || txt[i]=='u' || txt[i]=='U')
				vowelNumber++;
		}
	
	document.write("Total vowels are : " + vowelNumber);

}