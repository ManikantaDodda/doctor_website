
    // Get the modal container by ID

    const element_modal = document.createElement("div")
    element_modal.id = "book_app_modal";
    document.body.appendChild(element_modal);
    const modalId = document.getElementById("book_app_modal");
   
    // Function to render the modal's HTML content
    function modalHtml() {

        const modal = `
            <div class="modal-container">
                <div class="modal">
                    <div class="modal-header">
                        <p>Request An Appointment</p>
                    </div>
                    <div class="modal-content">
                        <div class="appointment-info">
                            <p>Please confirm that you would like to request the following appointment:</p>
                            <div class="input-row">
                                <label for="appointment-date">Date</label>
                                <input type="date" id="appointment-date" class="input-field">
                            </div>
                            <div class="input-row">
                                <label for="appointment-time">Time</label>
                                <input type="time" id="appointment-time" class="input-field">
                            </div>
                        </div>

                        <div class="user-info">
                            <p>Your Information:</p>
                            <p>Please enter your name and email address:</p>
                            <div class="input-row">
                                <label for="user-name">Name</label>
                                <input type="text" id="user-name" class="input-field" placeholder="Enter your name">
                            </div>
                            <div class="input-row">
                                <label for="user-email">Email ID</label>
                                <input type="email" id="user-email" class="input-field" placeholder="Enter your email">
                            </div>
                            <div class="input-row">
                                <label for="user-contact">Contact</label>
                                <input type="text" id="user-contact" class="input-field" placeholder="Enter your contact">
                            </div>
                        </div>

                        <div class="modal-actions">
                            <button class="btn btn-primary" onclick="submitAppointment()">Request Appointment</button>
                            <button class="btn btn-danger" onclick="modalClose()">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        // Check if modal container exists and inject the HTML
        if (modalId) {
            modalId.innerHTML = modal;
        }
    }

    // Function to close the modal and clear the container
    function modalClose() {
        if (modalId) {
            modalId.innerHTML = "";
        }
    }

    // Example function for handling form submission
    function submitAppointment() {
        const date = document.getElementById("appointment-date").value;
        const time = document.getElementById("appointment-time").value;
        const name = document.getElementById("user-name").value;
        const email = document.getElementById("user-email").value;
        const contact = document.getElementById("user-contact").value;

        // Perform your logic here (e.g., validation or API call)
        console.log("Appointment Details:", { date, time, name, email, contact });

        // Close the modal after submission
        modalClose();
    }
