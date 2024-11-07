let menuLink = document.querySelectorAll(".menu__link")

menuLink.forEach(elem => {
    elem.addEventListener("click", ()=> {
        for(e of menuLink) {
            e.classList.remove("menu__link_active")
        }
        elem.classList.add("menu__link_active")
    })
})

let footer = document.querySelector('.footer');
let menu = document.querySelector('.menu');

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            menu.classList.add('hidden');
        } else {
            menu.classList.remove('hidden');
        }
    });
};

const observer = new IntersectionObserver(callback);
observer.observe(footer);

let burger = document.querySelector(".burger")
let catalog = document.querySelector(".catalog")
let cross = document.querySelector(".catalog__cross")
let catalogLink = document.querySelectorAll('.catalog__link')

burger.addEventListener("click", ()=> {
    catalog.classList.add("transCatalog")
    document.body.classList.add("stop-scroll");
})
cross.addEventListener("click", ()=> {
    catalog.classList.remove("transCatalog")
    document.body.classList.remove("stop-scroll");
})

catalogLink.forEach(e => {
    e.addEventListener("click", () => {
        catalog.classList.remove("transCatalog")
        document.body.classList.remove("stop-scroll");
    })
})

let navLink = document.querySelectorAll(".nav__link")

navLink.forEach(elem => {
    elem.addEventListener("click", () => {
        for(e of navLink) {
            e.classList.remove("activeNav")
        }
        elem.classList.add("activeNav")
    })
})

swiper = new Swiper('.nav', {
	slidesPerGroup: 1,
    slidesPerView: "auto",
	loop: true,
	navigation: {
		nextEl: '.nav__next'
		},
    breakpoints: {
        0: {
            spaceBetween: 20
        },
        768: {
            spaceBetween: 37
        }
    }
  })