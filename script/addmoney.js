document.getElementById('addMoney-btn').addEventListener('click', function() {
    // get-bank
    const bankName = getInputValue('add-money-bank');


    // get-account-number
    const number = getInputValue('add-money-number');
    if (number.length != 11) {
        alert('Invalid Number');
        return;
    }

    //get amount
    const addAmount = getInputValue('add-money-amount');

    // current newAmount
    const cAmount = currentBalance();

    // new amount
    const newAmount = cAmount + Number(addAmount);

    // get pin + verifies
    const pin = getInputValue('add-money-pin');
    if (pin == '1234') {
        alert(`Added Successfully form ${bankName} at ${new Date()} `);
        setBalance(newAmount);
    } else {
        alert('Added Failed');
        return;
    }

    //transactionHistory
    const historyContainer = document.getElementById('history-container');
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
<div class="card bg-base-100 shadow-md border border-primary/20 p-4 text-center rounded-2xl">
    <p class="text-success font-semibold">
        Added <span class="font-bold">${addAmount}</span> Successfully from ${bankName}, Acc:${number}
    </p>
    <p class="text-xs text-neutral/60 mt-2">
        ${new Date().toLocaleString()}
    </p>
</div>
`;
    historyContainer.appendChild(createDiv);

})