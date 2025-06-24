let expenses = [];
let total = 0;

function addExpense() {
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!description || isNaN(amount)) {
        alert('fill correct details');
        return;
    }


    expenses.push({ description, amount });
    total += amount;

    
    updateUI();
    
    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
}

function updateUI() {
 
    document.getElementById('total').textContent = `₹${total.toFixed(2)}`;

    const expenseList = document.getElementById('expenseList');
    expenseList.innerHTML = '';

    expenses.forEach(exp => {
        const item = document.createElement('div');
        item.className = 'expense-item';
        item.innerHTML = `
            <span>${exp.description}</span>
            <span>₹${exp.amount.toFixed(2)}</span>
        `;
        expenseList.appendChild(item);
    });
}