document.getElementById('btn-add-money').addEventListener('click',function (event) {
    event.preventDefault();

   const addMoney = getInputFieldVlueById('input-add-money');
   const pinNumber = getInputFieldVlueById('input-pin-number');

   if (isNaN(addMoney)) {
    alert('not a number')
    return;
}
   if (pinNumber === 1234) {
    const balance = getTextInputValueByID('account-balance');
    console.log(balance, addMoney);
    const newBalance = balance + addMoney;
    document.getElementById('account-balance').innerText = newBalance;
    
    // add to transaction history
    const p = document.createElement('p');
    p.innerText= `Added: ${addMoney} tk Balance: ${newBalance}`
    console.log(p);

    // should be a common function

    document.getElementById('transaction-container').appendChild(p);
    
   }
   else{
    alert('Failed to add the money');
   }
   
});
