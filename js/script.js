/*  get input elements */ 
const incomeInput = document.getElementById('income-amount');
const foodInput = document.getElementById('food-input');
const rentInput = document.getElementById('rent-input');
const clothInput = document.getElementById('cloth-input');
const savePercentage = document.getElementById('percentage-input');

/* get innerText Elements of html  */
const expensesTotal = document.getElementById('expenses-total');
const balanceTotal = document.getElementById('total-balance');
const saveAmount = document.getElementById('save-amount');
const remainingBalance = document.getElementById('remaining-blance');


/*  get error massages  */
const firstError = document.getElementById('first-error');
const secoundError = document.getElementById('secound-error');
const thirdError = document.getElementById('third-error');



/* get inputValue using function  */
function getInputValue (inputId) {
    const input = document.getElementById(inputId);
    const inputValue = parseFloat(input.value);
    return inputValue;
}

/* using function addition food, rent and cloth values */
function totalExpenses(){
    const incomeAmount = getInputValue('income-amount');
    const foodValue = getInputValue('food-input');
    const rentValue = getInputValue('rent-input');
    const clothValue =  getInputValue('cloth-input');

    // if, else for incomeAmount 
    if(incomeAmount > 0){
        expensesTotal.innerText = parseFloat(foodValue) + parseFloat(rentValue) + parseFloat(clothValue);
        balanceTotal.innerText = parseFloat(incomeAmount) - parseFloat(expensesTotal.innerText);
        firstError.style.display = "none";
        secoundError.style.display = "none";
    }
    else if(incomeAmount < 0 || incomeAmount == null){
        firstError.style.display = "block";
        secoundError.style.display = "none";
        expensesTotal.innerText = null;
        balanceTotal.innerText = null;
    }
    else if(incomeAmount == NaN){
        firstError.style.display = "block";
    }
    else if(incomeAmount == parseFloat(expensesTotal.innerText)){
        secoundError.style.display = "none";
    }
    if(incomeAmount < parseFloat(expensesTotal.innerText)){
        secoundError.style.display = "block";
        expensesTotal.innerText = null;
        balanceTotal.innerText = null;
    }
    else if(incomeAmount > parseFloat(expensesTotal.innerText)){
        secoundError.style.display = "none";
    }

    // if, else for foodValue, rentvalue and clothValue 
    if(foodValue < 0 || rentValue < 0 || clothValue < 0  ){
        firstError.style.display = "block";
        secoundError.style.display = "none";
        expensesTotal.innerText = null;
        balanceTotal.innerText = null;
    }
  
} 

/* get Remaining balance using funtion  */
function getRemainingBalance(){
    const percentageValue = getInputValue('percentage-input');
    const incomeAmount = getInputValue('income-amount');
    let percentage = parseFloat((percentageValue / 100)) * parseFloat(incomeAmount);
    saveAmount.innerText = parseFloat(percentage);
    let totalAmount = parseFloat(balanceTotal.innerText) - parseFloat(saveAmount.innerText);
    remainingBalance.innerText = totalAmount;

    if(saveAmount.innerText < 0){
        thirdError.style.display = "none";
        firstError.style.display = "none";
        saveAmount.innerText = null;
        remainingBalance.innerText = null;
    }
    else if( remainingBalance.innerText > 0){
         thirdError.style.display = "none";
         firstError.style.display = "none";
    }
    else if( balanceTotal.innerText >  balanceTotal.innerText){
        thirdError.style.display = "none";
        firstError.style.display = "none";
    }
    else if(balanceTotal.innerText == saveAmount.innerText){
        thirdError.style.display = "none";
        firstError.style.display = "none";
    }
    else if( saveAmount.innerText > balanceTotal.innerText){
        thirdError.style.display = "block";
        firstError.style.display = "none";
        saveAmount.innerText = null;
        remainingBalance.innerText = null;
    }


}

/* totalExpenses() function calling in  calculate-button */
document.getElementById('calculate-button').addEventListener('click', function(){
    totalExpenses();
});

/* getRemainingBalance() call in saving button  */
document.getElementById('saving-btn').addEventListener('click', function (){
    getRemainingBalance();
})

