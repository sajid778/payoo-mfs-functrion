document.getElementById('btn-cash-out').addEventListener('click',function (event) {
    event.preventDefault();
    const cashout = getInputFieldVlueById('input-cash-out');
    const pinNumber = getInputFieldVlueById('input-cash-out-pin');
    console.log('inside the click handler', cashout,pinNumber);

    if (isNaN(cashout)) {
        alert('Failed to cash out.');
        return;
    }
    
    if (pinNumber === 1234) {
        const balance = getTextInputValueByID('account-balance');
        if (cashout > balance) {
            alert('You do not have enough money to cashout');
            return;
            
        }
        const newBalance = balance - cashout;
        document.getElementById('account-balance').innerText = newBalance;

        // add to transaction history

        const div = document.createElement('div');
        div.classList.add('bg-yellow-300')
        div.innerHTML = `
        <h4 class="text-2xl font-bold">Cash Out</h4>
        <p>${cashout} widthdraw. new Balance ${newBalance}</p>
        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else{
        alert('no money for you ....DGM.');
    }
})