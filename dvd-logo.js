const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const logo = new Image();
logo.src = 'paralelo.png'; // Replace 'paralelo.png' with the actual path to your PNG image

const maxCanvasWidth = 10; // Adjust this value as needed
const maxCanvasHeight = 100; // Adjust this value as needed

let logoWidth;
let logoHeight;
let x;
let y;
let dx = 2; // Horizontal speed
let dy = 2; // Vertical speed

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.drawImage(logo, x, y, logoWidth, logoHeight);

  x += dx;
  y += dy;

  if (x < 0 || x + logoWidth > canvas.width) {
    dx = -dx;
    x += dx * 2;
  }

  if (y < 0 || y + logoHeight > canvas.height) {
    dy = -dy;
    y += dy * 2;
  }
}

logo.onload = function () {
  const aspectRatio = logo.width / logo.height;

  // Set canvas size to match the image size, considering the maximum canvas size
  if (aspectRatio > 1) {
    logoWidth = Math.min(logo.width, maxCanvasWidth);
    logoHeight = logoWidth / aspectRatio;
  } else {
    logoHeight = Math.min(logo.height, maxCanvasHeight);
    logoWidth = logoHeight * aspectRatio;
  }

  canvas.width = logoWidth;
  canvas.height = logoHeight;

  x = Math.random() * (canvas.width - logoWidth);
  y = Math.random() * (canvas.height - logoHeight);

  animate();
};
