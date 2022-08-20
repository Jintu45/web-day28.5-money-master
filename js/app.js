document.getElementById('calculate-btn').addEventListener('click', function(){
    const income = document.getElementById('income');
    const incomeValue = income.value ;
    const incomeValueConvert = parseFloat(incomeValue);

    const food = document.getElementById('food');
    const foodValue = food.value ;
    const foodValueConvert = parseFloat(foodValue);

    const rent = document.getElementById('rent');
    const rentValue = rent.value ;
    const rentValueConvert = parseFloat(rentValue)

    const clothes = document.getElementById("clothes");
    const clothesValue = clothes.value ;
    const clothesValueConvert = parseFloat(clothesValue);

    const totalExpense = foodValueConvert + rentValueConvert + clothesValueConvert ;

    const expense = document.getElementById('expense');
    const expenseValue = expense.innerText;
    const expenseConvertValue = parseFloat(expenseValue)
    expense.innerHTML = totalExpense;

    const balanceValueNow = incomeValueConvert - totalExpense;

    const balance = document.getElementById('balance');
    const balanceValue = balance.innerText;
    const balanceValueConvert = parseFloat(balanceValue);

    balance.innerText = balanceValueNow;

    if(incomeValueConvert < totalExpense){
        alert('Your Balance Not enough this time');
        balance.innerText = '4500';
        expense.innerHTML = '5500';
        income.value = '';

        if(incomeValueConvert < 0){
            alert ('please return valid number')
        }
        return incomeValueConvert;
    }
   else if(isNaN(incomeValueConvert )){
    alert('Please Provide Number');
    balance.innerText = '4500'; 
   }
})
document.getElementById('save-btn').addEventListener('click', function(){
    const income = document.getElementById('income');
    const incomeValue = income.value ;
    const incomeValueConvert = parseFloat(incomeValue);

    const save = document.getElementById('save');
    const saveValue = save.value ;
    const saveValueConvert = parseFloat(saveValue);
    
    const totalSavingValue = (incomeValueConvert / 100) * saveValueConvert;
    
    const saving = document.getElementById('saving');
    const savingValue = saving.innerText;
    const savingValueConvert = parseFloat(savingValue)

    saving.innerText = totalSavingValue;

    const balance = document.getElementById('balance');
    const balanceValue = balance.innerText;
    const balanceValueConvert = parseFloat(balanceValue);

    const remainingBalance = document.getElementById('remaining');
    const remainingBalanceValue = remainingBalance.innerText;
    const remainingValueConvert = parseFloat(remainingBalanceValue);

        const nowBalance = balanceValueConvert - totalSavingValue;
        remainingBalance.innerText = nowBalance;  
})