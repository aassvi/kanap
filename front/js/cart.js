/**
 * 1 Recuperer le panier à partir des données localstorage
 * *   Function getKanapLS
 * 2 Afficher tableau panier recapitulatif avec les produits et la somme globale du panier
 * 3 Gestion panier pour chaque produit du tableau panier  on ajuste la quantite ou la suprime
 *   Ecoute button 
 *   Function changeQuantity
 *   Function removeKanapPanier
 *   Function getNumberProduct
 *   Function getTotalPrice 
 *   Function saveKanapLS
 * 4 Commande avec le formulaire 
 *   function controlFormulaire 
*/ 

function getPanierLS(){
  let panier = localStorage.getItem("panier");
  //const test133 = console.table('panier function getLs '+ panier);
  if (panier == null){
    return[];
  } else{
    return tab = JSON.parse(panier);
  }
}

panier = getPanierLS();
savePanierLS(panier);


//lecture pannier en page pannier
/* let tabPanier= localStorage.getItem("panier");
if (tabPanier == null){
  panier = [];
} 
let panier = JSON.parse(tabPanier);*/

function afficheProductAPILS(product,product_panier){

  // insertion elements html dans le DOM avec javascript 

  // cherche la section pointe le curseur vers id= cart__items
  const myId = document.getElementById('cart__items'); 
  
  // creation article ///
  const myArticle = document.createElement("article");
  myArticle.classList.add('cart__item');
  myArticle.dataset.id= product._id;           
  const datasetid = console.log('debug affiche panier dataset id   '+product._id);           // dataset attribute id
  myArticle.dataset.color= product_panier.colorProduitPanier;                                // attribute color produit   // panier.colorProduitPanier
  const datasetcolor = console.log('debug affiche panier dataset color '+product_panier.colorProduitPanier);    
  // creation du lien sur article
  myId.appendChild(myArticle);
  // div 
  const myDiv = document.createElement("div");
  myDiv.classList.add('cart__item__img');
  // creation du lien sur article
  myArticle.appendChild(myDiv);
  // creation img
  const img = document.createElement("img");
  myArticle.appendChild(img);
  img.src=product.imageUrl
  img.alt = product.altTxt+", "+product.name;  
  myDiv.appendChild(img);
  // creation div class="cart__item__content"
  const myDiv2 = document.createElement("div");
  myDiv2.classList.add('cart__item__content');
  // creation du lien sur article
  myArticle.appendChild(myDiv2);
  // creation div class="cart__item__content__description"
  const myDiv3 = document.createElement("div");
  myDiv3.classList.add('cart__item__content__description');
  // creation du lien sur article
  myDiv2.appendChild(myDiv3);
  // creation h2 nom du produit
  const myH2 = document.createElement("h2");
  myH2.h2 = product.name;
  myH2.append(myH2.h2);
  myDiv3.appendChild(myH2);
  // creation p color du produit
  const myP1 = document.createElement("p");
  myP1.p = product_panier.colorProduitPanier;                                        // panier.colorProduitPanier
  myP1.append(myP1.p);
  myDiv3.appendChild(myP1);
  // creation p prix du produit
  const myP2 = document.createElement("p");
  //myP2 = parseFloat(string)

  myP2.innerHTML = product.price+ '€';
  myDiv3.appendChild(myP2);
  // creation div class="cart__item__content__settings"
  const myDiv4 = document.createElement("div");
  myDiv4.classList.add('cart__item__content__settings');
  // creation du lien sur article
  myDiv2.appendChild(myDiv4);
  // creation div class="cart__item__content__settings__quantity"
  const myDiv5 = document.createElement("div");
  myDiv5.classList.add('cart__item__content__settings__quantity');
  // creation du lien sur article
  myDiv4.appendChild(myDiv5);
  // creation p quantité
  const myQuantite = document.createElement("p");
  myQuantite.innerText = 'Qté: ';                    
  myDiv5.appendChild(myQuantite);
  // creation input quantité
  const myInput= document.createElement("input");
  //myQuantitéInput atributs
  myInput.type = "number";
  myInput.class = "itemQuantity";
  myInput.name = "itemQuantity";
  myInput.min = "1";
  myInput.max = "100";
  myInput.value = product_panier.quantiteProduitPanier;                           // panier.quantiteProduitPanier
  myDiv5.appendChild(myInput);

  // creation div class="cart__item__content__settings__delete"
  const myDiv6 = document.createElement("div");
  myDiv6.classList.add('cart__item__content__settings__delete');
  // creation p quantité à supprimer 
  const myDeleteQuantite = document.createElement("p");
  myDeleteQuantite.classList.add('deleteItem');
  myDiv6.appendChild(myDeleteQuantite);
  myDeleteQuantite.innerText= "Supprimer";
  // creation du lien sur article
  myDiv4.appendChild(myDiv6);

  // fin article 

  // Affichage nombre de produits
  //number= myInput.value;
  //const tesTotal1 = console.table('afficher le nombre produits  produits ='+ number);
  // inserer le total dans le DOM
  const totalQuantity = document.getElementById('totalQuantity');
  numberProduit = getNumberProduct();
  const getnumber = console.table('apres function get number produits  total produits ='+ numberProduit);
  totalQuantity.replaceChildren(numberProduit);
  
  // Affiche le prix total pour le nombre de produits
  //const price = console.table('apres function get number produits  total produits ='+ product.price);
  let price = product.price;
  const price2 = console.log( ' avant getTotalPrice function price =' + product.price);
  const totalPrix = document.getElementById('totalPrice');
  total  = getTotalPrice(price);
  totalPrix.replaceChildren(total);
  //const tesTotalget = console.table('apres function get number produits  total produits ='+total);


  // cibler le bon produit à suprimer/modifier avec elementClosest et dataset id et color sur id=cart__item
  //const el = document.getElementByClassName('itemQuantity');
  //const rarticle = el.closest('article > div');

  
  // Si changement quantite  controle la quantite du input  - quantite input != quantite dans le panier 

  let input =  myInput.value;
  const iquantite = console.log(" quantite" + input);

  addEventListener('change',(event) =>{
    myInput.value = event.target.value;
    quantity =  myInput.value; 
    const iquan = console.log(" quantite" + myInput.value);
    const iqua = console.log(" quantite" + quantity);
    if (myInput == ""){
      input =product_panier.quantiteProduitPanier ;
      const col1 = console.log("pas de changement de quantite " +input);
    }else{
      numberProduit=  changeQuantity(product,product_panier,quantity);
  
      // inserer le total dans le DOM
      const totalProduit = document.getElementById('totalQuantity');
      numberProduit = getNumberProduct();
     // const tesTotalet = console.table('apres function get number produits  total produits ='+ numberProduit);
      totalProduit.replaceChildren(numberProduit);
      //totalProduit.append(numberProduit);


      // Affiche le prix total pour le nombre de produits
      //const price = console.table('apres function get number produits  total produits ='+ product.price);
      const totalPrix = document.getElementById('totalPrice');
      total = getTotalPrice(price);
      //const pricetotal = console.table('apres function get number produits  total produits ='+total);
      totalPrix.replaceChildren(total);
      //const tesTotalget = console.table('apres function get number produits  total produits ='+total);

    }
  })
    
  // Button Supprime produit 
  // Si button cliqué - produit supprimé localstorage et DOM  supprime produit du panier -
  const suprim = document.querySelector('.deleteItem');
  suprim.addEventListener('click', event => {
  //const testidsup = console.log('produit à supprimer '+product._id);
  removeProductPanier(product);
  //const tesqt = console.table('apres function remove produit en localstorage quantity ='+quantity);
  //let myTotal = myTotal - quantity;
  //const tesTotal = console.table('apres function remove produits total produits ='+ myTotal);
  });

}  /// fin function afficheProductAPLILS

