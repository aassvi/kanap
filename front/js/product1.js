/**
 * 1 recupere URL avec id produit lien clické
 * 2 Fetch avec id produit et affichage elements sur la page
 * cherche l'endroit et cree element si necessaire
 * Afficher   img - nom produit - prix - description produit 
 * Recupere la couleur du produit choisie par le client via la liste déroulante option
 * Recupere la quantité du produit choisie par le client via input
 * 
 * 3 Ajoute produit au pannier 
 * ecoute button si cliqué - garde info en localstorage 
 * let currentCart = JSON.parse(localStorage.getItem("produit")); et variables
 *
 */

// * 1 recupere URL avec id produit lien clické
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
const test = console.table(id);


// * 2 Fetch avec id produit et affichage elements sur la page


let urlKanap = "http://localhost:3000/api/products/" + id;

fetch(urlKanap)
 .then(function(res) {
   if (res.ok) {
     return res.json();                              // promise recupere le resultat de la requete
    }
 })
.then((data) =>{
   const test1 = console.table(data.colors);

   
   // construction element enfant div image et attribut alt
   const myDiv = document.getElementById('item__img');
   const myImg = document.createElement("img");
   //myDiv.appendChild(myImg);
   myImg.src=data.imageUrl
   myImg.alt = data.altTxt; 

   const col5= console.log(data.imageUrl);

   //nom produit
   const titleProduct = document.getElementById('title');
   titleProduct.innerHTML = data.name;
   //prix produit
   const prixProduct = document.getElementById('price');
   prixProduct.innerHTML = data.price;
   //description produit
   const descriptionProduct = document.getElementById('description');
   descriptionProduct.innerHTML = data.description;
   //color produit
   data.colors.forEach(function(color) {
     // cherche id colors
      const select = document.getElementById('colors');
      // cree option dans le DOM
      const myOption = document.createElement("option");
      // cherche les valeurs option dans le tableau
      myOption.value = color;
      const col = console.log(color);
      myOption.append(myOption.value);
      select.appendChild(myOption);
       //recuperer le choix couleur de
         
    });

    const selectElement = document.getElementById('colors');
    selectElement.addEventListener('change', (event) => {
    selectColor= event.target.value;
    const col1 = console.log(selectColor);
   
    });

    //quantité produit
    // cherche id quantity et garde la valeur choisie 
    const quantite = document.getElementById('quantity').value;
    //quantité variable
    const test3 = console.log(quantite);
    //recuprer la quantité choisie
    const input = document.querySelector('input');
    const quantity = document.getElementById('quantity');
    input.addEventListener('change', updateValue);
    function updateValue(e) {
      quantity.textContent = e.target.value;
      const quantiteChoisie = console.log(quantity.textContent);
    }

      
});
 


//ajout dans le panier Ecouter le bouton 
const button = document.querySelector('button');
button.addEventListener('click', event => {
 
 
  // array panier avant sauvegarde localstorage
  arrayProduitPanier = new Array(id,quantity.textContent,selectColor);
  const test18 = console.log('avant localstorage'+arrayProduitPanier[0]);  
  const test19 = console.log('avant localstorage'+arrayProduitPanier[1]);
  const test20 = console.log('avant localstorage'+arrayProduitPanier[2]);

  tab1=new Array("Étudiant 1",12,10);
  tab2=new Array("Étudiant 2",10,15); 


  
  // on verifie si les donnees etaient deja presentes dans l'array pannier 
  // si oui id  color deja presents incremente la quatité
  //if arrayProduitPannier[0] == arrayProduitPannier1[0] &&  arrayProduitPannier[2] == arrayProduitPannier1[2] alors arrayProduitPanier[1]++
  arrayProduitPanier.forEach((element) =>{
    addQtProduit(element);  // arrayProduitPanier.push(arrayProduitPanier[1])
  });
  //si non enresgistrement des données dans array sauvegarde en localstorage
  //else
  // array panier  sauvegarde localstorage
  arrayProduitPanier.forEach((element) =>{
    addLocalstorage(element);   //sauvegarde localstorage
 });

  let arrayPanier = JSON.stringify(arrayProduitPanier);
  localStorage.setItem("obj",arrayPanier); 
  let objPanier = localStorage.getItem("obj");
  let arrayProduitPanier1 = JSON.parse(objPanier);
  const test21 = console.log('localStorage'+ arrayProduitPanier1[0]);
  const test22 = console.log('localStorage'+ arrayProduitPanier1[1]);
  const test23 = console.log('localStorage'+ arrayProduitPanier1[2]); 



});





//Créer un local storage  memorise l'object
//let objPannier = JSON.stringify(objProduitPanier);
//localStorage.setItem("obj",objPannier);

/*lecture pannier en page pannier
let objPannier1 = localStorage.getItem("obj");
let objProduitPanier1 = JSON.parse(objPannier1);

const test12 = console.log('localStorage'+ objProduitPanier1.quantitéProduitPannier); 
const test14 = console.log('localStorage'+objProduitPanier1.idProduitPanier); 
const test16 = console.log('localStorage'+objProduitPanier1. colorProduitPanier);
//const test17 = console.log('localStorage'+objProduitPanier1.nomProduitPanier);
// propagation
//const elt = document.getElementById('colors');    // On récupère l'élément sur lequel on veut détecter le clic
//elt.addEventListener('click', function(event) {     // On écoute l'événement click, notre callback prend un para//mètre que nous avons appelé event ici
 //   event.preventDefault();                         // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
//});
*/