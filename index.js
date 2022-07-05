const btn = document.querySelectorAll("button");
const results = document.querySelector(".result");

const algoGame = () => {
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
        result = "Vous avez gagné";
      } else {
        result = "Bender a gagné";
      }
      results.innerHTML = `
          <article>
          <h2>Bender : ${bot}</h2>
        </article>
      
        <article>
          <h2>Vous : ${player}</h2>
        </article>
        ${result}
          `;
    });
  }
};
algoGame();
