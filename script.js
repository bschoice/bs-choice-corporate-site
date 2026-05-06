const navToggle = document.querySelector('.nav-toggle');
const globalNav = document.querySelector('.global-nav');
const navLinks = document.querySelectorAll('.global-nav a');
const contactForm = document.querySelector('.contact-form');

const closeNav = () => {
  navToggle.setAttribute('aria-expanded', 'false');
  globalNav.classList.remove('is-open');
  document.body.classList.remove('nav-open');
};

navToggle.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  globalNav.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('nav-open', !isOpen);
});

navLinks.forEach((link) => {
  link.addEventListener('click', closeNav);
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 920) {
    closeNav();
  }
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('現在、送信機能は準備中です。お問い合わせ内容のデザイン確認用フォームです。');
});
