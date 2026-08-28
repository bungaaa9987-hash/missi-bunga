// ============================
// LUCIDE ICON
// ============================

lucide.createIcons();


// ============================
// MOBILE MENU
// ============================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {

    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {

        menuBtn.innerHTML =
            '<i data-lucide="x"></i>';

    } else {

        menuBtn.innerHTML =
            '<i data-lucide="menu"></i>';

    }

    lucide.createIcons();

});


// Menutup menu ketika link diklik

document.querySelectorAll(".nav-menu a").forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

        menuBtn.innerHTML =
            '<i data-lucide="menu"></i>';

        lucide.createIcons();

    });

});


// ============================
// CONTACT FORM
// ============================

const form =
    document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value;

    const email =
        document.getElementById("email").value;

    const message =
        document.getElementById("message").value;


    if (name && email && message) {

        alert(
            `Terima kasih ${name}! Pesan kamu berhasil dikirim.`
        );

        form.reset();

    } else {

        alert(
            "Silakan isi semua bagian terlebih dahulu."
        );

    }

});


// ============================
// TAHUN OTOMATIS
// ============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ============================
// ACTIVE NAVIGATION
// ============================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-menu a");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;


        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});
