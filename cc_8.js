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

//Task 4: Parameters and Arguments
//Scenario: Car Rental Cost Calculation
function calculateRentalCost(days, carType, insurance = false) {
    let dailyRate = 0; //rental costs for different type cars
    switch (carType) {
        case `Economy`:
            dailyRate = 40;   //$40 a day
            break;
            case `Standard`:
                dailyRate = 60;
                break;
                case `Luxury`:
                    dailyRate = 100;
                    break;
    }
    let insuranceCost = insurance ? 20 : 0 ;   //insurance costs an extra 20 a day //evaluating boolean expression
    let totalCost =  (dailyRate + insuranceCost) * days;
    return `Total Rental Cost: $${totalCost}`;
}

console.log(calculateRentalCost(3, "Economy", true)); // Total Rental Cost: $180
console.log(calculateRentalCost(5, "Luxury", false)); // Total Rental Cost: $500

//Task 5: Returning Values
//Scenario: Loan Payment Calculation
function calculateLoanPayment(principal, rate, time) {  //returns total loan payment
    let totalPayment = principal + (principal * rate * time);  //formula given
    return `Total Payment: $${totalPayment.toFixed(2)}`;  //fixed to 2 decimal places
}

console.log(calculateLoanPayment(1000, 0.05, 2)); // Should be Expected output Total Payment: $1100.00
console.log(calculateLoanPayment(5000, 0.07, 3)); // Expected output Total Payment: $6050.00

//Task 6: Higher Order Functions
//Scenario: Identifying Large Transactions
let transactions = [200, 1500, 3200, 800, 2500]; // array declared
function filterLargeTransactions(transactions, filterFunction) {  //find transactions above $1000
    return transactions.filter(filterFunction);  
}
console.log(filterLargeTransactions(transactions, amount => amount > 1000)); // Expected output 1500, 3200, 2500 

//Task 7: Closures
//Scenario: Shopping Cart Tracker
function createCartTracker() {  //adds items to a cart and maintain a running total
    let total = 0;   //starting off from an empty cart
    return function (amount) {
        total += amount;
        return `Total Cart Value: $${total}`;
    };
}
let cart = createCartTracker();
console.log(cart(20)); // Should be $20
console.log(cart(35)); // Should be $55 because adding on top of the 20

//Task 8: Recursion in JavaScript
//Scenario: Savings Growth Projection
function calculateSavings(years, amount) {  //projects savings growth
    if (years < 10) {
        return calculateSavings(years + 1, amount * 1.05); //Each year increases savings by 5% until reaching year 10
    }
        return `Projected Savings: $${amount.toFixed(2)}`; //fixed to 2 decimal places
};

console.log(calculateSavings(8, 1000)); // Should be  $1102.50
console.log(calculateSavings(5, 5000)); // Should be $6381.41