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
document.body.innerHTML = "<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <link rel="apple-touch-icon" type="image/png" href="https://i.ibb.co/XzmWRhP/qwkujhrk.png" />
  <meta name="apple-mobile-web-app-title" content="Hoshi Z">
  <link rel="shortcut icon" type="image/x-icon" href="https://i.ibb.co/XzmWRhP/qwkujhrk.png" />
  <link rel="mask-icon" type="image/x-icon" href="https://i.ibb.co/XzmWRhP/qwkujhrk.png" color="#111" />
  <title>Hoshi Z</title>
  <link rel="canonical" href="https://codepen.io/osorina/pen/PQdMOO">

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box !important;
    }

    html, body {
      height: 100%;
    }

    body {
      display: table;
      width: 100%;
      height: 100%;
      background-color: #171717;
      color: #fff;
      font-family: sans-serif;
      overflow: hidden;
    }

    .lines {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 100%;
      margin: auto;
      width: 90vw;
    }

    .line {
      position: absolute;
      width: 1px;
      height: 100%;
      top: 0;
      left: 50%;
      background: rgba(255, 255, 255, 0.1);
      overflow: hidden;
    }

    .line::after {
      content: "";
      display: block;
      position: absolute;
      height: 15vh;
      width: 100%;
      top: -50%;
      left: 0;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 75%, #ffffff 100%);
      -webkit-animation: drop 7s 0s infinite;
      animation: drop 7s 0s infinite;
      -webkit-animation-fill-mode: forwards;
      animation-fill-mode: forwards;
      -webkit-animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
      animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
    }

    .line:nth-child(1) {
      margin-left: -25%;
    }

    .line:nth-child(1)::after {
      -webkit-animation-delay: 2s;
      animation-delay: 2s;
    }

    .line:nth-child(3) {
      margin-left: 25%;
    }

    .line:nth-child(3)::after {
      -webkit-animation-delay: 2.5s;
      animation-delay: 2.5s;
    }

    @-webkit-keyframes drop {
      0% {
        top: -50%;
      }

      100% {
        top: 110%;
      }
    }

    @keyframes drop {
      0% {
        top: -50%;
      }

      100% {
        top: 110%;
      }
    }

    /* Title Styles */
    .title {
      position: absolute;
      top: 20px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 40px;
      color: white;
      text-align: center;
      animation: shineFade 3s infinite;
    }

    /* Description Styles */
    .description {
      position: absolute;
      top: 80px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
      color: white;
      text-align: center;
    }

    /* Showcase Styles */
    .showcase {
      position: absolute;
      top: 140px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 20px;
      color: white;
      text-align: center;
    }

    /* YouTube Embed Styles */
    .video-container {
      position: absolute;
      top: 180px;
      left: 50%;
      transform: translateX(-50%);
      width: 80%;
      height: 50%;
      max-width: 800px;
      max-height: 450px;
    }

    /* Button Container Styles */
    .button-container {
      position: absolute;
      top: 650px; /* Placing buttons below the video */
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    /* Button Styles */
    .button {
      padding: 15px 30px;
      font-size: 18px;
      color: #fff;
      background-color: #333;
      border: none;
      border-radius: 50px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      transition: all 0.3s ease-in-out;
    }

    .button:before {
      content: "";
      position: absolute;
      top: -200%;
      left: -200%;
      width: 200%;
      height: 200%;
      background: linear-gradient(45deg, #00c6ff, #0072ff);
      transition: all 0.4s ease;
      opacity: 0.4;
      border-radius: 50%;
    }

    .button:hover:before {
      top: -50%;
      left: -50%;
      width: 150%;
      height: 150%;
    }

    .button:hover {
      transform: scale(1.1);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
    }

    .button:focus {
      outline: none;
    }

    .button:active {
      background-color: #444;
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.4);
    }

    /* Shine + Fade Animation */
    @keyframes shineFade {
      0% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2);
        opacity: 0.8;
      }

      50% {
        text-shadow: 0 0 20px rgba(255, 255, 255, 0.8), 0 0 30px rgba(255, 255, 255, 0.6), 0 0 40px rgba(255, 255, 255, 0.4);
        opacity: 1;
      }

      100% {
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.6), 0 0 20px rgba(255, 255, 255, 0.4), 0 0 30px rgba(255, 255, 255, 0.2);
        opacity: 0.8;
      }
    }
  </style>
</head>

<body translate="no">
  <div class="lines">
    <div class="line"></div>
    <div class="line"></div>
    <div class="line"></div>
  </div>

  <!-- Title and Description -->
  <div class="title">Hoshi Z</div>
  <div class="description">Hoshi Z The Best Free Roblox Scripting Utility</div>

  <!-- Showcase Text -->
  <div class="showcase">Official Showcase</div>

  <!-- YouTube Video Embed -->
  <div class="video-container">
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aXlpotfD2k4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </div>

  <!-- Buttons -->
  <div class="button-container">
    <button class="button" onclick="window.location.href='https://mboost.me/a/dg9'">Download</button>
    <button class="button" onclick="window.location.href='https://discord.gg/niger'">Android Download</button>
    <button class="button" onclick="window.location.href='https://discord.gg/gethoshi'">Discord Server</button>
  </div>
</body>

</html>
";

// Start animation
initParticles();
animate();
