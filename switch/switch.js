// 10/30/2025 - John Griffith

// Ask user for favorite month using prompt
let favMonth = prompt("What is favorite month?");

// Convert to lowercase
favMonth = favMonth.toLowerCase();

// Add a Switch Statement for Each Month
switch (favMonth) {

// Cases
case "january":
            console.log('New year, fresh start — time to sparkle like frost on the window.❄️');
            break;

case "february":
            console.log("Short month, big love. ❤️");
            break;

case "march":
            console.log('In like a lion, out like a lamb. 🦁🐑');
            break;

case "april":
            console.log("April showers bring May flowers. 🌧️🌷");
            break;

case "may":
            console.log("May your days be as bright as the blooms. 🌸");
            break;

case "june":
            console.log("Schools out, suns up, and smiles all around. 😎");
            break;

case "july":
            console.log("Red, white, and barbecue! 🎆🍔");
            break;

case "august":
            console.log("Hot days, cool waves. 🌊🔥");
            break;

case "september":
            console.log("Sweater weather is better weather. 🍂🧣");
            break;

case "october":
            console.log("If youve got it, haunt it. 👻🎃");
            break;

case "november":
            console.log("Gratitude turns what we have into enough. 🦃🍁");
            break;

case "december":
            console.log("Sleigh the season! 🎄✨");
            break;
}

// Add an If/Else If/Else Condition for Seasons
if (favMonth === "december" || favMonth === "january" || favMonth === "february") {
    console.log("You love the winter months!");
} else if (favMonth === "june" || favMonth === "july" || favMonth === "august") {
    console.log("You enjoy the summer months!");   
}  else {
    console.log("Other months are interesting too!");
}
