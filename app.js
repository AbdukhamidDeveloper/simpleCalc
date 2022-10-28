const view = document.querySelector(".view");
const btns = document.querySelectorAll(".btnNum")
const equal = document.querySelector('#equal')
const clear = document.querySelector('#Clear')
const backspace = document.querySelector('#BackSpace')
const percent = document.querySelector('#percent')

let view1 = "";
const btnValue = ''

for (const btn of btns) {
    btn.addEventListener('click', () => {
        view1 += btn.value
        view.innerHTML = view1
    })
    document.addEventListener('keydown',event => {
        if(btn.value === event.key){
            view1 += btn.value
            view.innerHTML = view1
        }
    })
}

//Equal BTN

equal.addEventListener('click', () => {
    view1 = eval(view1)
    view.innerHTML = view1
})

document.addEventListener('keydown', event => {
    if(event.key === 'Enter') {
        view1 = eval(view1)
        view.innerHTML = view1
    }
})

// Clear BTN

clear.addEventListener('click', () => {
    view.innerHTML = '0'
    view1 = ''
})

//Backspace BTN

backspace.addEventListener('click', () => {
    const str2 = view1.slice(0, -1)
    view.innerHTML = str2
    view1 = str2
})

// Percent BTN

percent.addEventListener('click', () => {
    let view3 = parseInt(view1) /100
    view.innerHTML = view3
    view1 = String(view3)
})

