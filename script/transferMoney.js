document.getElementById('transfer-btn').addEventListener('click', function() {

    const userNumber = getInputValue('user-account-number');

    if (userNumber.length !== 11) {
        alert('Invalid Number');
        return;
    }

    const tAmount = getInputValue('transfer-amount');

    const crnBlnc = currentBalance();

    const nBlnc = crnBlnc - Number(tAmount);

    if (nBlnc < 0) {
        alert('Invalid Amount');
        return;
    }

    const tPin = getInputValue('transfer-pin');

    if (tPin !== '1234') {
        alert('Transfer Failed');
        return;
    }

    alert('Transfer Successful');
    setBalance(nBlnc);

    // history
    const historyContainer = document.getElementById("history-container");

    const createDiv = document.createElement("div");

    createDiv.innerHTML = `
    <div class="card bg-base-100 shadow-md border border-primary/20 p-4 text-center rounded-2xl">
        <p class="text-success text-red-400 font-semibold">
            Transfer <span class="font-bold">${tAmount}</span> Successfully to ${userNumber}
        </p>
        <p class="text-xs text-neutral/60 mt-2">
            ${new Date().toLocaleString()}
        </p>
    </div>
    `;

    historyContainer.appendChild(createDiv);
});