// John Griffith
// Created 12/06/2025

// Meme Generator
// This project chooses a random image and lets the user add
// top and bottom text to create a simple meme.

// Stores images that will generate randomly
const images = [
    "images/crazyGf.jpg",
    "images/disasterGirl.jpg",
    "images/fry.jpg",
    "images/grumpyCat.jpg",
    "images/shibu.jpg",
    "images/wtf.jpg",
];

// Gets DOM elements for imputs, buttons, image, and text
const topTextInput = document.getElementById("topTextInput");
const bottomTextInput = document.getElementById("bottomTextInput");
const generateBtn = document.getElementById("generateBtn");
const refreshBtn = document.getElementById("refreshBtn");
const saveBtn = document.getElementById("saveBtn");

const memeImage = document.getElementById("meme-image");
const memeTopText = document.getElementById("meme-top-text");
const memeBottomText = document.getElementById("meme-bottom-text");
const message = document.getElementById("message");

// Gets random image using Math.random()
function getRandomImage() {
    const index = Math.floor(Math.random() * images.length);
    return images[index];
}

// Shows next random image
function showNextImage() {
    memeImage.src = getRandomImage();

    // Clears text/inputs when image changes
    memeTopText.textContent = "";
    memeBottomText.textContent = "";
    topTextInput.value = "";
    bottomTextInput.value = "";
    message.textContent = "";
}

// Applies text to current image
function generateMeme() {
    const top = topTextInput.value.trim();
    const bottom = bottomTextInput.value.trim();
    // Gives message if text field is left blank and user hits Apply Text
    if (top === "" && bottom === "") {
        message.textContent = "Please enter at least top or bottom text.";
        return;
    } else {
        message.textContent = "";
    }

    memeTopText.textContent = top || "";
    memeBottomText.textContent = bottom || "";
}

// Saves meme using a canvas
function saveMeme() {
    console.log("Save button clicked");

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = memeImage.src;

    img.onload = function () {
        try {
            // Matches canvas size to image
            canvas.width = img.width;
            canvas.height = img.height;

            // Draws the base image
            ctx.drawImage(img, 0, 0);

            // Sets up text styles
            ctx.textAlign = "center";
            ctx.fillStyle = "white";
            ctx.strokeStyle = "black";
            ctx.lineWidth = 4;
            ctx.font = "40px Impact, Arial, sans-serif";

            const top = memeTopText.textContent.trim();
            const bottom = memeBottomText.textContent.trim();

            // Draws top text
            if (top !== "") {
                const yTop = 50;
                ctx.strokeText(top.toUpperCase(), canvas.width / 2, yTop);
                ctx.fillText(top.toUpperCase(), canvas.width / 2, yTop);
            }

            // Draws bottom text
            if (bottom !== "") {
                const yBottom = canvas.height - 30;
                ctx.strokeText(bottom.toUpperCase(), canvas.width / 2, yBottom);
                ctx.fillText(bottom.toUpperCase(), canvas.width / 2, yBottom);
            }

            // Tries to download image
            const link = document.createElement("a");
            link.download = "meme.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        } catch (err) {
            console.error(err);
            alert(
                "Saving failed. If you opened index.html by double-clicking it, " +
                "try running it with Live Server in VS Code instead."
            );
        }
    };
}

// Event listeners
generateBtn.addEventListener("click", generateMeme);
refreshBtn.addEventListener("click", showNextImage);
saveBtn.addEventListener("click", saveMeme);

bottomTextInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        generateMeme();
    }
});

// Shows next random image when the page loads
showNextImage();
