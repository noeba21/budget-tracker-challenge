import Budget from './budget.js';

const budget = new Budget();

document.getElementById('add-income').addEventListener('click', () => {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (description !== '' && !isNaN(amount) && amount > 0) {
        budget.addIncome(description, amount);
        addEntryToList(description, amount, 'income');
    } else {
        alert('Please enter a valid description and amount.');
    }
});

document.getElementById('add-expense').addEventListener('click', () => {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    if (description !== '' && !isNaN(amount) && amount > 0) {
        budget.addExpense(description, amount);
        addEntryToList(description, amount, 'expense');
    } else {
        alert('Please enter a valid description and amount.');
    }
});

function addEntryToList(description, amount, type) {
    const listItem = document.createElement('li');
    listItem.textContent = `${description}: $${amount.toFixed(2)}`;
    listItem.classList.add(type);
    document.getElementById('entries-list').appendChild(listItem);
}
