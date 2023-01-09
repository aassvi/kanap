/**
 * 1 Recupere URL avec id produit lien clické
 * 2 Function getProduitAPI
 *   Fetch avec id produit et affichage elements sur la page
 *   cherche l'endroit et cree element si necessaire
 *   Afficher   img - nom produit - prix - description produit 
 *   Recupere la couleur du produit choisie par le client via la liste déroulante option
 *   Recupere la quantité du produit choisie par le client via input
 *   sauvegarde dans un object (tableau associatif) 
 * 
 * 3 Gestion panier - produit sur la page et produits dans le panier et sauvegarde produit en localstorage = tableau d'objects 
 *   Ecoute button 
 *   Function addKanapPanier 
 *   Function saveKanapLS
 *   Function getKanapLS
 *
 */
// * 1 recupere URL avec id produit lien clické
let params = new URLSearchParams(document.location.search);
let id = params.get("id");

// initialisation de variable color selectionée
let selectColor ='';


/**
 * Function getProductAPI  2 Fetch avec id produit et affichage elements sur la page DOM 
 * @param {*} product 
 */
function getProductAPI(product){
  const imgProduct = document.createElement("img");
  document.getElementsByClassName("item__img")[0].appendChild(imgProduct);
  imgProduct.src = product.imageUrl;
  imgProduct.alt = product.altTxt;
  const titleProduct = document.getElementById('title');
  titleProduct.innerHTML = product.name;
  const prixProduct = document.getElementById('price');
  prixProduct.innerHTML = product.price;
  const descriptionProduct = document.getElementById('description');
  descriptionProduct.innerHTML = product.description;
  product.colors.forEach(function(color) {
  const select = document.getElementById('colors');
  const myOption = document.createElement("option");
  myOption.value = color;   
  myOption.append(myOption.value);
  select.appendChild(myOption);
  }); 
}

let urlKanap = "http://localhost:3000/api/products/" + id;


fetch(urlKanap)
 .then(function(res) {
   if (res.ok) {
     return res.json();                              // promise recupere le resultat de la requete format json
    }
 })
.then((data) =>{
  const test5 = console.table(data);
  getProductAPI(data);
    
});

/**
* 3. Gestion Pannier 
*    Ecoute button 
*    addProductPanier au panier en Localstorage 
*    Localstorage proprieté de Window object dans le navigateur qui permets de sauvegarder des données de manière persistante
*    localement (reloads et differentes sessions )
*
*/ 
/**
 * savePanierLocalstorage - serialise le tableau en string de characteres et le sauvegarde en localstorage
 * @param {Object} panier 
 */
function savePanierLS(panier){
  localStorage.setItem("panier",JSON.stringify(panier));  
}
/**
 * getPanierLocastorage 
 * cherche le tableau en string de characteres dans le localstorage et deserialise le tableau de string de characteres au format json 
 * @returns 
 */
function getPanierLS(){
  let panier = localStorage.getItem("panier"); 
  if (panier == null){
    return[];
  } else{
    return JSON.parse(panier);  
  
  }
}
/**
 * addProductPanier 
 * @param {object} product 
 *
 */
function addProductPanier(product){
  let panier = getPanierLS();
  let foundProduct = panier.find(p =>p.idProduitPanier == product.idProduitPanier && p.colorProduitPanier == product.colorProduitPanier);
  if (foundProduct != undefined) {
    foundProduct.quantiteProduitPanier += product.quantiteProduitPanier;
    if (foundProduct.quantiteProduitPanier >100){
      foundProduct.quantiteProduitPanier = foundProduct.quantiteProduitPanier - product.quantiteProduitPanier;
      document.getElementById('quantity').value = 0;
      alert("Le nombre articles est supérieur à 100 dans le panier.");

    }else{
      savePanierLS(panier);
      alert("Plus d'exemplaires ajoutés au panier pour cet article.");
    }
  } else{
    panier.push(product);
    savePanierLS(panier);
    alert("Article ajouté au panier");

  }
}

// controle saisie couleur
const selectElement = document.getElementById('colors');
selectElement.addEventListener('change', (event) => {
  selectColor= event.target.value;
});

//quantité produit
const input = document.getElementById('quantity'); 
input.addEventListener('input', updateValue);
function updateValue(e) {
  quantity = parseInt(e.target.value);
  if ( quantity <= 0 ||  quantity > 100 ) {
    quantity = 0;
    document.getElementById('quantity').value=0;
    alert("Saisissez un nombre d'articles entre 1 et 100.");
  }
  
}
// Ajout product dans le panier tableau object avec trois attributs id quantite et couleur 
// Ecoute le bouton ajout produit au panier
const button = document.querySelector('button');
button.addEventListener('click', event => {
  
  let product = {
    idProduitPanier:id,
    quantiteProduitPanier: quantity,
    colorProduitPanier:selectColor
  }
  if (product.quantiteProduitPanier > 0 && product.quantiteProduitPanier != null && product.colorProduitPanier != undefined && product.colorProduitPanier != ''){
    addProductPanier(product);
    document.getElementById('quantity').value=0; 
  }else{
    alert("Selectionner une couleur et une quantité pour ajouter un article au panier.");
  }
});



