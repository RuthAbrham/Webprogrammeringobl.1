

// Create ticket object
let ticket = {
    movie : document.getElementById("movie").value,

    firstname,
    lastname,
    telefonnr,
    epost
};


let tickets = [];

// Function to render tickets
function renderTickets() {
    const ticketsContainer = document.getElementById("resultsMovie");
    ticketsContainer.innerHTML = ""; // Clear previous tickets

    /*tickets.forEach(ticket => {
        const ticketDiv = document.createElement("div");
        ticketDiv.textContent = JSON.stringify(ticket);
        ticketsContainer.appendChild(ticketDiv);
    });*/
    console.log(tickets)
    for (let i = 0; i < tickets.length; i++){
        document.getElementById("resultsMovie").append = "<p>" +  tickets[i].name + "</p>"
    }
}

// Function to handle form submission
function handleFormSubmit(){
  //x   event.preventDefault();

     let ticket = {
         // Validate form inputs
         movie: document.getElementById("movie").value,
         firstname: document.getElementById("firstname").value,
         lastname: document.getElementById("lastname").value,
         telefonnr: document.getElementById("telefonnr").value,
         epost: document.getElementById("epost").value,
     };
    // Example of email validation
    const phonePattern = /^\d{9}$/;
    if (!phonePattern.test(ticket.telefonnr)) {
        alert("Invalid email address");
        return;
    }



    // Push ticket object into array
    tickets.push(ticket);

    // Clear form fields
    document.getElementById("ticetForm").reset();

    // Render tickets
    renderTickets();
}

// Function to handle clearing tickets
function renderTickets() {
    const ticketsContainer = document.getElementById("resultsMovie");
    ticketsContainer.innerHTML = ""; // Clear previous tickets

    for (let i = 0; i < tickets.length; i++){
        // Display ticket information
        const ticketInfo = document.createElement("div");
        ticketInfo.innerHTML = "<p>" +  "Movie: " + tickets[i].movie + "<br>" +
            "Name: " + tickets[i].firstname + " " + tickets[i].lastname + "<br>" +
            "Phone Number: " + tickets[i].telefonnr + "<br>" +
            "Email: " + tickets[i].epost + "</p>";
        ticketsContainer.appendChild(ticketInfo);
    }
}

// Function to handle clearing tickets
function handleClearTickets() {
    tickets = []; // Clear tickets array
    renderTickets(); // Render empty tickets section
}

// Add event listeners
document.getElementById("ticketForm").addEventListener("submit", handleFormSubmit);
document.getElementById("clearTickets").addEventListener("click", handleClearTickets);