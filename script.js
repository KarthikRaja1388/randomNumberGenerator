(() => {
  let display = document.querySelector(".number-display");
  let btnGenerate = document.querySelector(".btn-generate");

  btnGenerate.addEventListener("click", () => {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    display.innerHTML = randomNumber;
  });
})();
