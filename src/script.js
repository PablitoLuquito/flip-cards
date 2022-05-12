const cards = document.querySelectorAll(".card-inner");

cards.forEach((i) => {
  i.addEventListener("click", () => {
    i.classList.toggle("is-flipped");
  });
});
