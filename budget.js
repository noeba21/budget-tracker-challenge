class Budget {
    constructor() {
        this.income = [];
        this.expenses = [];
    }

    addIncome(description, amount) {
        this.income.push({ description, amount });
        this.updateBudget();
    }

    addExpense(description, amount) {
        this.expenses.push({ description, amount });
        this.updateBudget();
    }

    updateBudget() {
        const totalIncome = this.income.reduce((sum, item) => sum + item.amount, 0);
        const totalExpenses = this.expenses.reduce((sum, item) => sum + item.amount, 0);
        const totalBudget = totalIncome - totalExpenses;

        document.getElementById('total-income').textContent = totalIncome.toFixed(2);
        document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
        document.getElementById('total-budget').textContent = totalBudget.toFixed(2);

        this.displayEntries();
    }

    displayEntries() {
        const entriesList = document.getElementById('entries-list');
        entriesList.innerHTML = '';

        this.income.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `Income: ${item.description} - $${item.amount.toFixed(2)}`;
            entriesList.appendChild(li);
        });

        this.expenses.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `Expense: ${item.description} - $${item.amount.toFixed(2)}`;
            entriesList.appendChild(li);
        });
    }
}

const budget = new Budget();

document.getElementById('add-income').addEventListener('click', () => {
    const paycheck = parseFloat(document.getElementById('paycheck').value) || 0;
    const savings = parseFloat(document.getElementById('savings').value) || 0;
    const otherIncome = parseFloat(document.getElementById('other-income').value) || 0;

    if (paycheck) budget.addIncome('Paycheck', paycheck);
    if (savings) budget.addIncome('Savings', savings);
    if (otherIncome) budget.addIncome('Other Income', otherIncome);
});

document.getElementById('add-expense').addEventListener('click', () => {
    const rent = parseFloat(document.getElementById('rent').value) || 0;
    const groceries = parseFloat(document.getElementById('groceries').value) || 0;
    const utilities = parseFloat(document.getElementById('utilities').value) || 0;
    const travel = parseFloat(document.getElementById('travel').value) || 0;
    const gas = parseFloat(document.getElementById('gas').value) || 0;
    const debt = parseFloat(document.getElementById('debt').value) || 0;
    const extra = parseFloat(document.getElementById('extra').value) || 0;

    if (rent) budget.addExpense('Rent/Mortgage', rent);
    if (groceries) budget.addExpense('Groceries', groceries);
    if (utilities) budget.addExpense('Utilities', utilities);
    if (travel) budget.addExpense('Travel', travel);
    if (gas) budget.addExpense('Gas', gas);
    if (debt) budget.addExpense('Debt', debt);
    if (extra) budget.addExpense('Extra', extra);
});
