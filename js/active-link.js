// Set active link based on current page
document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    const navLinks = {
        'index.html': 0,
        '': 0,
        'log-in.html': 1,
        'register.html': 2
    };

    const links = document.querySelectorAll('.frame a[href]');
    
    links.forEach((link, index) => {
        // Get the href
        const href = link.getAttribute('href');
        
        // Check if this link matches the current page
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            // Find the parent div and add active class
            const parentDiv = link.querySelector('[class*="frame-2"], [class*="div"], [class*="div-wrapper"]');
            if (parentDiv) {
                parentDiv.classList.add('active-link');
            }
        }
    });
});


  const slides = document.querySelector(".slides");
  const dots = document.querySelectorAll(".dot");
  let index = 0;

  function showSlide(i) {
    slides.style.transform = `translateX(${i * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[i].classList.add("active");
  }

  setInterval(() => {
    index = (index + 1) % dots.length;
    showSlide(index);
  }, 4000);


