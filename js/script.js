let button = document.getElementById('convert');
let length = document.getElementById('length');
let price = document.getElementById('price');
let cons = document.getElementById('cons');
let output = document.getElementById('output');
let convert = document.getElementById('convert');
let nnn = 0
let sth = 0
/*
let le = Number(length.value);
let pr = Number(price.value);
let co = Number(cons.value);
*/
convert.disabled = true;
function check() {
    "use strict";
    convert.disabled = true
    if ((length.value === '') || (price.value === '') || (cons.value === '')) {
        //alert("Незаполненные поля");
        console.log("not filled in");
        convert.disabled = true;
        return;
    } else if ((length.value === '') && (price.value === '') && (cons.value === '')) {
        alert("Незаполненные поля");
    } else {
        
        convert.disabled = false;
        console.log("enabling button");let l = Number(length.value);
        console.log(l)
        let p = Number(price.value);
        console.log(p)
        let c = Number(cons.value);
        console.log(c)
        console.log("test?")
        function counttt() {
            if ((l == length.value) || (p == price.value) || (c == cons.value)) {
                console.log("numbers ok");
                let final = (l / 100) * c * p;
                output.value = final;
            } else {
                document.getElementById('convert').disabled = true;
                console.log("not numbers");
                alert("Введите числа");
            }
        }
        button.addEventListener("click", counttt);

    }
    

}


$(document).ready(function () {
    $('input').change(function () {
        check()
    });
});






/*
if (sth == 1) {
    convert.disabled = false;
    console.log("enabling button");let l = Number(length.value);
    console.log(l)
    let p = Number(price.value);
    console.log(p)
    let c = Number(cons.value);
    console.log(c)
    console.log("test?")
    function counttt() {
        if ((l == length.value) || (p == price.value) || (c == cons.value)) {
            console.log("numbers ok");
            let final = (l / 100) * c * p;
            output.value = final;
        } else {
            document.getElementById('convert').disabled = true;
            console.log("not numbers");
            alert("Введите числа");
        }
    }
}
button.addEventListener("click", counttt);
*/
/*
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
*/
/*
$("#theform")
    .on("input", function () {
        check()
        $('#convert').show();
    })
;
*/
/*
let somethingChanged = false;

if ((length.value === '') || (price.value === '') || (cons.value === '')) {
    while ((length.value === '') || (price.value === '') || (cons.value === '')) {
        $(document).ready(function () {
            $('input').change(function () {
                somethingChanged = true;
                return;
            });
        });
    }
}
$(document).ready(function () {
    $('input').change(function () {
        somethingChanged = true;
    });
});
*/
/*

let l = Number(length.value);
let p = Number(price.value);
let c = Number(cons.value);
console.log("test?")
function print() {
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
button.addEventListener("click", print);*/
