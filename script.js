let nameElement = document.getElementById("name");
console.log(nameElement);
nameElement.textContent = "Sumeka Butt - Web Developer";
let darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});