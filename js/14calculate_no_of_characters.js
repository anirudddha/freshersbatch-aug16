
function calculateCharcters(){
	var txt = document.getElementById("txt").value;
	var numOfChars = 0;
	var len = txt.length;
	var i;
	
	for(i=0; i<len; i++)
		{
			if(txt[i] != ' ' && txt[i] !='.')
				numOfChars++;
		}
	alert ("Total "+ numOfChars + " characters present in sentence");

}
