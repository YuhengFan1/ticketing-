document.getElementById("ticketForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Collect form data
    const eventType = document.getElementById("event").value;
    const ticketType = document.getElementById("ticket-type").value;
    const quantity = document.getElementById("quantity").value;

    // Pricing details
    const ticketPrices = {
        "standard": 50,
        "vip": 100
    };

    // Calculate total price
    const totalPrice = ticketPrices[ticketType] * quantity;
    
    // Display summary
    const summaryText = `
        Event: ${eventType.charAt(0).toUpperCase() + eventType.slice(1)}<br>
        Ticket Type: ${ticketType.charAt(0).toUpperCase() + ticketType.slice(1)}<br>
        Quantity: ${quantity} tickets<br>
        Total Price: $${totalPrice}
    `;
    
    // Show summary and hide the form
    document.getElementById("purchase-summary").style.display = "block";
    document.getElementById("summary-text").innerHTML = summaryText;
    document.getElementById("ticket-form").reset();
});
