// NAVBAR
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = navMenu.querySelectorAll("li");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

const sendEmail = () => {
  const serviceId = "service_19wg4v9";
  const templateId = "template_b6ujb8o";

  emailjs
    .sendForm(serviceId, templateId, document.getElementById("contact-form"))
    .then(alert("Your message has been sent :)"));
};
