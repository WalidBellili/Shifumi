const btn = document.querySelectorAll("button");

for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", () => {
    const player = btn[i].innerHTML;
    const bot = btn[Math.floor(Math.random() * btn.length)].innerHTML;
    let result = "";

    if (player === bot) {
      result = "Egalité";
    } else if (
      (player === "Pierre" && bot === "Ciseaux") ||
      (player === "Feuille" && bot === "Pierre") ||
      (player === "Ciseaux" && bot === "Feuille")
    ) {
      result = "Win";
    }
  });
}
