// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.getElementById("menuBtn");
const closeMenu = document.getElementById("closeMenu");
const mobileMenu = document.getElementById("mobileMenu");

if(menuBtn && closeMenu && mobileMenu){

  menuBtn.addEventListener("click", () => {

    mobileMenu.classList.remove("translate-x-full");

    document.body.style.overflow = "hidden";

  });

  closeMenu.addEventListener("click", () => {

    mobileMenu.classList.add("translate-x-full");

    document.body.style.overflow = "auto";

  });

}

// ===========================
// FADE UP ANIMATION
// ===========================

const fadeElements = document.querySelectorAll('.fade-up');

const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {

      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }

    });
  },
  {
    threshold: 0.1
  }
);

fadeElements.forEach((element) => {
  fadeObserver.observe(element);
});

/* ===================================
   Animated Counter
=================================== */

const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 80;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target.toLocaleString();

            }

        };

        update();

        counterObserver.unobserve(counter);

    });

}, {
    threshold: 0.5
});

counters.forEach(counter => counterObserver.observe(counter));

/* ==========================
   BACK TO TOP BUTTON
========================== */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        backToTop.classList.remove("hidden");

    } else {

        backToTop.classList.add("hidden");

    }

});

backToTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});