// ======================
// TYPING EFFECT
// ======================

const typingElement = document.getElementById("typing");

const roles = [
    "Full Stack Developer",
    "MCA Student",
    "Frontend Developer",
    "MERN Stack Developer"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!isDeleting) {
        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, isDeleting ? 50 : 120);
}

typeEffect();


// ======================
// COUNTER ANIMATION
// ======================

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 100;

        const updateCounter = () => {

            if (count < target) {

                count += speed;

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";
            }
        };

        updateCounter();

    });

};

const statsSection = document.querySelector(".stats");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            startCounter();

            observer.unobserve(entry.target);
        }
    });

}, {
    threshold: 0.5
});

observer.observe(statsSection);


// ======================
// SCROLL REVEAL
// ======================

const revealElements = document.querySelectorAll(
    ".section, .stat-card, .project-card, .skill-card, .experience-card"
);

function revealOnScroll() {

    revealElements.forEach(el => {

        const windowHeight = window.innerHeight;

        const revealTop =
            el.getBoundingClientRect().top;

        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {

            el.classList.add("active-reveal");

        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ======================
// MOBILE MENU
// ======================

const menuBtn =
    document.querySelector(".menu-btn");

const navLinks =
    document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-active");

});


// ======================
// CLOSE MENU ON CLICK
// ======================

document
.querySelectorAll(".nav-links a")
.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove(
            "mobile-active"
        );

    });

});


// ======================
// NAVBAR SHADOW
// ======================

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,0.3)";

    } else {

        header.style.boxShadow = "none";
    }

});


// ======================
// ACTIVE NAV LINK
// ======================

const sections =
    document.querySelectorAll("section");

const navItems =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current =
                section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});


// ======================
// SCROLL TO TOP BUTTON
// ======================

const scrollBtn =
document.createElement("button");

scrollBtn.innerHTML =
'<i class="fas fa-arrow-up"></i>';

scrollBtn.classList.add(
"scroll-top-btn"
);

document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("show");

    } else {

        scrollBtn.classList.remove("show");
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});