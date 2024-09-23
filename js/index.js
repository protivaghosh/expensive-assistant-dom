// add event listener calculate button
const calculateButton =document.getElementById('calculate');
calculateButton.addEventListener('click', function(){
    
const income = parseFloat(document.getElementById('income').value);
const software = parseFloat(document.getElementById('software').value);
const courses = parseFloat(document.getElementById('courses').value);
const internet = parseFloat(document.getElementById('internet').value);

const totalExpenses = software + courses + internet;
const balance = income - totalExpenses;

const totalExpensesElement = document.getElementById('total-expenses');
totalExpensesElement.innerText = totalExpenses.toFixed(2);

const balanceElement =document.getElementById('balance');
balanceElement.innerText = balance.toFixed(2);
const result = document.getElementById('results');
result.classList.remove('hidden');

// expensive button
const historyItem  =document.createElement('div');
historyItem.classList ='bg-white p-3 rounded-md border-1-2 border-indigo-500';

historyItem.innerHTML =`
 <p class="text-xs text-gray-500">${new Date().toLocaleDateString()}</p>
 <p class="text-xs text-gray-500">income: $${income.toFixed(2)}</p>
 <p class="text-xs text-gray-500">Expenses: $${totalExpenses.toFixed(2)}</p>
 <p class="text-xs text-gray-500">Balance: $${balance.toFixed(2)}</p>
`;
const historyContainer =document.getElementById('history-list');
historyContainer.insertBefore(historyItem, historyContainer.firstChild)
})

// add event listener saving button
const calculateSavingsButton =document.getElementById('calculate-savings');
calculateSavingsButton.addEventListener('click', function(){

    const saving =parseFloat(document.getElementById('savings').value);
    const income = parseFloat(document.getElementById('income').value);
    const software = parseFloat(document.getElementById('software').value);
    const courses = parseFloat(document.getElementById('courses').value);
    const internet = parseFloat(document.getElementById('internet').value);
   
    const totalExpenses = software + courses + internet;
    const balance = income - totalExpenses;

    const savingAmount = (saving * balance) /100;
    // console.log(savingAmount);
    const remainingBalance = balance-savingAmount;

    const savingElement =document.getElementById('savings-amount');
    savingElement.innerText = savingAmount.toFixed(2);

    const remainingElement =document.getElementById('remaining-balance');
    remainingElement.innerText = remainingBalance.toFixed(2);
})

// history tab function
const historyTab =document.getElementById('history-tab');
const assistantTab =document.getElementById('assistant-tab');
historyTab.addEventListener('click', function(){

    historyTab.classList.add('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');

    historyTab.classList.remove('text-gray-600');

    assistantTab.classList.remove('text-white', 'bg-gradient-to-r', 'from-blue-500', 'to-purple-600');
    
    assistantTab.classList.add('text-gray-600');

    document.getElementById('expense-form').classList.add('hidden');
    document.getElementById('history-section').classList.remove('hidden');

})