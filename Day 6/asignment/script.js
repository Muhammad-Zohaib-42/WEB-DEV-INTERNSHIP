const goToTopLink = document.querySelector(".go-to-top-link")
const header = document.querySelector("header")

window.addEventListener("scroll", () => {
    if (window.scrollY > 714) {
        goToTopLink.classList.add("show")
        header.classList.add("fix")
    } else {
        goToTopLink.classList.remove("show")
        header.classList.remove("fix")
    }
})