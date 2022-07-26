(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mob-menu-open"),
    closeMenuBtn: document.querySelector(".mob-menu-close"),
    modal: document.querySelector(".mob-menu"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle("is-hidden");
  }
})();
