// swiper carousel js

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// drop downs

const heroSectionHeader = document.querySelector(".hero-section .header")

heroSectionHeader.addEventListener("click", e => {
    const dropdownContainer = e.target.closest(".dropdown-container")
    if (dropdownContainer) {
        const dropdownToggleBtn = e.target.closest(".dropdown-toggle-btn")
        if (dropdownToggleBtn) {
            const dropdown = dropdownContainer.querySelector(".dropdown")
            if (dropdown) {
                dropdown.classList.toggle("open")
            }
        }
    }
})

// menu

const hamburgerIcon = document.querySelector(".hamburger")
const closeIcon = document.querySelector(".close")
const menu = document.querySelector(".menu")

hamburgerIcon.addEventListener("click", () => {
    menu.classList.toggle("open")
})

closeIcon.addEventListener("click", () => {
    menu.classList.toggle("open")
})