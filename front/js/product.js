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

   /*image produit
   const myImg = document.getElementByClass("item");
   const test8 = console.log(myImg);
   // construction element enfant article image et attribut alt
   const img = document.createElement("img");
   // alimentation des variables avec les valeurs de l'APi
    img.scr = data.imageUrl;
    const testim = console.log(img);
    img.setAttribute("scr",img.scr);
    img.alt = data.altTxt; 
      const test = console.log(img.scr);
    // creation du lien enfant image et alt au parent article 
    article.append(img);
    article.appendChild(img);
   */
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

   //récuperer les valeur  pour les mettre dans un object  
   let objProduitPanier = {
     idProduitPanier:id,
     quantitéProduitPannier: quantity.textContent,
    colorProduitPanier:selectColor
   }
  

   //Créer un local storage  memorise l'object
   let objPannier = JSON.stringify(objProduitPanier);
   localStorage.setItem("obj",objPannier);

});

//lecture pannier en page pannier
let objPannier1 = localStorage.getItem("obj");
let objProduitPanier1 = JSON.parse(objPannier1);

const test12 = console.log('localStorage'+ objProduitPanier1.quantitéProduitPannier); 
const test14 = console.log('localStorage'+objProduitPanier1.idProduitPanier); 
const test16 = console.log('localStorage'+objProduitPanier1. colorProduitPanier);




//

// propagation
//const elt = document.getElementById('colors');    // On récupère l'élément sur lequel on veut détecter le clic
//elt.addEventListener('click', function(event) {     // On écoute l'événement click, notre callback prend un para//mètre que nous avons appelé event ici
 //   event.preventDefault();                         // On utilise la fonction preventDefault de notre objet event pour empêcher le comportement par défaut de cet élément lors du clic de la souris
//});