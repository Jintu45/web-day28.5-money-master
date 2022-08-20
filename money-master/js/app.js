
function totalValueDirect(allValue){
    const food = document.getElementById(allValue);
    const foodValue = food.value ;
    const foodValueConvert = parseInt(foodValue);
    return foodValueConvert ;
}

document.getElementById('calculate-btn').addEventListener('click', function(){
    const income = document.getElementById('income');
    const incomeValue = income.value;
    const incomeValueConvert = parseFloat(incomeValue)
    
    const foodValue = totalValueDirect('food');
    const foodValueConvert = parseFloat(foodValue)
    const rentValue = totalValueDirect('rent');
    const rentValueConvert = parseFloat(rentValue)
    const clothesValue = totalValueDirect('clothes');
    const clothesValueConvert = parseFloat(clothesValue)
    const totalExpenseValue = foodValueConvert + rentValueConvert + clothesValueConvert;

    if(foodValueConvert <= 0 || rentValueConvert <= 0 || clothesValueConvert <= 0 ){
        alert ('please provide a valid number');
        return;
    }
    if(isNaN(foodValueConvert) || isNaN(rentValueConvert) || isNaN(clothesValueConvert)){
        alert ('please call number ');
        return;
    }
    if(incomeValueConvert < totalExpenseValue){
        alert('Sorry your amount not enough');
        return;
    }
    if(isNaN(incomeValueConvert)){
        alert('please number call income property');
        return;
    }
    const valueCall = document.getElementById('balance');
    const valueCallString = valueCall.innerText;
    const ValueConvert = parseFloat(valueCallString);

    const BalanceTotalValue = incomeValueConvert - totalExpenseValue ;
   
    valueCall.innerText = BalanceTotalValue;

    const ExpenseValueCall = document.getElementById('expense');
    const ExpenseValueCallString = ExpenseValueCall.innerText;
    const ExpenseValueCallStringValues = parseInt(ExpenseValueCallString);

    ExpenseValueCall.innerText = totalExpenseValue; 
})

document.getElementById('save-btn').addEventListener('click', function(){
    
    const income = document.getElementById('income');
    const incomeValue = income.value;
    const incomeValueConvert = parseFloat(incomeValue);
    
    const valueCall = document.getElementById('balance');
    const valueCallString = valueCall.innerText;
    const ValueConvert = parseFloat(valueCallString);
    
    const save = document.getElementById('save');
    const saveValue = save.value ;
    const saveValueConvert = parseFloat(saveValue);
    if(saveValueConvert >= 100){
        alert('Please Type your solid number');
        return
    }
    if(isNaN(saveValueConvert)){
        alert('please give number');
        save.value = '';
        return;
    }
    const saving = document.getElementById('saving');
    const savingValue = saving.innerText;
    const savingValueConvert = parseFloat(savingValue);

    const remaining = document.getElementById('remaining');
    const remainingValue = remaining.innerText;
    const remainingValueConvert = parseFloat(remainingValue)
    
    const totalSavingValue = (incomeValueConvert / 100) * saveValueConvert;
    saving.innerText = totalSavingValue;
    const remainingBalance = ValueConvert - totalSavingValue;
    remaining.innerText = remainingBalance;

})

