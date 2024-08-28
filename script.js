document.getElementById('billForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const totalUnits = parseFloat(document.getElementById('totalUnits').value);
    const currentReading = parseFloat(document.getElementById('currentReading').value);
    const previousReading = parseFloat(document.getElementById('previousReading').value);
    let tenantUnits = parseFloat(document.getElementById('tenantUnits').value);
    const totalBill = parseFloat(document.getElementById('totalBill').value);

    // If both meter readings are provided, calculate tenant units
    if (!isNaN(currentReading) && !isNaN(previousReading)) {
        tenantUnits = currentReading - previousReading;
    }

    // Calculate cost per unit
    const costPerUnit = totalBill / totalUnits;

    // Calculate tenant's charge
    const tenantCharge = tenantUnits * costPerUnit;

    // Display the result in modal
    const resultText = document.getElementById('resultText');
    resultText.textContent = `The tenant's charge for ${tenantUnits} units is ₹${tenantCharge.toFixed(2)}.`;

    const modal = document.getElementById('myModal');
    modal.style.display = "flex";

    // Get the close button element
    const closeButton = document.getElementsByClassName("close")[0];
    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal if user clicks anywhere outside the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Split bill logic
    // document.getElementById('splitBillLink').onclick = function() {
    //     // Random value between 150 and 200
    //     // const reductionAmount = Math.floor(Math.random() * 51) + 150;
    //     const reductionAmount =  150; 
    //     const updatedTenantCharge = tenantCharge - reductionAmount;

    //     // Display the final amount prominently
    //     const finalAmountText = document.getElementById('finalAmountText');
    //     finalAmountText.innerHTML = `After adding split bill discount of ₹${reductionAmount}, Final Amount to be Paid: <br><span style="font-size: 30px; font-weight: bold; color: #d9534f;">₹${updatedTenantCharge.toFixed(2)}</span>`;
    //     finalAmountText.style.display = "block";
    // }

    // Redirect to payment page on clicking pay button
    document.getElementById('payButton').onclick = function() {
        window.location.href = 'payment.html';
    }
});
