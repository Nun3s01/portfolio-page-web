function smoothScroll() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(2);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop, 
                    behavior: 'smooth'
                });
            }
        });
    });
}

var mediaQuery = window.matchMedia("(max-width: 1024px)");

function handleMediaChange(e) {
    if (e.matches) {
        smoothScroll();
    }
}

mediaQuery.addListener(handleMediaChange);

handleMediaChange(mediaQuery);
