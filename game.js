// Select the canvas element from the HTML
const canvas = document.getElementById('myCanvas');
// Get the 2D rendering context
const ctx = canvas.getContext('2d');

// Set the canvas size to the full window dimensions
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const img = new Image(); // Or document.getElementById('myImage');

// 3. Set the onload event handler BEFORE setting the source
img.onload = function() {
    // 4. Use drawImage() to render the image onto the canvas
    ctx.drawImage(img, 0, 0); // Draws image at coordinates (0, 0)
};

// 5. Set the image source to start loading the image
img.src = 'assets/hearts_1.png';