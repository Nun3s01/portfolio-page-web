function handleScrollAnimation() {
  window.addEventListener('scroll', function() {
      const containerMain = document.getElementById('container-main');
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight / 6) {
          containerMain.classList.add('visible');
      } else {
          containerMain.classList.remove('visible');
      }
  });
}

var mediaQuery = window.matchMedia("(max-width: 1024px)");

function handleMediaChange(e) {
  if (e.matches) {
      handleScrollAnimation();
  }
}


mediaQuery.addListener(handleMediaChange);


handleMediaChange(mediaQuery);
