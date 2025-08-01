// Optional: Basic form success alert
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for your message, Tolu will reach out soon!");
  this.reset();
});
