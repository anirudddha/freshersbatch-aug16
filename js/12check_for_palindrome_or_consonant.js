
function checkPalindrome(){
	
	var txt = document.getElementById("txt").value;
	var len = txt.length;
	var i,j,k;
	var flg=0;
	var forLen = len/2;
	i=0; 
	j=len-1;
	
	for(i=0; i<forLen; i++)
		{
			if (txt[i] != txt[j--])
				{
					flg = 1;
					document.write("Not palindrome!<br>");
					break;
				}
		}
	if(flg==0)
		document.write("Word is palindrome!<br>");
	
	flg=0;//set to consonant
	for(i=0; i<len; i++ )
		{
		if (txt[i]=='a' || txt[i]=='A' || txt[i]=='e' || txt[i]=='E' || txt[i]=='i' || txt[i]=='I' || txt[i]=='o' || txt[i]=='O' || txt[i]=='u' || txt[i]=='U')
			{
				flg=1;
				document.write("Not a consonant!<br>");
				break;
			}
		}
	if(flg==0)
		{
			document.write("Word is consonant!<br>");
		}
}