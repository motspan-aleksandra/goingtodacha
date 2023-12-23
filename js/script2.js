/*
let button = document.getElementById('convert');
let length = document.getElementById('length');
let price = document.getElementById('price');
let cons = document.getElementById('cons');
let output = document.getElementById('cost');
let convert = document.getElementById('convert');
*/

// var buttonpressed = false;
let l = Number(length.value);
console.log(l)
let p = Number(price.value);
console.log(p)
let c = Number(cons.value);
console.log(c)
console.log("test?")
function counttt() {
    if ((l == length.value) || (p == price.value) || (c == cons.value)) {
        document.getElementById('convert').disabled = true;
        console.log("not numbers");
        alert("Введите числа");
    } else {
        console.log("numbers ok");
        let final = (l / 100) * c * p;
        output.value = final;
    }
}
button.addEventListener("click", counttt);
/*
function waitForIt() {
    if (!buttonpressed) {
        setTimeout(waitForIt, 2500);
    } else {
        document.getElementById('info').value = 'ok';
    }
}
function startSomething() {
    document.getElementById('info').value = '';
    waitForIt();
    document.getElementById('info').value = 'waiting';
}
function setButtonPressed() {
    buttonpressed = true;
}
*/