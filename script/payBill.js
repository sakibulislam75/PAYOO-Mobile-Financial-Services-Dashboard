document.getElementById('bill-btn').addEventListener('click', function() {

    // Bill account number
    const billNumber = getInputValue('bill-account-number');

    if (!billNumber || billNumber.length !== 11) {
        alert('Invalid Bill Number');
        return;
    }

    // Bill amount
    const billAmount = Number(getInputValue('bill-amount'));

    const currentBalanceValue = currentBalance();

    const newBalance = currentBalanceValue - billAmount;

    if (newBalance < 0) {
        alert('Invalid Amount');
        return;
    }

    // Pin verification
    const pin = getInputValue('bill-pin');

    if (pin !== '1234') {
        alert('Payment Failed');
        return;
    }

    alert('Bill Paid Successfully');

    setBalance(newBalance);

    // History card
    const historyContainer = document.getElementById("history-container");

    const createDiv = document.createElement("div");

    createDiv.innerHTML = `
    <div class="card bg-base-100 shadow-md border border-primary/20 p-4 text-center rounded-2xl">
        <p class="text-success font-semibold">
            Bill Payment <span class="font-bold">${billAmount}</span> Successfully
            from Account ${billNumber}
        </p>
        <p class="text-xs text-neutral/60 mt-2">
            ${new Date().toLocaleString()}
        </p>
    </div>
    `;

    historyContainer.appendChild(createDiv);
});