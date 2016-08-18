
var arrOfNumbers = [25, 62, 38, 86, 49, 14, 55];
var arrLen = 7;

function display(){
	var isAsc = document.getElementById("asc").checked;
	var i;
	var j;
	var t;
	
	if(isAsc == true) {
		// asc sort
		document.write("Ascending order : ");
		for(i=0; i<arrLen; i++){
			for(j=i+1;j<arrLen; j++)
				{
					if(arrOfNumbers[i] > arrOfNumbers[j] )
						{
							t = arrOfNumbers[i] ;
							arrOfNumbers[i] = arrOfNumbers[j];
							arrOfNumbers[j] = t;
						}
				}
		}
		
	}
	else{
		document.write("Descending order : ");
		for(i=0; i<arrLen; i++){
			for(j=i+1;j<arrLen; j++)
				{
					if(arrOfNumbers[i] < arrOfNumbers[j] )
						{
							t = arrOfNumbers[i] ;
							arrOfNumbers[i] = arrOfNumbers[j];
							arrOfNumbers[j] = t;
						}
				}
		}
		
	}
	
	for(i=0; i<arrLen; i++)
		document.write( arrOfNumbers[i]+" ");
	

}