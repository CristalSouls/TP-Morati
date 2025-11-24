const afficher = document.querySelector("#afficher");
const effacer = document.querySelector("#effacer");
const color = document.querySelectorAll(".color");
const liste1 = document.querySelector("#Liste1");

afficher.addEventListener("click", () => {
    liste1.style.visibility ="visible";
    document.form1.Aff.disabled = true;
    document.form1.Eff.disabled = false;
})

effacer.addEventListener("click", () => {
    liste1.style.visibility="hidden";
	document.form1.Aff.disabled = false;
	document.form1.Eff.disabled = true;
})


color.forEach(a => a.addEventListener("click", () => {
    document.getElementById("zone").style.backgroundColor = a.value;
}));
    
