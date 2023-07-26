const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const logo = new Image();
logo.src = 'paralelo.png'; // Replace 'paralelo.png' with the actual path to your PNG image

const logoWidth = 100; // Adjust this value as needed
const logoHeight = 60; // Adjust this value as needed

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let x = Math.random() * (canvasWidth - logoWidth);
let y = Math.random() * (canvasHeight - logoHeight);
let dx = 2; // Horizontal speed
let dy = 2; // Vertical speed

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  ctx.drawImage(logo, x, y, logoWidth, logoHeight);

  x += dx;
  y += dy;

  if (x < 0 || x + logoWidth > canvasWidth) {
    dx = -dx;
    x += dx * 2;
  }

  if (y < 0 || y + logoHeight > canvasHeight) {
    dy = -dy;
    y += dy * 2;
  }
}

logo.onload = animate;
