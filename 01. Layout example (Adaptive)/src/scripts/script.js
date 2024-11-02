let loop =  document.querySelector(".header__button_search")
let search =  document.querySelector(".header__searchBlock")

loop.addEventListener("click", (event) => {
	event.stopPropagation();
	search.classList.toggle("loopTransform")
})

document.addEventListener("click", (event) => {
	if (!search.contains(event.target) && search.classList.contains("loopTransform")) {
		search.classList.toggle("loopTransform");
	}
});

let burger = document.querySelector(".burger")
let menu = document.querySelector(".header__nav")
let crossHeader = document.querySelector(".header__crossBtn")

burger.addEventListener("click", () => {
	menu.classList.toggle("transBurger")
	document.body.classList.toggle("stop-scroll");
	burger.classList.toggle("burgerTransform")
})

crossHeader.addEventListener("click",() => {
		menu.classList.remove("transBurger");
		burger.classList.toggle("burgerTransform")
		document.body.classList.remove("stop-scroll");
	})

let headerLink = document.querySelectorAll(".header__navLink")
let headerList = document.querySelectorAll(".header__hiddenList")

headerLink.forEach(link => {
	link.addEventListener("click", () => {
		const isActive = link.classList.contains("up");
		for(element of headerLink) {
			element.classList.remove('up')
		}
		if(!isActive) {
			link.classList.toggle("up")
		}

	  event.stopPropagation();
	  headerList.forEach(list => {
		if (list !== link.parentElement.querySelector(".header__hiddenList")) {
		  list.classList.remove("visible");
		}
	  });
	  let parentList = link.parentElement.querySelector(".header__hiddenList");
	  if (parentList) {
		parentList.classList.toggle("visible");
	  }
	});
  });

document.addEventListener("click", (event) => {
	headerList.forEach(list => {
	  if (!list.contains(event.target) && !Array.from(headerLink).some(link => link.contains(event.target)) && list.classList.contains("visible")) {
		list.classList.toggle("visible");
	  }
	});
  });

let tel = document.querySelector(".header__tel")
let modal = document.querySelector(".modal")
let cross = document.querySelector(".modal__crossBtn")
let modalMain = document.querySelector(".modal__main");

tel.addEventListener("click", () =>  {
	modal.style.display = "flex";
	document.body.classList.toggle("stop-scroll");
  });
  
cross.addEventListener("click", () =>  {
modal.style.display = "none";
document.body.classList.toggle("stop-scroll");
});

document.addEventListener("click", (event) => {
if (!modalMain.contains(event.target) && !tel.contains(event.target) && modal.style.display === "flex") {
	modal.style.display = "none";
	document.body.classList.remove("stop-scroll");
}
});

let phoneInput = document.getElementById('phone');
let phoneMask = IMask(phoneInput, {
	mask: '+{7}(000)000-00-00'
});

let bar = document.querySelector(".header__btnList");

window.addEventListener('scroll', function() {
    let scrolled = window.scrollY;
    let windowHeight = window.innerHeight;
    let fullHeight = document.body.offsetHeight;

    if (scrolled + windowHeight >= fullHeight) {
        bar.classList.add("none");
    } else {
        bar.classList.remove("none");
    }
});

swiper = new Swiper('.hero__slider', {
	slidesPerGroup: 1,
    slidesPerView: 1,
	spaceBetween: 20,
	loop: true,
	navigation: {
		nextEl: '.hero__sliderNav_next',
		prevEl: '.hero__sliderNav_prev',
		},
	pagination: {
		el: '.swiper-pagination',
		}
  })

swiper = new Swiper('.new__slider', {
	loop: false,
	navigation: {
		nextEl: '.new__sliderNav_next',
		prevEl: '.new__sliderNav_prev',
		},
	breakpoints: {
		0: {
			slidesPerGroup: 1,
			slidesPerView: 1,
			spaceBetween: 10,
			pagination: {
				el: '.swiper-pagination-new',
				}
		},
		577: {
			slidesPerGroup: 1,
			slidesPerView: 2,
		},
		745: {
			slidesPerGroup: 1,
			slidesPerView: 3,
		},
		1201: {
			slidesPerGroup: 1,
			slidesPerView: 4,
		}
	}
})
