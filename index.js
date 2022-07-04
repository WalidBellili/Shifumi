const arrowUp = document.getElementById("arrowUp")
const arrowDown = document.getElementById("arrowDown")
const btn = document.getElementById("btn")
const stone = document.getElementById("ia-images")




arrowUp.addEventListener("click", (e) => {
    console.log(e);
})
arrowDown.addEventListener("click", (e) => {
    console.log(e);
})
btn.addEventListener('click', (e) => {
    
})

// const setInter = () => {
//     console.log("Hello");
// }
// setInter()
// setInterval(setInter, 2000)

// const randomImg = Math.ceil(Math.random()*3) 
// console.log(randomImg);
// if (randomImg === 1) {
//     stone.innerHTML = `
//     <img src="./2-feuille.jpg" height="250" width="250">
//     `
// } else if(randomImg===2) {
//     stone.innerHTML = `
//     <img src="./3-ciseaux.jpg" height="250" width="250">
//     `
// } else {
//     stone.innerHTML = `
//     <img src="./1-pierre.jpg" height="250" width="250">
//     `
// }

const imgDisplay = () => {
 const randomImg = Math.ceil(Math.random()*3) 
console.log(randomImg);
if (randomImg === 1) {
    stone.innerHTML = `
    <img src="./2-feuille.jpg" height="250" width="250">
    `
} else if(randomImg===2) {
    stone.innerHTML = `
    <img src="./3-ciseaux.jpg" height="250" width="250">
    `
} else {
    stone.innerHTML = `
    <img src="./1-pierre.jpg" height="250" width="250">
    `
}
}
imgDisplay()
setInterval()