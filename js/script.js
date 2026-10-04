const burger = document.getElementById('burger');
const nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    toTop.classList.add('show');
  } else {
    toTop.classList.remove('show');
  }
});

toTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

document.getElementById('subscribe').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Спасибо за подписку! 🎉');
  e.target.reset();
});