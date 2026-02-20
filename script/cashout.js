document.getElementById('cashout-btn').addEventListener('click', function() {
    // get-phone no and validate -
    const phn = document.getElementById('agent-number').value;
    if (phn.length != 11) {
        alert('invalid number');
        return;
    }
    // get the withdraw balance
    const amount = document.getElementById('withdraw-amount');
    const withDrawAmount = amount.value;
    // get the current balance
    const BalanceElement = document.getElementById('balance');
    const Balance = (BalanceElement.innerText);

    //set the new balance and ensure number
    const newBalance = Number(Balance) - Number(withDrawAmount);

    if (newBalance < 0) {
        alert('alert invalid amount');
        return;
    }
    // verify pin no
    const inputPin = document.getElementById('input-pin').value;
    if (inputPin == '1234') {
        alert('Cashout Successfull');
        BalanceElement.innerText = newBalance;
    } else {
        alert('Invalid Pin');
        return;
    }
})