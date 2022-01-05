const navToggle = document.querySelector("#nav-btn");
    const nav = document.querySelector(".hamburgerMenu");
    navToggle.addEventListener("click", () => {
      nav.classList.toggle("nav--visible");
    });