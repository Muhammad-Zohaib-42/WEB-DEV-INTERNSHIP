const openSearchbarBtn = document.querySelector(".open-searchbar-btn")
const closeSearchbarBtn = document.querySelector(".close-searchbar-btn")
const searchbarContainer = document.querySelector(".search-bar-container")
const hamburgerBtn = document.querySelector(".bars")
const nav = document.querySelector("header nav")
const header = document.querySelector("header")

openSearchbarBtn.addEventListener("click", e => {
    e.preventDefault()
    searchbarContainer.classList.add("active")
})
closeSearchbarBtn.addEventListener("click", () => searchbarContainer.classList.remove("active"))

hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active")
    nav.classList.toggle("active")
})

window.addEventListener("scroll", () => {
    if (window.scrollY > 10) {
        header.classList.add("fixed")
    } else {
        header.classList.remove("fixed")
    }
})