const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

let W, H;
function resize() {
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Crypto symbols
const symbols = ["₿", "Ξ", "$", "◈", "⛓"];
const particles = [];
const COUNT = Math.floor((W * H) / 18000);

function random(min, max) {
  return Math.random() * (max - min) + min;
}

// Create particles
for (let i = 0; i < COUNT; i++) {
  particles.push({
    x: random(0, W),
    y: random(0, H),
    size: random(14, 26),
    speed: random(0.2, 0.7),
    opacity: random(0.15, 0.6),
    symbol: symbols[Math.floor(Math.random() * symbols.length)],
    drift: random(-0.3, 0.3)
  });
}

function draw() {
  ctx.clearRect(0, 0, W, H);

  particles.forEach(p => {
    ctx.font = `${p.size}px Inter`;
    ctx.fillStyle = `rgba(45, 228, 199, ${p.opacity})`;
    ctx.fillText(p.symbol, p.x, p.y);

    p.y -= p.speed;
    p.x += p.drift;

    // Reset when off screen
    if (p.y < -20) {
      p.y = H + 20;
      p.x = random(0, W);
    }
  });

  requestAnimationFrame(draw);
}

draw();
