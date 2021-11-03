const description = document.getElementById('description')

const number = document.getElementById('number').firstElementChild

let numberLength = Number(number.innerText)

description.addEventListener('keyup', function(){
    number.innerText = numberLength - this.value.length

    if(number.innerText === '0') {
        this.readOnly = true
    }
})