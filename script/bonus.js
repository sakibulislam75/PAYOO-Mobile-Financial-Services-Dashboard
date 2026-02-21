document.getElementById('bonus-btn').addEventListener('click', function() {

    const value = getInputValue('coupon');

    if (!value) {
        alert('Enter Coupon');
        return;
    }

    if (value.toUpperCase() !== 'RAMADAN') {
        alert('Invalid Coupon');
        return;
    }
    let balance = currentBalance();
    balance += 10;
    alert('You are awarded');
    setBalance(balance);
    const historyContainer = document.getElementById("history-container");

    const createDiv = document.createElement("div");

    createDiv.innerHTML = `
<div class="card bg-base-100 shadow-md border border-success/20 p-4 text-center rounded-2xl">
    <p class="text-success font-semibold">
        🎁 Bonus <span class="font-bold">+10</span> Added Successfully
    </p>
    <p class="text-neutral/70 text-sm mt-1">
        Coupon Reward Applied
    </p>
    <p class="text-xs text-neutral/50 mt-2">
        ${new Date().toLocaleString()}
    </p>
</div>
`;

    historyContainer.appendChild(createDiv);
});