// boucle sur le tabelau panier pour afficher les produits 
for (var i = 0; i < panier.length; i++) {
  const canape = panier[i];
  //  const testid = console.log('localStorage'+ canape.idProduitPanier);
  //  const testqt = console.log('localStorage'+ canape.quantiteProduitPanier);
  //  const testco = console.log('localStorage'+ canape.colorProduitPanier);


  // * 2 Fetch avec id produit et affichage elements sur la page
  let urlKanap = "http://localhost:3000/api/products/" +  canape.idProduitPanier;  // objJsonKanap.idProduitPanier
 
  fetch(urlKanap)
  .then(function(res) {
    if (res.ok) {
      return res.json();                              // promise recupere le resultat de la requete
      }
  })
  .then((data) =>{
    const test5 = console.table(data);
    afficheProductAPILS(data,canape);           // data API canape dans le Localstorage
          
  });

}  // fin de boucle for sur tableau objects product panier 

/**
 * 3. Gestion Pannier 
 *    Ecoute button supprime quantite ou delete produit
 *    Functions
 *    saveKanapLocalstorage - getKanapLocastorage - addKanapPanier,  removeKanapPannier, changeQuantity, 
 * 
*/ 
 
function savePanierLS(panier){
  localStorage.setItem("panier",JSON.stringify(panier));
  if (panier == undefined){
    panier = [];
  }

}

function removeProductPanier(product){
  let panier = getPanierLS();
 // const test173 = console.table('remove function  '+ panier[0].idProduitPanier);
  idProduit = panier[0].idProduitPanier;
 // const test133 = console.table('remove function  '+ product._id);
  panier = panier.filter(p => p.idProduit != product._id);
  if (panier == undefined){
  //  const test143 = console.table('remove function panier == undefined ');
    panier = [];
    localStorage.removeItem(panier[0].idProduitPanier);
  }
}

function changeQuantity(product,product_panier,quantity){
  let panier = getPanierLS();
  let foundProduct = panier.find(p =>p.idProduitPanier == product._id && p.colorProduitPanier== product_panier.colorProduitPanier);
  if (foundProduct != undefined){
    foundProduct.quantiteProduitPanier = quantity;
    
    
  }
  savePanierLS(panier);
}
/*
function changeQuantity(product,quantity){

  if (quantity > "0"){
    if (product != undefined){
      panier[0].quantiteProduitPanier=quantity;
    }  
    savePanierLS(panier);
  }
  return quantity;
}
*/
function getNumberProduct(){
  let panier = getPanierLS();
  let number = 0;
  for (let product of panier){
    number = number + Number(product.quantiteProduitPanier) ;
  }
  return number;
}

function getTotalPrice(price){
  let panier =getPanierLS();
  let total = 0;
  for (let product of panier) {
    let quantite = Number(product.quantiteProduitPanier);
    let prix= Number(price);
    total = quantite * prix;
    const pri = console.log( ' getTotalPrice function prix =' + prix);
    const qunat = console.log( ' getTotalPrice function  quantite = ' +  product.quantiteProduitPanier);
    const totalPrix = console.log( ' getTotalPrice function  total = ' +  total);
  }
  return total;
}


