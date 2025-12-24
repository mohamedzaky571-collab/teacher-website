document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.FAQS .faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (!question) return;

    question.addEventListener('click', function() {
      // close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherQ = otherItem.querySelector('.faq-question');
          if (otherQ) otherQ.setAttribute('aria-expanded', 'false');
        }
      });

      // toggle current item
      item.classList.toggle('active');
      const isActive = item.classList.contains('active');
      question.setAttribute('aria-expanded', isActive);
    });

    // keyboard support (Enter/Space to toggle)
    question.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        question.click();
      }
    });
  });
});
