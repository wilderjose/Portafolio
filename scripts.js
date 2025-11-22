/* ============================
   SMOOTH SCROLL
============================ */
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


/* ============================
   MATRIX BACKGROUND EFFECT
============================ */
const canvas = document.getElementById('matrixCanvas');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

resizeCanvas();

window.addEventListener('resize', resizeCanvas);

const letters = '01';
const fontSize = 16;
let columns = Math.floor(canvas.width / fontSize);
let drops = Array.from({ length: columns }, () => 1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(15, 15, 31, 0.1)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#00ffea';
  ctx.font = fontSize + 'px Orbitron';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
}

setInterval(drawMatrix, 50);


/* ============================
   SKILL BAR ANIMATION
============================ */
function animateSkillBars() {
  const skills = document.querySelectorAll('.bar-inner');

  skills.forEach(skill => {
    const width = skill.getAttribute('data-width');
    skill.style.width = width;
  });
}

window.addEventListener('scroll', () => {
  const skillsSection = document.getElementById('skills');
  const position = skillsSection.getBoundingClientRect().top;

  if (position < window.innerHeight - 150) {
    animateSkillBars();
  }
});


/* ============================
   AJUSTE DE IFRAMES (CERTIFICADOS)
============================ */
function ajustarAlturaIframes() {
  const certificados = document.querySelectorAll('.certificado iframe');

  certificados.forEach(iframe => {
    const width = iframe.offsetWidth;
    let altura = width * 1.2; // proporción PDF

    if (altura < 250) altura = 250;
    if (altura > 400) altura = 400;

    iframe.style.height = altura + 'px';
  });
}

window.addEventListener('load', ajustarAlturaIframes);
window.addEventListener('resize', ajustarAlturaIframes);
