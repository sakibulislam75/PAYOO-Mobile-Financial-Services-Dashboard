document.getElementById("cashout-btn").addEventListener("click", function() {
    // get-cashout-number
    const cashoutNumber = getInputValue("agent-number");
    if (cashoutNumber.length != 11) {
        alert("Invalid Number");
        return;
    }
    //get current balance
    const currentBalance1 = currentBalance();

    // get withdraw-amount
    const cashOutAmount = getInputValue("withdraw-amount");

    //newBalance
    const newBalnce = currentBalance1 - Number(cashOutAmount);
    if (newBalnce < 0) {
        alert("Invalid Amount");
        return;
    }
    //get pin number + verification
    const pin = getInputValue("input-pin");
    if (pin == "1234") {
        alert(`Cashout ${cashOutAmount} Successfully from ${cashoutNumber}`);
        setBalance(newBalnce);
    } else {
        alert("Cashout Failed");
    }
    //transactionHistory
    const historyContainer = document.getElementById("history-container");
    const createDiv = document.createElement("div");
    createDiv.innerHTML = `
<div class="card bg-base-100 shadow-md border border-error/20 p-4 text-center rounded-2xl">
    <p class="text-error font-semibold">
        Cashout <span class="font-bold">${cashOutAmount}</span> Successfully from ${cashoutNumber}
    </p>
    <p class="text-xs text-neutral/60 mt-2">
        ${new Date().toLocaleString()}
    </p>
</div>
`;
    historyContainer.appendChild(createDiv);
});

/*


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

*/