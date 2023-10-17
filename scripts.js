"use strict";
(function() {
    let contactFormSubmit = document.getElementById("contact-form-submit");
    let inputSection = document.getElementById("input-section");

    contactFormSubmit.addEventListener("click", function(e) {
        e.preventDefault();
        console.log("button clicked");
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
    });
    
})();