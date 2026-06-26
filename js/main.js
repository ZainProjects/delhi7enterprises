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