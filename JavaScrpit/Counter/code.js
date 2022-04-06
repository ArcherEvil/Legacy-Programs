let counter = document.getElementById("number")
let count = 0;

function increase() {
    count += 1
    counter.innerText = count
}   

function decrease() {
    count -= 1
    counter.innerText = count
}   