const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        document.getElementById("formMessage").textContent =
            "Your message has been checked successfully!";

        document.getElementById("formMessage").style.color = "green";

        contactForm.reset();
    });
}