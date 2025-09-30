const nomJoueur = "Assia";
console.log(nomJoueur); // Affiche "Assia"


let score = 17;
console.log(score); // Affiche 17

score = 18; // Valide : on peut changer la valeur
console.log(score); // Affiche 18

const moyenne = 15;

if (moyenne < 15) {
    console.log("A en-dessous de la moyenne");
} else {
    console.log("A au-dessus de la moyenne");
}

if (moyenne < 13) {
    console.log("Accès interdit aux moins de 13 ans");

} else if (moyenne > 18) {
    console.log("Vous pouvez accéder à la section ado");

} else if (moyenne < 18) {
    console.log("Bienvenue dans l'espace adulte");
}  
for (let i = 1; i < 11; i++) {
    console.log("7*" + i + "=" + 7*i)
}

const saluer (prenom) =>
    

