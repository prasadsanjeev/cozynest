document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Enrollment form handling (front-end only — wire up to a backend/email service to go live)
const form = document.getElementById('enroll-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const data = Object.fromEntries(new FormData(form).entries());

  // TODO: replace with a real submission endpoint (e.g. fetch('/api/enroll', {...}))
  console.log('Enrollment inquiry submitted:', data);

  status.textContent = `Thank you, ${data.parentName.split(' ')[0]}! We've received your inquiry and will contact you within 1–2 business days.`;
  status.className = 'form-status success';
  form.reset();
});
