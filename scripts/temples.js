// Footer
const currentYear = document.querySelector("#currentyear");
currentYear.textContent = new Date().getFullYear();

const lastModified = document.querySelector("#lastModified");
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// My Hamburger menu 
const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  const isOpen = navigation.classList.contains("open");

  menuButton.innerHTML = isOpen ? "&#10006;" : "&#9776;";
  menuButton.setAttribute("aria-expanded", isOpen);
});
