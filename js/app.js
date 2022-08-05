function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            document.getElementById('display-number').value = '';
        }
    }
    else {
        const displayCalc = document.getElementById('display-number');
        const previousCalc = displayCalc.value;
        const newCalc = previousCalc + number;
        displayCalc.value = newCalc;
    }
});

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const number = document.getElementById('display-number').value;
    const success = document.getElementById('success');
    const error = document.getElementById('error');
    if (pin == number) {
        success.style.display = 'block';
        error.style.display = 'none';
    }
    else {
        error.style.display = 'block';
        success.style.display = 'none';
    }
}