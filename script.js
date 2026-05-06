const navToggle = document.querySelector('.nav-toggle');
const globalNav = document.querySelector('.global-nav');
const navLinks = document.querySelectorAll('.global-nav a');

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
