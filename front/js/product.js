/**
 * 1 Recupere URL avec id produit lien clické
 * 2 Function getKanapAPI
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
//const test = console.table(id);

let selectColor ='';
// * 2 Fetch avec id produit et affichage elements sur la page DOM 
function getProductAPI(product){
  // construction element enfant div image et attribut alt
  const imgProduct = document.createElement("img");
  document.getElementsByClassName("item__img")[0].appendChild(imgProduct);
  imgProduct.src = product.imageUrl;
  imgProduct.alt = product.altTxt;
  //nom produit
  const titleProduct = document.getElementById('title');
  titleProduct.innerHTML = product.name;
  //prix produit
  const prixProduct = document.getElementById('price');
  prixProduct.innerHTML = product.price;
  //description produit
  const descriptionProduct = document.getElementById('description');
  descriptionProduct.innerHTML = product.description;
  //color produit
  product.colors.forEach(function(color) {
    // cherche id colors
    const select = document.getElementById('colors');
    // cree option dans le DOM
    const myOption = document.createElement("option");
    // cherche les valeurs option dans le tableau
    myOption.value = color;   
    myOption.append(myOption.value);
    select.appendChild(myOption);
    //recuperer le choix couleur de   

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
 *    Functions
 *    saveKanapLocalstorage - getKanapLocastorage - addKanapPanier 
 * 
*/ 
function savePanierLS(panier){
  localStorage.setItem("panier",JSON.stringify(panier)); // serialise le tableau en string de characteres et le sauvegarde en localstorage 
  //const test133 = console.table('savekanap function set '+ panier[0].colorProduitPanier);
}

function getPanierLS(){
  let panier = localStorage.getItem("panier"); // cherche le tableau en string de characteres dans le localstorage 
 // const test133 = console.table('panier function getLs '+ panier[0].colorProduitPanier);
  if (panier == null){
    return[];
  } else{
    return JSON.parse(panier); // deserialise le tableau de string de characteres au format json  
  
  }
}

function addProductPanier(product){
  let panier = getPanierLS();
  const test143 = console.log('kanap  nouvelle quantite '+ product.quantiteProduitPanier); 
  let foundProduct = panier.find(p =>p.idProduitPanier == product.idProduitPanier && p.colorProduitPanier == product.colorProduitPanier);
  if (foundProduct != undefined) {
    foundProduct.quantiteProduitPanier += product.quantiteProduitPanier;
    if (foundProduct.quantiteProduitPanier >100){
      alert("Le nombre articles est supérieur à 100. Resaisissez une quantité.");
      foundProduct.quantiteProduitPanier = foundProduct.quantiteProduitPanier - product.quantiteProduitPanier;  
    }
    savePanierLS(panier);
    alert("Plus d'exemplaires ajoutés au panier pour cet article.");
    
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
  if (selectColor === '' || selectColor === undefined){
    alert("Selectionner une couleur.");
    window.location.reload();
  }
 
});

//quantité produit
const input = document.getElementById('quantity'); 
input.addEventListener('input', updateValue);
function updateValue(e) {
  quantity = parseInt(e.target.value);
  if ( quantity <= 0 ||  quantity > 100 ) {
    quantity = 0;
    const erreurquantite = console.log("erreur quantite" + quantity);
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

  //const test14 = console.log('avant localstorage'+product.quantiteProduitPanier);
 

  if (product.quantiteProduitPanier > 0 && product.quantiteProduitPanier != null && product.colorProduitPanier != undefined && product.colorProduitPanier != ''){
    addProductPanier(product);
    window.location.reload();  

  }else{
    alert("Selectionner une couleur et une quantité pour ajouter un article au panier.");


     
    
  }
});



