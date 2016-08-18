
var arrOfNumbers = [25, 62, 38, 86, 49, 14, 55];
var arrLen = 7;

function findMax(){
	var i;
	var max = arrOfNumbers[0];
	
	for(i=1; i<arrLen; i++)
		{
			if(arrOfNumbers[i]>max)
				{
					max = arrOfNumbers[i];
				}
		}
	alert("Max is : " + max);
}

function findMin(){
	var i;
	var min = arrOfNumbers[0];
	
	for(i=1; i<arrLen; i++)
		{
			if(arrOfNumbers[i]<min)
				{
					min = arrOfNumbers[i];
				}
		}
	alert("Min is : " + min);
}

function findAvg(){
	var i;
	var sum=0;
	var avg=0;
	for(i=0; i<arrLen; i++)
		{
			sum += arrOfNumbers[i];
		}
	avg = sum/arrLen;
	alert("Average is : " + avg);
}

function findSum(){
	var i;
	var sum=0;
	for(i=0; i<arrLen; i++)
		{
			sum += arrOfNumbers[i];
		}
	alert("Total is : " + sum);
}
