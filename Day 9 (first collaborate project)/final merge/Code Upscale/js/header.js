const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 5) {
    header.classList.add("blur");
  } else {
    header.classList.remove("blur");
  }
});