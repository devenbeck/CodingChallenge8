//Task 1 : Function Declaration
//Scenario: Employee Salary Calculation
function calculateSalary(baseSalary, bonus, taxRate){
    let netSalary = (baseSalary + bonus) - (baseSalary * taxRate); //formula given
    return `Net Salary: $${netSalary}`;
}
console.log(calculateSalary(5000, 500, 0.1)); // should show net salary of 5000
console.log(calculateSalary(7000, 1000, 0.15)); //should show net salary of 6950

//Task 2: Function Expression
//Scenario: Product Price After Discount
function calculateDiscount(price, discountRate) {
    let finalPrice = price - (price * discountRate); //formula given
    return `Final Price: $${finalPrice.toFixed(2)}`; //making the result to 2 decimal points
}
console.log(calculateDiscount(100, 0.2)); // Price should be $80.00
console.log(calculateDiscount(250, 0.15)); // Price should be $212.50