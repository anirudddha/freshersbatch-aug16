var employeeList = [{empId:4486, empName:"Aniruddha", deptNo:21, empSalary:450000},
              {empId:4497, empName:"Meetali", deptNo:22, empSalary:450000},
              {empId:4496, empName:"Radhika", deptNo:21, empSalary:450000},
              {empId:4480, empName:"Prashant", deptNo:22, empSalary:450000},
              {empId:4479, empName:"Kunal", deptNo:22, empSalary:450000},
              {empId:4478, empName:"Pratik", deptNo:22, empSalary:450000},
              {empId:4477, empName:"Nandan", deptNo:21, empSalary:450000}];


function sort(){
		var emp = {empId:0, empName:"", deptNo:0, empSalary:0}
		var i;
		var j;
		var listLen= employeeList.length;
		
		//emp = employeeList[0];
		
		for(i=0; i<listLen-1; i++)
			{
				for(j=i+1; j<listLen; j++)
					{
						if(employeeList[i].empId > employeeList[j].empId )
							{
								emp = employeeList[i];
								employeeList[i] = employeeList[j];
								employeeList[j] = emp;
							}
					}
			
			}
		for(i=0; i<listLen; i++)
			{
				if(i%2==0){
					document.write("<div style='background-color:Bisque'>");
					document.write("Emp ID: " + employeeList[i].empId + "<br>Emp Name: " + employeeList[i].empName + "<br>Dept No.: " + employeeList[i].deptNo + "<br>Emp Salary: " + employeeList[i].empSalary );
					document.write("</div><hr>");

				}
				else
					{
					document.write("<div style='background-color:darkgrey'>");
					document.write("Emp ID: " + employeeList[i].empId + "<br>Emp Name: " + employeeList[i].empName + "<br>Dept No.: " + employeeList[i].deptNo + "<br>Emp Salary: " + employeeList[i].empSalary );
					document.write("</div><hr>");
					}
			}
}