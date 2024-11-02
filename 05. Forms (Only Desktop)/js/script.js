
// arrow select theme
let select_theme = document.querySelector('.theme__select');
let arrow_theme = document.querySelector('.theme__selectBlock');

select_theme.addEventListener("click", () => {
    arrow_theme.classList.toggle('arrow_active');
});

document.addEventListener('click', function(event) {
    let targetElement = event.target;
    if (!targetElement.closest('.theme__select')) {
        arrow_theme.classList.remove('arrow_active');
    }
});

// arrow select message
let message_select = document.querySelectorAll('.message__select');
let arrow_message = document.querySelectorAll('.message__selectBlock');

document.addEventListener("click", function(event) {
    let targetElement = event.target;
    if (!targetElement.closest(".message__select")) {
        arrow_message.forEach(function(arrowElement) {
            arrowElement.classList.remove('arrow_active');
        });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    message_select.forEach(function(childElement) {
        childElement.addEventListener("click", function() {
            let currentParent = this.parentElement;
            
            arrow_message.forEach(function(arrowElement) {
                if (arrowElement !== currentParent) {
                    arrowElement.classList.remove('arrow_active');
                }
            });
            
            if (currentParent.classList.contains('arrow_active')) {
                currentParent.classList.remove('arrow_active');
            } else {
                currentParent.classList.add('arrow_active');
            }
        });
    });
});

// format choice bg
let formatChoice = document.querySelectorAll(".format__choice")

formatChoice.forEach(e => {
    e.addEventListener("click", () => {
        for(elem of formatChoice) {
            elem.classList.remove("format__choice_active")
        }
        e.classList.add("format__choice_active")
    })
})

let filterChoice = document.querySelectorAll(".filter__item")

filterChoice.forEach(e => {
    e.addEventListener("click", () => {
        for(elem of filterChoice) {
            elem.classList.remove("filter__item_active")
        }
        e.classList.add("filter__item_active")
    })
})

// подписка активна
let active = document.querySelector(".form__activeInput")
let ball = document.querySelector(".form__activeBtn")

active.addEventListener("click", () => {
    ball.classList.toggle("toggleBall")
})


// gs
const isMobile = window.matchMedia('(max-width: 768px)').matches;

if (!isMobile) {
	document.querySelectorAll('.main').forEach(card => {
	  gsap.from(card, {
		opacity: 0,
		duration: 1.5,
		delay: .5,
		scrollTrigger: {
		  trigger: card,
		},
	  });
	});
  }

//  email check
let textArea = document.querySelector('.theme__textarea');
let errorDisplay = document.querySelector('#error-message');

textArea.addEventListener('input', function() {
    let text = textArea.value;
    let count = (text.match(/@/g) || []).length;

    if (count > 20) {
        textArea.value = text.slice(0, -1);
        errorDisplay.textContent = 'Достигнуто максимальное количество email';
    } else if (count === 0) {
        errorDisplay.textContent = 'Некорректный email';
    } else {
        errorDisplay.textContent = '';
    }
});