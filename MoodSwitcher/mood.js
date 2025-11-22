// 11/21/2025 - John Griffith

// Mood Changer using event delegation

// Step 1: Select the display element
// Select the mood display element from the DOM
const moodDisplay = document.getElementById("moodDisplay");

// Step 2: Create the Moods Configuration Object
// Define an object with configurations for each mood
// This object holds the background color, text color, and message for each mood
// I used Google css color picker
const moods = {
    happy: { bg: '#ff9800', text: '#3e2723', message: 'Pumpkin spice everything!' },
    calm: { bg: '#42f5c8', text: '#3e2723', message: 'Go to your happy place' },
    excited: { bg: '#7ef542', text: '#3e2723', message: 'Yaye!!!' },
    chill: { bg: '#88b5a3', text: '#3e2723', message: 'Yo I be chillin...' },
    mysterious: { bg: '#ba708b', text: '#3e2723', message: 'Whats in the box???' },

    // Reset config 
    reset: { bg: '#ffffff', text: '#000000', message: 'Choose a mood...' }
};

// Step 3: Add the Event Listener with Delegation
// This listens for clicks anywhere on the page and checks if it's a mood button
document.addEventListener('click', function (event) {
    // Check if the clicked element has the class 'mood-btn'
    if (event.target.classList.contains('mood-btn')) {
        // Get the mood from the button's data-mood attribute
        const mood = event.target.getAttribute('data-mood');

        // Get the configuration for this mood from the moods object
        const config = moods[mood];

        console.log(mood);
        console.log(config);

        // Step 5: Update the Page Styles and Message
        // Update the background color of the body
        document.body.style.backgroundColor = config.bg;

        // Update the text color of the body
        document.body.style.color = config.text;

        // Update the display message
        moodDisplay.textContent = config.message;
    }
});