// 10/25/2025 - John Griffith

// Ask quiz questions
let answer = prompt("What is the capital of France");
let answer2 = Number(prompt("What is 5+10?"));
let answer3 = prompt("Where does SpongeBob live?");
let answer4 = Number(prompt("What is the square root of 64?"));

// Convert text answers to lower case for case-insensitive comparison
answer = answer.toLowerCase();
answer3 = answer3.toLowerCase();

// if statements
if (answer === "paris") {
    console.log("Correct!");
} else {
    console.log("Incorrect! The capital of France is Paris.");
}

if (answer2 === 15) {
    console.log("Correct!");
} else {
    console.log("Incorrect! 5+10 = 15.");
}

if (answer3 === "bottom of the sea") {
    console.log("Correct!");
} else {
    console.log("Incorrect! bottom of the sea silly.");
}

if (answer4 === 8) {
    console.log("Correct!");
} else {
    console.log("Incorrect! The square root of 64 is 8 (8x8 = 64).");
}