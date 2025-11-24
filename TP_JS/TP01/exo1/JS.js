function effacerListe1()
	{
		document.getElementById("Liste1").style.visibility="hidden";
		document.form1.Aff.disabled = false;
		document.form1.Eff.disabled = true;
	}

	function afficherListe1()
	{
		document.getElementById("Liste1").style.visibility ="visible";
		document.form1.Aff.disabled = true;
		document.form1.Eff.disabled = false;
	}

	function changerCouleur(couleur)
	{
		document.getElementById("zone").style.backgroundColor=couleur;
	}