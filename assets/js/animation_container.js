window.addEventListener('scroll', function() {
  const containerMain = document.getElementById('container-main');
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scrollPosition > windowHeight / 1.8) {
    containerMain.classList.add('visible');
  } else {
    containerMain.classList.remove('visible');
  }
});