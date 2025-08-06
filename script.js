document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("mobile-toggle");
    const menu = document.getElementById("mobile-menu");

    if (toggle && menu) {
        toggle.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }

    // Scroll reveal
    const reveals = document.querySelectorAll(".reveal");
    const revealOnScroll = () => {
        for (const el of reveals) {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                el.classList.add("visible");
            }
        }
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // run once on page load

    // Preloader fade out
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", () => {
            preloader.style.opacity = "0";
            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        });
    }
});
