// INITIAL LOAD ANIMATION
window.addEventListener("DOMContentLoaded", () => {
  const letters = document.querySelectorAll(".headline span");
  const stats = document.querySelectorAll(".stat");

  letters.forEach((letter, i) => {
    setTimeout(() => {
      letter.classList.add("show");
    }, i * 80);
  });

  stats.forEach((stat, i) => {
    setTimeout(() => {
      stat.classList.add("show");
    }, 800 + i * 200);
  });
});


// SCROLL ANIMATION
const hero = document.querySelector(".hero");
const image = document.querySelector(".visual img");

let current = 0;
let target = 0;
const ease = 0.08;

function animate() {
  target = window.scrollY / hero.offsetHeight;

  current += (target - current) * ease;

  const translateY = current * 200;
  const scale = 1 + current * 0.2;

  image.style.transform = `
    translateY(${translateY}px)
    scale(${scale})
  `;

  requestAnimationFrame(animate);
}

animate();