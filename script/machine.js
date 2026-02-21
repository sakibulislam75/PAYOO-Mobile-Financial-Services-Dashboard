//common function-> id->value
function getInputValue(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

//common function-> currrent balance
function currentBalance() {
    const balanceElement = document.getElementById('balance');
    const value = balanceElement.innerText;
    return Number(value);
}

//common function->set current balance
function setBalance(value) {
    const balance = document.getElementById('balance');
    balance.innerText = value;
    return balance;
}

// common function->hide+open
function showOnly(id) {

    const cashOut = document.getElementById('cash-out');
    const addMoney = document.getElementById('add-money');
    const tmny = document.getElementById('transfer-money');
    const bill = document.getElementById('pay-bill')
    const bonus = document.getElementById('get-bonus')
    const history = document.getElementById('history');

    cashOut.classList.add('hidden');
    addMoney.classList.add('hidden');
    tmny.classList.add('hidden');
    bill.classList.add('hidden');
    bonus.classList.add('hidden');
    history.classList.add('hidden');

    // rmv the hidden class
    const rmv = document.getElementById(id);
    rmv.classList.remove('hidden');
}