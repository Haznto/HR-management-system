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
    let ghazi = new Employee(1000,'Ghazi Samer','Administration','Senior','https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg')
    let lana = new Employee(1001,'Lana Ali','Finance','Senior','https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg')
    let tamara = new Employee(1002,'Tamara Ayoub','Marketing','Senior','https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg')
    let safi = new Employee(1003,'Safi Walid','Administration','Mid-Senior','https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg')
    let omar = new Employee(1004,'Omar Zaid','Development','Senior','https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg')
    let rana = new Employee(1005,'Rana Saleh','Development','Junior','https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg')
    let hadi = new Employee(1006,'Hadi Ahmad','Finance','Mid-Senior','https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg')
    

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
    
    let employeeName = document.getElementById('employee'+employeeNum)
    let employeeSalary = document.getElementById('employeeSalary'+employeeNum)
    employeeName.textContent = this.fullName;
    employeeSalary.textContent = this.salary;
}
ghazi.renderToHomePage()
lana.renderToHomePage()
tamara.renderToHomePage()
safi.renderToHomePage()
omar.renderToHomePage()
rana.renderToHomePage()
hadi.renderToHomePage()

