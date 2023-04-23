'use strict'
function Employee(fullName,department,level,urlImg) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.urlImg = urlImg;
    this.salary = this.SalaryCalc();
    this.IdNumber = this.IdCalc()
}
let emplyeeArr = [];

Employee.prototype.SalaryCalc = function() {
    if (this.level === 'Junior') {
        let Salary = Math.floor(0.925*((Math.random() * (1000 - 500 + 1)) + 500)) ;
        return Salary;
    }
    else if (this.level === 'Mid-Senior') {
        let Salary = Math.floor(0.925*((Math.random() * (1500 - 1000 + 1)) + 1000)) ;
        return Salary;
    }
    else if (this.level === 'Senior') {
        let Salary = Math.floor(0.925*((Math.random() * (2000 - 1500 + 1)) + 1500)) ;
        return Salary;
    }
}

Employee.prototype.IdCalc = function () {
    let randomNum = Math.floor(1000 +Math.random()*9000);

return randomNum;

}
Employee.prototype.renderDynamicEmployee = function() {
    if (this.fullName !== null && this.fullName !== "" && this.urlImg !== null && this.urlImg !== "") {
        if (this.department === 'Administration') {
            const intoCard = document.getElementById('administrationSec');

            const createH2 = document.createElement('h2');
        createH2.textContent = this.fullName
        const createPara = document.createElement('p');
        // createPara.innerHTML = `Department: ${this.department}` `level: ${this.level}` `ID: ${this.employeeID}`
        createPara.textContent = `Department:${this.department} level:${this.level} ID:${this.IdNumber}  Total Salary after Tax: $${this.salary}`;

        const creatingImg = document.createElement('img');
        creatingImg.src = this.urlImg;
        const creatingDiv = document.createElement('div');   
        intoCard.appendChild(creatingDiv);
        creatingDiv.append(creatingImg,createH2,createPara);
        }
        else if (this.department === 'Finance') {
            const intoCard = document.getElementById('financeSec');

            const createH2 = document.createElement('h2');
        createH2.textContent = this.fullName
        const createPara = document.createElement('p');
        // createPara.innerHTML = `Department: ${this.department}` `level: ${this.level}` `ID: ${this.employeeID}`
        createPara.textContent = `Department:${this.department} level:${this.level} ID:${this.IdNumber}  Total Salary after Tax: $${this.salary}`;

        const creatingImg = document.createElement('img');
        creatingImg.src = this.urlImg;
        const creatingDiv = document.createElement('div');   
        intoCard.appendChild(creatingDiv);
        creatingDiv.append(creatingImg,createH2,createPara);
        }
        else if (this.department === 'Development') {
            const intoCard = document.getElementById('developmentSec');

            const createH2 = document.createElement('h2');
        createH2.textContent = this.fullName
        const createPara = document.createElement('p');
        // createPara.innerHTML = `Department: ${this.department}` `level: ${this.level}` `ID: ${this.employeeID}`
        createPara.textContent = `Department:${this.department} level:${this.level} ID:${this.IdNumber}  Total Salary after Tax: $${this.salary}`;

        const creatingImg = document.createElement('img');
        creatingImg.src = this.urlImg;
        const creatingDiv = document.createElement('div');   
        intoCard.appendChild(creatingDiv);
        creatingDiv.append(creatingImg,createH2,createPara);
        }
        else if (this.department === 'Marketing') {
            const intoCard = document.getElementById('marketingSec');

            const createH2 = document.createElement('h2');
        createH2.textContent = this.fullName
        const createPara = document.createElement('p');
        // createPara.innerHTML = `Department: ${this.department}` `level: ${this.level}` `ID: ${this.employeeID}`
        createPara.textContent = `Department:${this.department} level:${this.level} ID:${this.IdNumber}  Total Salary after Tax: $${this.salary}`;

        const creatingImg = document.createElement('img');
        creatingImg.src = this.urlImg;
        const creatingDiv = document.createElement('div');   
        intoCard.appendChild(creatingDiv);
        creatingDiv.append(creatingImg,createH2,createPara);
        }
    }
    
}

Employee.prototype.renderStaticEmployee = function () {
    let employeeNum;
    switch(this.fullName) {
        case'Ghazi Samer':
        employeeNum =1;
        break;
        case'Lana Ali':
        employeeNum =2;
        break;
        case'Tamara Ayoub':
        employeeNum =3;
        break;
        case'Safi Walid':
        employeeNum =4;
        break;
        case'Omar Zaid':
        employeeNum =5;
        break;
        case'Rana Saleh':
        employeeNum =6;
        break;
        case'Hadi Ahmad':
        employeeNum =7;
        break;
    }
    let employeeImg = document.getElementById('eImg'+employeeNum)
    let employeeName = document.getElementById('employee'+employeeNum)
    let employeeSalary = document.getElementById('employeeSalary'+employeeNum)
    employeeName.textContent = `Name:${this.fullName} --- ID:${this.IdNumber}`;
    employeeSalary.textContent = `Department: ${this.department} --- Level: ${this.level} Total Salary after Tax: $${this.salary}`;
    employeeImg.src = this.urlImg;

}
    let ghazi = new Employee('Ghazi Samer','Administration','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true',1000)
    let lana = new Employee('Lana Ali','Finance','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true',1001)
    let tamara = new Employee('Tamara Ayoub','Marketing','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true',1002)
    let safi = new Employee('Safi Walid','Administration','Mid-Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true',1003)
    let omar = new Employee('Omar Zaid','Development','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true',1004)
    let rana = new Employee('Rana Saleh','Development','Junior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true',1005)
    let hadi = new Employee('Hadi Ahmad','Finance','Mid-Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true',1006)

    let staticEmplyeeArr = [ghazi,lana,tamara,safi,omar,rana,hadi]
    

    for (let i=0;i<staticEmplyeeArr.length;i++){
        staticEmplyeeArr[i].renderStaticEmployee()
    }

    function gettingInfo(formInfoEvent) {
        formInfoEvent.preventDefault();
        
        let fullName = formInfoEvent.target.fullName.value;
        let department = formInfoEvent.target.department.value;
        let level = formInfoEvent.target.level.value;
        let urlImg = formInfoEvent.target.urlImg.value;
        
        let newEmployee = new Employee(fullName,department,level,urlImg)
        newEmployee.renderDynamicEmployee()
        emplyeeArr.push(newEmployee)
        
        saveCard()  
    }

    function saveCard() {
        let stringCards = JSON.stringify(emplyeeArr)
        localStorage.setItem('employeeList' ,stringCards)
    }
    function gettingCardsFromLocalStorage() {
        let backedCards = localStorage.getItem('employeeList');
        let parsedBackedCards = JSON.parse(backedCards);
        if (parsedBackedCards!== null) {
            emplyeeArr = parsedBackedCards
            let arrayAgentCon= []
            for(let i=0; i <parsedBackedCards.length;i++){
                
                let createConAgent = new Employee (parsedBackedCards[i].fullName,parsedBackedCards[i].department,parsedBackedCards[i].level,parsedBackedCards[i].urlImg)
                createConAgent.salary = parsedBackedCards[i].salary
                createConAgent.IdNumber = parsedBackedCards[i].IdNumber
                arrayAgentCon.push(createConAgent);
                arrayAgentCon[i].renderDynamicEmployee()


            }      
        }
    
    }

    gettingCardsFromLocalStorage()
    const agentForm = document.getElementById("employeeForm");
agentForm.addEventListener('submit', gettingInfo)

