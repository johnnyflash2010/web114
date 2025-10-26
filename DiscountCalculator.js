// 10/25/2025 - John Griffith

// Ask customer for shopping total
let total = Number(prompt("How much did you spend?"));

// Show total and ask customer to confirm
confirm("$" + total + " total? Click OK to continue!");

// if statement
if (total >= 100) {
    alert("20% off");
} else if (total >= 50) {
    alert("10% off");
} else {
    alert("No discount.");
}

