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

    // Display the result
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = `The tenant's charge for ${tenantUnits} units is ₹${tenantCharge.toFixed(2)}.`;
});
