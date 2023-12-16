let button = document.getElementById('convert');
let length = document.getElementById('length');
let price = document.getElementById('price');
let cons = document.getElementById('cons');
let output = document.getElementById('cost');
function print() {
    if ((l == null) || (p = null) || (c == null)) {
        alert("Незаполненные поля"); 
        return;
    } else {
        document.getElementById('convert').setAttribute('enabled');

    }
    if ((isNaN(length) == false) || (isNaN(price) == false) || (isNaN(cons) == false)) {
        document.getElementById('convert').setAttribute('disabled');
        alert("Введите числа");
    } else {
        let l = Number(length.value);
        let p = Number(price.value);
        let c = Number(cons.value);
        let final = (l / 100) * c * p;
        output.value = final;
    }
}
button.addEventListener("click", print);