function kiemTraRong(value, selectorError, name) {
    if (value === '') {
        document.querySelector(selectorError).innerHTML = name + 'not be empty !';
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true;
}

function kiemTraTatCaKyTu(value, selectorError, name) {
    var regexLetter = /^[A-Z a-z]+$/;
    if (regexLetter.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + 'must be letters !';
    return false;
}

function kiemTraEmail(value, selectorError, name) {
    var regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (regexEmail.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + 'must be letters !';
    return false;
}

function kiemTraSo(value, selectorError, name) {
    var regexNumber = /^[0-9]+$/;
    if (regexNumber.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + 'all are numbers !';
    return false;

}

function kiemTraDoDai(value, selectorError, name, minLength, maxLength) {
    var lengthValue = value.length;
    if (lengthValue > maxLength || lengthValue < minLength) {
        document.querySelector(selectorError).innerHTML = name + ' từ ' + minLength + ' đến ' + maxLength;
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true
}


function kiemTraGiaTri(value, selectorError, name, minValue, maxValue) {
    value = Number(value);
    if (value > maxValue || value < minValue) {
        document.querySelector(selectorError).innerHTML = name + ' từ ' + minValue + ' đến ' + maxValue;
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true
}

function kiemTraPassword(value, selectorError, name) {
    var regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (regexPassword.test(value)) {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + '6-20 ký tự chứa ít nhất một chữ <br> số một chữ hoa và một chữ thường!';
    return false;

}

function kiemTraPhone(value, selectorError, name) {
    var regex = /^[0-9]+$/;
    if (!regex.test(value) || value.length < 10 || value.length > 11) {
        document.querySelector(selectorError).innerHTML = name + 'must be between 10 and 11 numbers !';
        return true;
    }
    document.querySelector(selectorError).innerHTML = '';
    return false;
}

function cfmPass(value, value1, selectorError, name) {
    if (value !== value1) {
        document.querySelector(selectorError).innerHTML = name + 'incorrect';
        return false;
    }
    document.querySelector(selectorError).innerHTML = '';
    return true
}