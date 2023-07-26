const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const logo = new Image();
logo.src = 'paralelo.png'; // Replace 'path_to_dvd_logo.png' with the actual path to your PNG image

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
  // Set canvas size to match the image size
  canvas.width = logo.width;
  canvas.height = logo.height;

  logoWidth = logo.width;
  logoHeight = logo.height;
  x = Math.random() * (canvas.width - logoWidth);
  y = Math.random() * (canvas.height - logoHeight);

  animate();
};
