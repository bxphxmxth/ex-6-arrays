// Exercice 6
//     - # 1°
//         - ## Supprimer le dernier élément de l'array
let monTab = ['crabe', 'crevette', 'homard', 'cloporte']

monTab.pop();
console.log(monTab);

//         - ## Supprimer le premier élément de l'array

monTab.shift();
console.log(monTab);

//         - ## Ajouter un élément a la fin de l'array

monTab.push("Sauce blanche");
console.log(monTab);

//         - ## Ajouter un élément au debut de l'array

monTab.unshift("Sauce andalouse");
console.log(monTab);

//         - ## Mettre le deuxième élément en majuscule 



monTab[1].toUpperCase;
console.log(monTab);

// ou
// monTab.splice(1,0, monTab[1].toUpperCase());
// console.log(monTab);


// changer ordre array

monTab.reverse();
console.log(monTab);

//         - ## Changer l'ordre de l'array

monTab.sort();
console.log(monTab);

//     - ## 2°
//         - ## Ordonner les chiffres

        let chiffres = [4, 5, 2, 1, 3]

        

//         - ## Première methode (Ordonner)
//         - ## 1, 2, 3, 4, 5

        chiffres.sort();
        console.log(chiffres);

//         - ## Deuxième methode (Concaténer les chiffres en un string)
//         - ## 1-2-3-4-5

            let chiffres2 = chiffres.join( " - ");
            console.log(chiffres2);


//         - ## Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau

            chiffres = Array.from(chiffres2);
            console.log(chiffres);

            // ou
            // chiffres2.split();
            // console.log(chiffres2);

//         - ## Afficher l'array avec les chiffres ordonnées

    chiffres.sort();



//     - # 3°
//         - ## Créez un tableau vide

let tableau = []

//         - ## Ajouez 10 élément dans votre array

tableau.push("element1", "element2", "element3", "element4", "element5", "element6", "element7", "element8", "element9", "element10");

//         - ## Affichez le contenu de l'array et sa taille

console.log(tableau);
console.log(tableau.length);

//         - ## Touvez l'index de chaque éléments

console.log(tableau.indexOf("element2"));
//         - ## Utiliser une methode qui permet de supprimer un element grâce à l'index

    tableau.splice(4,1);
    console.log(tableau);

//         - ## Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau


let empty = [ ];
console.log(empty);

empty.push("Adil", "Agim", "Ilias x2", "Mouna", "Nathan", "Antoine");

console.log(empty);

// console.log(empty[Math.random()]);

console.log(Math.floor(Math.random()*empty.length));

console.log(empty[Math.floor(Math.random()*empty.length)]);

//         - ## En une ligne supprimer 'Nathan' du tableau

// on vahcerhcer son index:

empty.splice(empty.indexOf("Nathan"), 1);

// il va aller à l'index de nathan et en supprimer 1


console.log(empty);
