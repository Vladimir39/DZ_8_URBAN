window.addEventListener("click", (event) => {
  const modal = document.querySelector(".container_menuBurger");
  const buttomBurger = document.querySelector(".menuBurger");
  const buttonClose = document.querySelector(".icon_close");

  if (buttomBurger === event.target) {
    modal.classList.add("active");
  }

  if (buttonClose === event.target) {
    modal.classList.remove("active");
  }
});
