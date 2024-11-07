let checkboxes = document.querySelectorAll('.class__checkClass');

function updateBlockVisibility(checkbox) {
    const targetId = checkbox.getAttribute('data-target');
    const targetBlock = document.getElementById(targetId);

    if (checkbox.checked) {
        targetBlock.style.display = 'flex';
    } else {
        targetBlock.style.display = 'none';
    }
}

// Обработчик события на изменение состояния каждого чекбокса
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => updateBlockVisibility(checkbox));
});

// Функция для синхронизации состояния чекбоксов с видимостью блоков
function syncCheckboxWithBlockVisibility(block) {
    const checkbox = document.querySelector(`input[data-target="${block.id}"]`);
    if (checkbox) { // Проверяем существование чекбокса
        checkbox.checked = block.style.display === 'flex'; // Устанавливаем состояние чекбокса
    }
}

// Наблюдатель за изменениями в DOM
const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
            syncCheckboxWithBlockVisibility(mutation.target);
        }
    });
});

// Наблюдатель для каждого блока
document.querySelectorAll('.check__item').forEach(block => {
    observer.observe(block, { attributes: true });
});

//
let resultCheck = document.querySelectorAll(".check__item")
let resultCross = document.querySelectorAll(".check__close")

resultCross.forEach(e => {
    e.addEventListener("click", () => {
        resultCheck.forEach(elem => {
            if(elem.contains(e)) {
                elem.style.display="none"
            }
        })
    })
})

//

let classBtn = document.querySelectorAll(".class__title");

classBtn.forEach(e => {
    e.addEventListener("click", () => {
        let elem = e.nextElementSibling; // Получаем следующий соседний элемент

        if (elem.classList.contains("class__content")) { // Проверяем, является ли он нужным элементом
            elem.classList.toggle("visibleFlex");
        }
    });
});

//
let classTitle = document.querySelectorAll('.class__title');
let classArrow = document.querySelectorAll('.class__arrow');

classTitle.forEach(e => {
    e.addEventListener("click", ()=> {
        classArrow.forEach(elem => {
            if(e.contains(elem)){
                elem.classList.toggle("arrowTrans")
                }
            })
        })
    }
)

//
let sortBtn = document.querySelector(".slide__btnSort")
let sort = document.querySelector(".sort")

sortBtn.addEventListener("click", () => {
    if(sort.classList.contains("visible")) {
        sort.style.opacity = "0"
        setTimeout(() => {
            sort.classList.remove("visible")
        }, 200);
    } else {
        sort.classList.add("visible")
        setTimeout(() => {
            sort.style.opacity = "1"
        }, 200);
    }
})

//
let searchCheck = document.querySelectorAll(".search__btnCheck")

searchCheck.forEach(e => {
    e.addEventListener("click", () => {
        for(elem of searchCheck) {
            elem.classList.remove("search__btnCheck_active")
        }
        e.classList.add("search__btnCheck_active")
    })
})

// price
var slider = document.querySelector('.slide__price');
var input0 = document.getElementById('input-with-keypress-0-price');
var input1 = document.getElementById('input-with-keypress-1-price');
var inputs = [input0, input1];

noUiSlider.create(slider, {
    start: [0, 6000],
    connect: true,
    tooltips: [
        true,
        wNumb({
            decimals: 0,
            suffix: '$'})],
    range: {
        'min': [0],
        'max': 9999
    },
    format: wNumb({
        decimals: 0,
        suffix: '$'
    })
})

slider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
});


// Listen to keydown events on the input field.
inputs.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        slider.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

        var values = slider.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = slider.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

            case 13:
                slider.noUiSlider.setHandle(handle, this.value);
                break;

            case 38:

                // Get step to go increase slider value (up)
                position = step[1];

                // false = no step is set
                if (position === false) {
                    position = 1;
                }

                // null = edge of slider
                if (position !== null) {
                    slider.noUiSlider.setHandle(handle, value + position);
                }

                break;

            case 40:

                position = step[0];

                if (position === false) {
                    position = 1;
                }

                if (position !== null) {
                    slider.noUiSlider.setHandle(handle, value - position);
                }

                break;
        }
    });
});


