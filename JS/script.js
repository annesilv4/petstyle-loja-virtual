const menuBtn = document.getElementById("btn-nav");
const mobileMenu = document.getElementById("nav-mobile");

menuBtn.addEventListener("click", () => {
  const icon = menuBtn.querySelector("i");
  icon.classList.toggle("rotate-90");
  mobileMenu.classList.toggle("hidden");
});
