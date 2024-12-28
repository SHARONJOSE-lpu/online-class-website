// JavaScript for Online Class Platform

document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll(".nav-links a");
    navLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  
    // Form submission handler
    const contactForm = document.querySelector(".contact form");
    contactForm.addEventListener("submit", event => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const message = formData.get("message");
  
      if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been received.`);
        contactForm.reset();
      } else {
        alert("Please fill out all fields before submitting.");
      }
    });
  
    // Highlight active navigation link on scroll
    const sections = document.querySelectorAll("section");
    const options = {
      threshold: 0.6,
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeLink = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`
          );
          navLinks.forEach(link => link.classList.remove("active"));
          if (activeLink) activeLink.classList.add("active");
        }
      });
    }, options);
  
    sections.forEach(section => observer.observe(section));
  });
  