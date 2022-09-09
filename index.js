let form = document.getElementById("myForm");
let name = document.getElementById("name");
let number = document.getElementById("cardnumber");
let month = document.getElementById("month");
let year = document.getElementById("year");
let cvv = document.getElementById("cvv");
function is_creditCard(str) {
    regexp = /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/;

    if (regexp.test(str)) {
        return true;
    }
    else {
        return false;
    }
}
function is_cvv(str) {
    regex = "^[0-9]{3, 4}$";
    if (regex.test(str)) {
        return true;
    }
    else {
        return false;
    }
}
function checking() {

    if (name.value == "") {
        document.querySelector(".first").classList.remove("error");
        name.style.borderColor = "red";
    } else {
        document.querySelector(".first").classList.add("error");
        name.style.borderColor = "rgb(200, 180, 180)";
    }
    if (number.value == "") {
        document.querySelector(".second").classList.remove("error");
        number.style.borderColor = "red";
    }
    else if (!is_creditCard(number.value)) {
        document.querySelector(".second").innerHTML = "Please enter a valid card number"
    }
    else {
        document.querySelector(".second").classList.add("error");
        number.style.borderColor = "rgb(200, 180, 180)";
    }
    if (month.value == "") {
        document.querySelector(".third").classList.remove("error");
        month.style.borderColor = "red";
    } else {
        document.querySelector(".third").classList.add("error")
        month.style.borderColor = "rgb(200, 180, 180)";
    }
    if (year.value == "") {
        document.querySelector(".third").classList.remove("error");
        year.style.borderColor = "red";
    } else {
        document.querySelector(".third").classList.add("error");
        year.style.borderColor = "rgb(200, 180, 180)";
    }
    if (cvv.value == "") {
        document.querySelector(".fourth").classList.remove("error");
        cvv.style.borderColor = "red";
    } else if (!is_cvv(cvv.value)) {
        document.querySelector(".fourth").innerHTML = "Not valid cvc";
    } else {
        document.querySelector(".fourth").classList.add("error")
        cvv.style.borderColor = "rgb(200, 180, 180)";

    }

}
function nameChange() {
    if (name.value.length != 0) {
        document.querySelector(".cust-name").innerHTML = name.value;
    }
}
function cardChange() {
    if (number.value.length != 0) {
        document.querySelector(".cust-num").innerHTML = number.value;
    }
}
function monthChange() {
    if (month.value.length != 0) {
        document.querySelector(".cust-expm").innerHTML = month.value;
    }
}
function yearChange() {
    if (year.value.length != 0) {
        document.querySelector(".cust-expy").innerHTML = year.value;
    }
}
function cvvChange() {
    if (cvv.value.length != 0) {
        document.querySelector(".cust-cvv").innerHTML = cvv.value;
    }
}
document.getElementById("myForm").onclick = function () {
    document.getElementById("register").style.display = "none";
}
form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (name.value == 0 || cvv.value == 0 || number.value == 0 || month.value == 0 || year.value == 0) {
        checking();
    } else if (!is_creditCard(number.value)) {
        alert("Please enter a valid card number");
    }
    else {
        flip();
    }
})
function flip() {

    document.getElementById("myForm").style.display = "none";
    document.querySelector(".complete").style.display = "block";
}
