"use strict";
(function () {
    let contactFormSubmit = document.getElementById("contact-form-submit");
    let inputSection = document.getElementById("input-section");

    function validateForm() {
        let firstName = document.forms["form-submit"]["first-name"].value;
        let lastName = document.forms["form-submit"]["last-name"].value;
        let email = document.forms["form-submit"]["email"].value;
        let phoneNumber = document.forms["form-submit"]["phone-number"].value;

        if (firstName === "" || lastName === "" || email === "" || phoneNumber === "") {
            return false;
        } else {
            return true;
        }
    }

    contactFormSubmit.addEventListener("click", function (e) {
        e.preventDefault();
        if (validateForm() === false) {
            alert("Form must be filled out");
        } else {
            inputSection.innerHTML = `
                <div class="thank-you">
                    <div class="green-check">
                        <img src="assets/green-check.png">
                    </div>
                    <div>
                        <h2 class="card-header">Your message has been sent!</h2>
                        <div class="text-body">
                            <p>Our team is working diligently to respond to your message as soon as possible.</p>
                            <p>Thank you for your patience!</p>
                        </div>
                    </div>
                </div>`;
        }
    });

})();