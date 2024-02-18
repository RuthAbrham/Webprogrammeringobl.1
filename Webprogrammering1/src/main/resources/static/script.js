




let tickets = [];

// Function to render tickets
function renderTickets() {
    const ticketsContainer = document.getElementById("tickets-container");
    ticketsContainer.innerHTML = ""; // Clear previous tickets

    tickets.forEach(ticket => {
        const ticketDiv = document.createElement("div");
        ticketDiv.textContent = JSON.stringify(ticket);
        ticketsContainer.appendChild(ticketDiv);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Validate form inputs
    const movie = document.getElementById("movie").value;
    const quantity = document.getElementById("quantity").value;
    const firstname = document.getElementById("firstname").value;
    const lastname = document.getElementById("lastname").value;
    const telefonnr = document.getElementById("telefonnr").value;
    const epost = document.getElementById("epost").value;

    // Example of email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(epost)) {
        alert("Invalid email address");
        return;
    }

    // Create ticket object
    const ticket = {
        movie,
        quantity,
        firstname,
        lastname,
        telefonnr,
        epost
    };

    // Push ticket object into array
    tickets.push(ticket);

    // Clear form fields
    document.getElementById("ticetForm").reset();

    // Render tickets
    renderTickets();
}

// Function to handle clearing tickets
function handleClearTickets() {
    tickets = []; // Clear tickets array
    renderTickets(); // Render empty tickets section
}

// Add event listeners
document.getElementById("ticetForm").addEventListener("submit", handleFormSubmit);
document.getElementById("clearTickets").addEventListener("click", handleClearTickets);