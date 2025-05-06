AOS.init({
    duration: 1000,
    once: true,
  });
  
  document.getElementById('menu-toggle').addEventListener('click', function () {
    document.getElementById('nav').classList.toggle('active');
  });
  