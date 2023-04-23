'use strict'
let agentDataArray = localStorage.getItem('employeeList');
let agentDataArrayParsed = JSON.parse(agentDataArray)

if (agentDataArrayParsed !== null) {
function employeeCounter (data) {
    let adminSum =0;
    let financeSum=0;
    let marketingSum=0;
    let devSum=0;

    
for (let i = 0; i< data.length;i++) {
    
        if (data[i].department === 'Administration') {
        adminSum+=1
        }
        else if (data[i].department === 'Finance') {
       financeSum+=1
        }
        else if (data[i].department === 'Development') {
        marketingSum+=1
        }
        else if (data[i].department === 'Marketing') {
        devSum+=1
        }
    }
    let summation =[]
    summation.push(adminSum)
    summation.push(financeSum)
    summation.push(marketingSum)
    summation.push(devSum)
    
    return summation
}

let totalNumberOfEmployeesEachDepartent = employeeCounter(agentDataArrayParsed);
function createCell (father,number) {
    const tableCell = document.createElement('td')
    tableCell.textContent = totalNumberOfEmployeesEachDepartent[number]
    let fatherRow = document.getElementById(father)
    fatherRow.appendChild(tableCell)
}
    

createCell("adminRow",0)
createCell("FinanceRow",1)
createCell("DevRow",2)
createCell("MarketingRow",3)

function avgSalary (departmentName,IndNum) {
    let sum =0;
    let avg = 0;
    for (let i =0; i <agentDataArrayParsed.length; i++){
        if(agentDataArrayParsed[i].department === departmentName){
            sum += agentDataArrayParsed[i].salary;
         avg += sum / totalNumberOfEmployeesEachDepartent[IndNum];
        }
            
    }   
let sumAvg = [];
sumAvg.push(sum)
sumAvg.push(avg)
return sumAvg

}
let avgAdmin = avgSalary("Administration",0);
let avgFinance  = avgSalary("Finance",1)
let avgDev = avgSalary("Development",2)
let avgMarketing =avgSalary ("Marketing",3)

function createAvg(father,calcu){
    const tableCell = document.createElement('td')
    tableCell.textContent = Math.round(calcu[1]);
    let fatherRow = document.getElementById(father)
    fatherRow.appendChild(tableCell)
}

function createSum(father,calcu){
    const tableCell = document.createElement('td')
    tableCell.textContent = calcu[0];
    let fatherRow = document.getElementById(father)
    fatherRow.appendChild(tableCell)
}

createAvg("adminRow",avgAdmin)
createAvg("FinanceRow",avgFinance)
createAvg("DevRow",avgDev)
createAvg("MarketingRow",avgMarketing)

createSum("adminRow",avgAdmin)
createSum("FinanceRow",avgFinance)
createSum("DevRow",avgDev)
createSum("MarketingRow",avgMarketing)

let avgAllDep = Math.round((avgAdmin[1] + avgFinance[1] +avgDev[1] +avgMarketing[1])/4);
let sumAllDep = avgAdmin[0] + avgFinance[0] +avgDev[0] +avgMarketing[0];
let totalEmpAllDep = totalNumberOfEmployeesEachDepartent[0]+ totalNumberOfEmployeesEachDepartent[1] + totalNumberOfEmployeesEachDepartent[2] + totalNumberOfEmployeesEachDepartent[3];
function appendCumulatives(content,parent) {
    let fatherRow = document.getElementById(parent)
    fatherRow.textContent = content;
}
appendCumulatives(totalEmpAllDep,"totalNumOfAllEm")
appendCumulatives(avgAllDep,"avgSalaryOfAllEm")
appendCumulatives(sumAllDep,"totalSalaryForAllDep")
}
