const cube = document.querySelector("#cube");
const btnMsg = document.querySelector("#btnMsg");

btnMsg.addEventListener("click", () => {
  let texte = "Texte Saisi : ";
  texte += document.nameMonFormulaire.SaisieMessage.value;
  alert(texte);
  // "Effacement" de la zone de saisie
  document.nameMonFormulaire.SaisieMessage.value = "";
});


cube.addEventListener("mouseover", () => {
  cube.src = "./img/cube_rouge.gif";
});


cube.addEventListener("mouseleave", () => {
  cube.src = "./img/cube_vert.gif";
});
