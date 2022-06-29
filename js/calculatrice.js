function clearceresultatdechiasse(){
    document.getElementById("resultat").value="";
}

function display(valeur){
    document.getElementById("resultat").value += valeur;
}

function calcul(){
    var p = document.getElementById("resultat").value;
    var q = eval(p);
    document.getElementById("resultat").value = q;
}