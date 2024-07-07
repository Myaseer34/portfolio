// Initialize Swiper for image or content slideshows with specific configurations
const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500, 
  },
});

document.addEventListener("DOMContentLoaded", function () {
  // Select all navigation links within the nav element
  const links = document.querySelectorAll('nav a');

  // Add click event listener to each navigation link for smooth scrolling
  for (const link of links) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default link behavior
      const targetId = this.getAttribute('href').substring(1); // Get the ID from the href attribute
      const targetElement = document.getElementById(targetId); // Find the target element by its ID

      // Scroll to the target element smoothly if it exists
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

//  Function to scroll smoothly to the contact section
function goToContact() {
  const contactSection = document.querySelector("#contact"); 
  contactSection.scrollIntoView({ behavior: 'smooth' });
}
