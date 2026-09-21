 /* ==================================================
   SHARMA TUITION CENTERS
   JAVASCRIPT
================================================== */


/* ==================================================
   MOBILE MENU
================================================== */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


menuButton.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {

        menuButton.innerHTML = "✕";

    } else {

        menuButton.innerHTML = "☰";

    }

});


/* Close mobile menu */

const navigationLinks =
    document.querySelectorAll(".nav-links a");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuButton.innerHTML = "☰";

    });

});


/* ==================================================
   CURRENT YEAR
================================================== */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}


/* ==================================================
   CONTACT FORM → WHATSAPP
================================================== */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function (event) {

    event.preventDefault();


    const name =
        document.getElementById("name")
        .value
        .trim();


    const phone =
        document.getElementById("phone")
        .value
        .trim();


    const message =
        document.getElementById("message")
        .value
        .trim();


    if (!name || !phone || !message) {

        formMessage.textContent =
            "Please fill in all the details.";

        formMessage.style.color =
            "#e5484d";

        return;

    }


    /*
       Sharma Tuition WhatsApp Number

       Country code:
       India = 91

       Number:
       9350239696
    */

    const whatsappNumber =
        "919350239696";


    const whatsappText =
        "Hello Sharma Tuition Centers!%0A%0A" +

        "Name: " +
        encodeURIComponent(name) +

        "%0APhone: " +
        encodeURIComponent(phone) +

        "%0AMessage: " +
        encodeURIComponent(message);


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        whatsappText;


    formMessage.textContent =
        "Opening WhatsApp...";

    formMessage.style.color =
        "#635bff";


    setTimeout(function () {

        window.open(
            whatsappURL,
            "_blank"
        );

    }, 400);

});


/* ==================================================
   PHONE INPUT
================================================== */

const phoneInput =
    document.getElementById("phone");


phoneInput.addEventListener(
    "input",
    function () {

        this.value =
            this.value.replace(
                /[^0-9+\-\s]/g,
                ""
            );

    }
);


/* ==================================================
   SIMPLE CARD HOVER
================================================== */

const cards =
    document.querySelectorAll(
        ".course-card, .why-card"
    );


cards.forEach(function (card) {

    card.addEventListener(
        "mouseenter",
        function () {

            this.style.transition =
                "transform 0.3s ease, box-shadow 0.3s ease";

        }
    );

});

    
