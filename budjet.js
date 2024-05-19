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
        const totalIncome = this.income.reduce((total, item) => total + item.amount, 0);
        const totalExpenses = this.expenses.reduce((total, item) => total + item.amount, 0);
        const totalBudget = totalIncome - totalExpenses;

        document.getElementById('total-income').textContent = totalIncome.toFixed(2);
        document.getElementById('total-expenses').textContent = totalExpenses.toFixed(2);
        document.getElementById('total-budget').textContent = totalBudget.toFixed(2);
    }
}

export default Budget;
