document.addEventListener("DOMContentLoaded", () => {
  const analytikaCore = document.querySelector('.analytikaCore');

  window.addEventListener('scroll', () => {
    analytikaCore.classList.toggle('d-none', window.scrollY > 50);
  });
});
