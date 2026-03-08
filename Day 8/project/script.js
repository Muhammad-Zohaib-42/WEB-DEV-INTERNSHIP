const header = document.querySelector("header .bottom")
const heroContentContainer = document.querySelector(".hero-section .content-container")

window.addEventListener("scroll", e => {
    if (window.scrollY > 140) {
        header.classList.add("fixed")
        heroContentContainer.classList.add("fixed")
    } else {
        header.classList.remove("fixed")
        heroContentContainer.classList.remove("fixed")
    }
})