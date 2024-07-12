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

    // Redirect to payment page on clicking pay button
    document.getElementById('payButton').onclick = function() {
        window.location.href = 'payment.html';
    }
});
