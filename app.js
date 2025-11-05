const modal = document.getElementById('modal');
const openBtn = document.getElementById('openBtn');
const closeBtn = document.getElementById('close');
const confettiCanvas = document.getElementById('confetti');

openBtn.onclick = () => {
  modal.classList.add('show');
  startConfetti();
};
closeBtn.onclick = () => modal.classList.remove('show');
modal.onclick = (e) => { if(e.target === modal) modal.classList.remove('show'); };

// --- Confetti animation ---
function startConfetti() {
  const ctx = confettiCanvas.getContext('2d');
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  const pieces = Array.from({ length: 100 }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight - window.innerHeight,
    size: Math.random() * 8 + 4,
    color: `hsl(${Math.random() * 360}, 70%, 60%)`,
    speed: Math.random() * 3 + 2
  }));

  function draw() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    for (let p of pieces) {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.fill();
      p.y += p.speed;
      if (p.y > confettiCanvas.height) p.y = 0;
    }
    requestAnimationFrame(draw);
  }
  draw();
}