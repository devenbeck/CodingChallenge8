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

//Task 3: Arrow Function
//Scenario: Service Fee Calculation
const calculateServiceFee = (amount, serviceType) => {
    let fee = 0; //starts at zero
    switch (serviceType) {   //alternative to using if else statement
        case `Premium`:
            fee = amount * 0.15;     //15% for premium
            break;         //break "exits the switch block" so it doesn't keep going
            case `Standard`:
                fee = amount * 0.10; // 10% for standard
                break;
                case `Basic`:
                    fee = amount * 0.05;  //5% for basic
                    break;
    }
    return `Service Fee: $${fee.toFixed(2)}`;
};
console.log(calculateServiceFee(200, "Premium")); // Should beExpected output: "Service Fee: $30.00"
console.log(calculateServiceFee(500, "Standard")); // Expected output: "Service Fee: $50.00"
