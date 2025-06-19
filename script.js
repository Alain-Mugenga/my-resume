// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetID = this.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: 'smooth'
      });
    }
  });
});

// Developer console message
console.log("👋 Hello developer! Thanks for checking out my portfolio.");
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const message = document.getElementById('form-message');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      
      // Simple simulation of a form submission
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const msg = document.getElementById('message').value.trim();

      if (name && email && msg) {
        message.textContent = `Thanks for your message, ${name}! I'll get back to you soon.`;
        form.reset();
      } else {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
      }
    });
  }
});

