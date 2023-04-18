'use strict'
function Employee(employeeID,fullName,depratnment,level,img,) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.depratnment = depratnment;
    this.level = level;
    this.img = img;
    this.salary = this.SalaryCalc();
}

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
    let ghazi = new Employee(1000,'Ghazi Samer','Administration','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Ghazi.jpg?raw=true')
    let lana = new Employee(1001,'Lana Ali','Finance','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Lana.jpg?raw=true')
    let tamara = new Employee(1002,'Tamara Ayoub','Marketing','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Tamara.jpg?raw=true')
    let safi = new Employee(1003,'Safi Walid','Administration','Mid-Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Safi.jpg?raw=true')
    let omar = new Employee(1004,'Omar Zaid','Development','Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Omar.jpg?raw=true')
    let rana = new Employee(1005,'Rana Saleh','Development','Junior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Rana.jpg?raw=true')
    let hadi = new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior','https://github.com/LTUC/amman-prep-d13/blob/main/Class-08/lab/assets/Hadi.jpg?raw=true')
    

Employee.prototype.renderToHomePage = function() {
    // const arr = ['Ghazi Samer','Lana Ali','Tamara Ayoub','Safi Walid','Omar Zaid','Rana Saleh','Hadi Ahmad']
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
    employeeName.textContent = `Name:${this.fullName} --- ID:${this.employeeID}`;
    employeeSalary.textContent = `Department: ${this.depratnment} --- Level: ${this.level} Total Salary after Tax: $${this.salary}`;
    employeeImg.src = this.img;
}
ghazi.renderToHomePage()
lana.renderToHomePage()
tamara.renderToHomePage()
safi.renderToHomePage()
omar.renderToHomePage()
rana.renderToHomePage()
hadi.renderToHomePage()



// updating javascirpt for assignment lab 8 for this project.

// Salary Calculator
makeCard.prototype.SalaryCalc = function() {
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

//creating random ID number 4 digits
const genRandomNum =  () => {
let randomNum = Math.floor(1000 +Math.random()*9000);
console.log(randomNum);
return randomNum;

}
// consturctior function to save data we takefrom the function.

function makeCard(fullName,department,level,urlImg) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.urlImg = urlImg;
    this.employeeID =  genRandomNum();
    this.salary = this.SalaryCalc();
}

// creating prototypes for each makeCard object:

makeCard.prototype.renderInHome = function () {
    if (this.fullName !== null && this.fullName !== "" && this.urlImg !== null && this.urlImg !== "") {
        if (this.department === 'Administration') {
            const intoCard = document.getElementById('administrationSec');

            const createH2 = document.createElement('h2');
        createH2.textContent = this.fullName
        const createPara = document.createElement('p');
        // createPara.innerHTML = `Department: ${this.department}` `level: ${this.level}` `ID: ${this.employeeID}`
        createPara.textContent = `Department:${this.department} level:${this.level} ID:${this.employeeID}  Total Salary after Tax: $${this.salary}`;

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
        createPara.textContent = `Department:${this.department} level:${this.level} ID:${this.employeeID}  Total Salary after Tax: $${this.salary}`;

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
        createPara.textContent = `Department:${this.department} level:${this.level} ID:${this.employeeID}  Total Salary after Tax: $${this.salary}`;

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
        createPara.textContent = `Department:${this.department} level:${this.level} ID:${this.employeeID}  Total Salary after Tax: $${this.salary}`;

        const creatingImg = document.createElement('img');
        creatingImg.src = this.urlImg;
        const creatingDiv = document.createElement('div');   
        intoCard.appendChild(creatingDiv);
        creatingDiv.append(creatingImg,createH2,createPara);
        }
        
        //Template workflow for the function

        // const createH2 = document.createElement('h2');
        // createH2.textContent = this.fullName
        // const createPara = document.createElement('p');
        // // createPara.innerHTML = `Department: ${this.department}` `level: ${this.level}` `ID: ${this.employeeID}`
        // createPara.textContent = `Department:${this.department} level:${this.level} ID:${this.employeeID}`;

        // const creatingImg = document.createElement('img');
        // creatingImg.src = this.urlImg;
        // const creatingDiv = document.createElement('div');   
        // intoCard.appendChild(creatingDiv);
        // creatingDiv.append(creatingImg,createH2,createPara);
    }
    // const creatingImg = document.createElement('img');
    // creatingImg.textContent = "This is Me"
    // const createH2 = document.createElement('h2');
    // createH2.textContent = this.fullName
    // const createPara = document.createElement('p');
    // createPara.textContent = `Department: ${this.department} level: ${this.level} ID: ${this.employeeID}`
    // intoCard.appendChild(createPara)

    // const divFinal = creatingDiv.append(createH2,createPara,creatingImg);
    // intoCard.append(divFinal);




}

//creating function to invoke when invoking the event

function gettingInfo(formInfoEvent) {
    formInfoEvent.preventDefault();
    console.log(formInfoEvent)
    // debugger
    let fullName = formInfoEvent.target.fullName.value;
    let department = formInfoEvent.target.department.value;
    let level = formInfoEvent.target.level.value;
    let urlImg = formInfoEvent.target.urlImg.value;


    const newEmployee = new makeCard(fullName,department,level,urlImg)
    console.log(newEmployee)

    newEmployee.renderInHome()
    // console.log(fullName,department,level,urlImg)
}









const agentForm = document.getElementById("employeeForm");
agentForm.addEventListener('submit', gettingInfo)
console.log(agentForm)