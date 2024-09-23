document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    const addMoney =document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin-number').value;
    console.log(addMoney , pinNumber);

    if(pinNumber === '001122'){
        const balance = document.getElementById('account-balance').innerText;

        const balanceNumber = parseFloat(balance);
        const addMoneyNumber =parseFloat(addMoney);

        const newBalance = balanceNumber + addMoneyNumber ;
        console.log(newBalance)

        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money')
    }
})