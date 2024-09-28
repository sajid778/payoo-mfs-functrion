document.getElementById('show-add-money').addEventListener('click',function(){
   console.log('showlogman');
   
   showSectionById('add-money-form');
});

document.getElementById('cash-out-btn').addEventListener('click',function(){
    showSectionById('cash-out-form');
})

document.getElementById('transaction-btn').addEventListener('click',function(){
   
    showSectionById('transaction-section');
});