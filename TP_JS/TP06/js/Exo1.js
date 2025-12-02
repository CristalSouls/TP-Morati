const recuperation = document.getElementById("recuperation");
const envoi = document.getElementById("envoi");

const infosLivres = () => {
  fetch("https://rascolcielir.ddns.net/API/prepa/livres_cplus.php")
    .then((resp) => resp.json())
    .then((resp) => {
      // var liv = JSON.stringify(data);
      recuperation.innerHTML =
        "Titres des livres : <br> " +
        `${resp.livres1.titre}` +
        " <br> " +
        `${resp.livres2.titre}` +
        " <br>" +
        `${resp.livres3.titre}` +
        " <br>" +
        "<br>";
    })
    .catch(function (error) {
      recuperation.innerHTML = " !!! ERREUR !!! : " + error;
    });
};
envoi.addEventListener("click", () => infosLivres());