// proc
var rangeSlider = document.querySelector('.slide__proc');
var input0_proc = document.getElementById('input-with-keypress-0-proc');
var input1_proc = document.getElementById('input-with-keypress-1-proc');
var inputs_proc = [input0_proc, input1_proc];

noUiSlider.create(rangeSlider, {
    start: [0, 65],
    connect: true,
    tooltips: [
        true,
        wNumb({
            decimals: 0,
            suffix: '%'
        })
    ],
    range: {
        'min': [0],
        'max': 100
    },
    format: wNumb({
        decimals: 0,
        suffix: '%'
    })
});

var rangeSliderValueElement = document.getElementById('input-with-keypress-1-proc');

rangeSlider.noUiSlider.on('update', function (values, handle) {
    var leftValue = parseInt(values[0]);

    if (leftValue > 0) {
        rangeSlider.noUiSlider.set([0, values[1]]);
    }

    rangeSliderValueElement.innerHTML = values[handle];
    inputs_proc[handle].value = values[handle];
});

// Listen to keydown events on the input field.
inputs_proc.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        rangeSlider.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

        var values = rangeSlider.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = rangeSlider.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

            case 13:
                rangeSlider.noUiSlider.setHandle(handle, this.value);
                break;

            case 38:

                // Get step to go increase slider value (up)
                position = step[1];

                // false = no step is set
                if (position === false) {
                    position = 1;
                }

                // null = edge of slider
                if (position !== null) {
                    rangeSlider.noUiSlider.setHandle(handle, value + position);
                }

                break;

            case 40:

                position = step[0];

                if (position === false) {
                    position = 1;
                }

                if (position !== null) {
                    rangeSlider.noUiSlider.setHandle(handle, value - position);
                }

                break;
        }
    });
});

// proc2
var rangeSlider2 = document.querySelector('.slide__proc2');
var input0_proc2 = document.getElementById('input-with-keypress-0-proc2');
var input1_proc2 = document.getElementById('input-with-keypress-1-proc2');
var inputs_proc2 = [input0_proc2, input1_proc2];

noUiSlider.create(rangeSlider2, {
    start: [0, 65],
    connect: true,
    tooltips: [
        true,
        wNumb({
            decimals: 0,
            suffix: '%'
        })
    ],
    range: {
        'min': [0],
        'max': 100
    },
    format: wNumb({
        decimals: 0,
        suffix: '%'
    })
});

var rangeSlider2ValueElement = document.getElementById('input-with-keypress-1-proc2');

rangeSlider2.noUiSlider.on('update', function (values, handle) {
    var leftValue = parseInt(values[0]);

    if (leftValue > 0) {
        rangeSlider2.noUiSlider.set([0, values[1]]);
    }

    rangeSlider2ValueElement.innerHTML = values[handle];
    inputs_proc2[handle].value = values[handle];
});

// Listen to keydown events on the input field.
inputs_proc2.forEach(function (input, handle) {

    input.addEventListener('change', function () {
        rangeSlider2.noUiSlider.setHandle(handle, this.value);
    });

    input.addEventListener('keydown', function (e) {

        var values = rangeSlider2.noUiSlider.get();
        var value = Number(values[handle]);

        // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
        var steps = rangeSlider2.noUiSlider.steps();

        // [down, up]
        var step = steps[handle];

        var position;

        // 13 is enter,
        // 38 is key up,
        // 40 is key down.
        switch (e.which) {

            case 13:
                rangeSlider2.noUiSlider.setHandle(handle, this.value);
                break;

            case 38:

                // Get step to go increase slider value (up)
                position = step[1];

                // false = no step is set
                if (position === false) {
                    position = 1;
                }

                // null = edge of slider
                if (position !== null) {
                    rangeSlider2.noUiSlider.setHandle(handle, value + position);
                }

                break;

            case 40:

                position = step[0];

                if (position === false) {
                    position = 1;
                }

                if (position !== null) {
                    rangeSlider2.noUiSlider.setHandle(handle, value - position);
                }

                break;
        }
    });
});

//
var rangeSliderNoise = document.querySelector('.slide__noise');

noUiSlider.create(rangeSliderNoise, {
    start: [0, 50],
    connect: true,
    range: {
        'min': [0],
        'max': [100]
    }
});

