
function removeSpaces(){
	var txt = document.getElementById("txt").value;
	var newTxt = new String();
	var len = txt.length;
	var i;
	var j = 0;
	var str = "";
	newTxt = txt.split(" ");
	var l = newTxt.length;
	
	for(i=0; i<l; i++)
		{
			//alert(newTxt[i].length);
			if(newTxt[i].length>0)
				{
					str += newTxt[i] + " ";
				}
		}
	
	document.getElementById("result").value = str;
	
}

//      0123456789
//    a-a--a---a
//    a-a-a-
// 88 88 812 206 Amit HDFC