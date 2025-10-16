// 10/16/2025 - John Griffith

// Declare budget variables
let income = 2000;
let rent = 1000;
let groceries = 500;
let utilities = 225;

// Calculate total income
let totalIncome = income;

// Calculate Total Expenses
let totalExpenses = rent + groceries + utilities;

// Calculate Remaining Money
let remainingMoney = income - totalExpenses;

// Calculate Percentages
let rentPercent = (rent / income) * 100
let groceriesPercent = (groceries / income) * 100

// Output the Results
console.log("The total income was: " + income.toLocaleString("en-US", {style: "currency", currency: "USD", }));
console.log("The rent amount was: " + rent.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log("The grocery total was: " + groceries.toLocaleString("en-US", { style: "currency", currency:"USD" }));
console.log("The remaining money was: " + remainingMoney.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("The percent spent on rent is: " + + rentPercent.toFixed() + "%");
console.log("The percent spent on groceries was: " + groceriesPercent.toFixed() + "%");
