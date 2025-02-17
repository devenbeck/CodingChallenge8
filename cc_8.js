//Task 1 : Function Declaration
//Scenario: Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate){
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //formula given
    return `Net Salary: $${netSalary}`;
}
console.log(calculateSalary(5000, 500, 0.1)); // should show net salary of 5000
console.log(calculateSalary(7000, 1000, 0.15)); //should show net salary of 6950