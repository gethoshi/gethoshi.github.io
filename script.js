const canvas = document.getElementById('liveWallpaper');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray = [];

// Particle constructor
class Particle {
  constructor(x, y, size, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fill();
  }
}

// Initialize particles
function initParticles() {
  particlesArray = [];
  const numberOfParticles = 100;
  for (let i = 0; i < numberOfParticles; i++) {
    const size = Math.random() * 3 + 1;
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const speedX = Math.random() * 0.6 - 0.3;
    const speedY = Math.random() * 0.6 - 0.3;
    particlesArray.push(new Particle(x, y, size, speedX, speedY));
  }
}

// Animate particles
function animate() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  particlesArray.forEach((particle) => {
    particle.update();
    particle.draw();
  });

  // Draw moving lines
  drawLines();

  requestAnimationFrame(animate);
}

// Draw dynamic lines
function drawLines() {
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(canvas.width / 2, 0);
  ctx.lineTo(canvas.width / 2, canvas.height);
  ctx.stroke();
}

// Responsive canvas
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initParticles();
});
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener("keypress", event => event.preventDefault());
document.body.innerHTML = "your website code";

// Start animation
initParticles();
animate();
