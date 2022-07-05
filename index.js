const btnUn = document.getElementById("btnUn");
const btnDeux = document.getElementById("btnDeux");
const btnTrois = document.getElementById("btnTrois");
const secondElement = document.getElementById("second");
const thirdElement = document.getElementById("third");
const firstElement = document.getElementById("first");
const play = document.getElementById("play");
const pierre = document.getElementById("place");
const resetPart = document.getElementById("reset");
// const feuillle = document.getElementById("feuille");
// const ciseaux = document.getElementById("ciseaux");
const playerScore = document.getElementById("player-score");
const iaScore = document.getElementById("iA-score");
// console.log(playerScore);
// console.log(iaScore);

// ********Fonction qui sert à répeter les images de l'IA****************************
const imgDisplay = () => {
  const randomImg = Math.ceil(Math.random() * 3);

  let resultPlayer = 0;
  let randomResult = 0;
  if (randomImg === 1) {
    pierre.innerHTML = `
        <img src="./2-feuille.jpg" height="250" width="250">
         `;
    randomResult += 1;
    console.log(randomResult + "resultat IA");
  } else {
    resultPlayer += 1;
    console.log("resultat joueur " + resultPlayer);
  }
  if (randomImg === 2) {
    pierre.innerHTML = `
         <img src="./3-ciseaux.jpg" height="250" width="250">
        `;
    randomResult += 1;
    console.log(randomResult + "resultat IA");
  } else {
    pierre.innerHTML = `
                <img src="./1-pierre.jpg" height="250" width="250">
                `;
    resultPlayer += 1;
    console.log("resultat joueur " + resultPlayer);
  }

  //   else if (randomImg === 2) {
  //     pierre.innerHTML = `
  //         <img src="./3-ciseaux.jpg" height="250" width="250">
  //            `;
  //   } else {
  //     pierre.innerHTML = `
  //            <img src="./1-pierre.jpg" height="250" width="250">
  //            `;
  //   }
};
imgDisplay();

window.onload = imgDisplay;

// ******************************************************************
btnUn.addEventListener("click", (e) => {
  first.style.display = "flex";
  second.style.display = "none";
  third.style.display = "none";
  //  *********************************
  //   imgDisplay();
  play.style.display = "block";
});
btnDeux.addEventListener("click", (e) => {
  first.style.display = "none";
  second.style.display = "flex";
  third.style.display = "none";
  //  ********************************************************************
  //   imgDisplay();
  play.style.display = "block";
});
btnTrois.addEventListener("click", (e) => {
  second.style.display = "none";
  third.style.display = "flex";
  first.style.display = "none";
  //  *********************************
  //   imgDisplay();
  play.style.display = "block";
});
// ***************************************************************************
// ******************************************************************

const reset = () => {};
resetPart.addEventListener("click", () => {
  pierre.innerHTML = `
        <img src="./1-pierre.jpg" height="250" width="250">
        `;
  first.style.display = "inline-block";
  second.style.display = "inline-block";
  third.style.display = "inline-block";
  imgDisplay();
});
reset();
// ****************************************************************************
play.addEventListener("click", (e) => {
  imgDisplay();
});
// *************************************************************************
