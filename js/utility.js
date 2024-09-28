// function getInputFIeldById() {
//     console.log('will get by Id');
//     // const addMoney = document.getElementById('input-add-money').value;
//     // return addMoney;


    
// }

function getInputFieldVlueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    // console.log(id,inputValue,inputNumber);
    
    return inputNumber;
}

function getTextInputValueByID(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);

    return textNumber;
}

function showSectionById(id) {
    // hide all the section
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // show the section with the provide is as parameter
    document.getElementById(id).classList.remove('hidden');
}