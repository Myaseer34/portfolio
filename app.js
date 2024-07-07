const swiper = new Swiper('.swiper-container', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
  },
})


document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll('nav a');

  for (const link of links) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

function goToContact() {
  const contactSection = document.querySelector("#contact")
  contactSection.scrollIntoView({ behavior: 'smooth' });
}