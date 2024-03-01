function calculateEmi() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loanTerm').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        alert('Please enter valid values.');
        return;
    }

    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    document.getElementById('emiValue').textContent = monthlyPayment.toFixed(2);
}

document.getElementById('calculateEmi').addEventListener('click', calculateEmi);