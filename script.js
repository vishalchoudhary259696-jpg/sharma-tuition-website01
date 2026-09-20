// ===============================
// Sharma Tuition Centers
// Complete JavaScript
// ===============================


// 1. MOBILE MENU TOGGLE
function toggleMenu() {
    const menu = document.getElementById("menu");

    if (menu) {
        menu.classList.toggle("active");
    }
}


// 2. CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll("#menu a").forEach(link => {
    link.addEventListener("click", function () {
        const menu = document.getElementById("menu");

        if (menu) {
            menu.classList.remove("active");
        }
    });
});


// 3. SMOOTH SCROLLING
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

});


// 4. COURSE ENQUIRY
function selectCourse(course) {

    alert(
        "Thank you for your interest in " +
        course +
        "!\n\n" +
        "For admission and fee details, please call Sharma Tuition Centers at 9050610267."
    );

}


// 5. DIRECT CALL FUNCTION
function makeCall() {
    const phoneNumber = "9350239696";

    // Try to open the Android phone dialer
    window.location.href = "tel:" + phoneNumber;
}


// 6. SCROLL ANIMATION
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.15
    }
);

sections.forEach(function (section) {
    observer.observe(section);
});


// 7. ACTIVE NAVIGATION LINK
const navLinks = document.querySelectorAll("#menu a");

window.addEventListener("scroll", function () {

    let currentSection = "";

    document.querySelectorAll("section").forEach(function (section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});


// 8. PAGE LOAD
window.addEventListener("load", function () {

    document.body.classList.add("loaded");

    console.log(
        "Sharma Tuition Centers website loaded successfully."
    );

});