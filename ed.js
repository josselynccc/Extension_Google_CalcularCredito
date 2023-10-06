document.addEventListener("DOMContentLoaded", function() {
    const formCalculate = document.getElementById("formCalculate");
    
    formCalculate.addEventListener("submit", calculateLoan);

    function calculateLoan(e) {
        
        e.preventDefault()
        
        const variab=e.target

        const interestRate = variab.interestRate.value / 100 / 12;
        const loanAmount = variab.loanAmount.value;
        const loanTerm = variab.loanTerm.value;
        
        const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
        const totalPayment = monthlyPayment * loanTerm;

        
        console.log(variab.loanAmount.value)

        document.getElementById("monthlyPayment").innerHTML = `${monthlyPayment.toFixed(2)}`;
        document.getElementById("totalPayment").innerHTML = `${totalPayment.toFixed(2)}`;
        document.getElementById("result").style.visibility="visible";
    }
});
