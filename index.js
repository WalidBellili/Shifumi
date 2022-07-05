const btn = document.querySelectorAll("button");
const results = document.querySelector(".result");

const algoGame = () => {
  for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener("click", () => {
      const player = btn[i].innerHTML;
      const bot = btn[Math.floor(Math.random() * btn.length)].innerHTML;
      let result = "";
      let scorePlayer = 0;
      let scoreBot = 0;

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
      const score = () => {
        if (player > bot) {
          scorePlayer += 1;
          console.log(scorePlayer);
        } else if (player < bot) {
          scoreBot += 1;
          console.log(scoreBot);
        } else if (player === bot) {
          console.log("égalité");
        }
      };
      score();

      results.innerHTML = `
          <article>
          <h2>Bender : ${bot}</h2>
          <img
          src="./bender-tordeur-rodriguez-250.jpg"
          alt=""
          width="100"
          height="100"
        />
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
