/**
 * 1 Recuperer le pannier à partir des données localstorage
 * 2 Afficher tableau recapitulatif
 * 
*/ 

/*function getKanapLS(){
  let kanap = localStorage.getItem("kanap");
  if (kanap == null){
    return[];
  } else{
    return kanap1 =JSON.parse(kanap);
  
  }
}
getKanapLS();
*/
//lecture pannier en page pannier
let objT2 = localStorage.getItem("kanap");
let test2 = JSON.parse(objT2);
const test135 = console.table('kanap Ls test2'+ test2);
const test22 = console.log('localStorage'+ test2.quantiteProduitPanier);

//lecture pannier en page pannier
let objTest1 = localStorage.getItem("obj");
let test1 = JSON.parse(objTest1);
const test133 = console.table('obj Ls test1 '+ test1);
const test12 = console.log('localStorage'+ test1.quantiteProduitPanier); 
const test14 = console.log('localStorage'+ test1.idProduitPanier); 
const test16 = console.log('localStorage'+ test1.colorProduitPanier);
/* 1 recuperer le pannier à partir des données localstorage


const aff = console.table(objJsonKanap);
const aff1 = console.table(objJsonKanap.idProduitPanier);
*/

// * 2 Fetch avec id produit et affichage elements sur la page
function afficheKanapAPILS(kanap){
  // cherche la section pointe le curseur vers id= items et cree un link sur element global 
  const myId = document.getElementById('cart__items'); 
  // creation article
  const myArticle = document.createElement("article");
  myArticle.classList.add('cart__item"');
  myArticle.dataset.id= kanap._id;                                 // dataset attribute id
  myArticle.dataset.color= test1.colorProduitPanier;  // objJsonKanap.colorProduitPanier// dataset attribute color produit
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
  img.src=kanap.imageUrl
  img.alt = kanap.altTxt+", "+kanap.name;  
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
  myArticle.appendChild(myDiv3);
  // creation h2 nom du produit
  const myH2 = document.createElement("h2");
  myH2.h2 = kanap.name;
  myH2.append(myH2.h2);
  myDiv3.appendChild(myH2);
  // creation p color du produit
  const myP1 = document.createElement("p");
  myP1.p = test1.colorProduitPanier;                                        // objJsonKanap.colorProduitPanier
  myP1.append(myP1.p);
  myDiv3.appendChild(myP1);
  // creation p prix du produit
  const myP2 = document.createElement("p");
  //myP2 = 
  myP2.innerHTML = kanap.price+ '€';
  myDiv3.appendChild(myP2);

  // creation div class="cart__item__content__settings"
  const myDiv4 = document.createElement("div");
  myDiv4.classList.add('cart__item__content__settings');
  // creation du lien sur article
  myArticle.appendChild(myDiv4);
  // creation div class="cart__item__content__settings__quantity"
  const myDiv5 = document.createElement("div");
  myDiv5.classList.add('cart__item__content__settings__quantity');
  // creation du lien sur article
  myArticle.appendChild(myDiv5);
  // creation p quantité
  const myQuantité = document.createElement("p");
  myQuantité.innerText = 'Qté :'+ test1.quantiteProduitPanier;                        // objJsonKanap.quantiteProduitPanier
  //myP1 = 
  myDiv5.appendChild(myQuantité);
  // creation input quantité
  const myQuantitéInput= document.createElement("input");
  //myQuantitéInput.input = 
  myDiv5.appendChild(myQuantitéInput);

  // creation div class="cart__item__content__settings__delete"
  const myDiv6 = document.createElement("div");
  myDiv6.classList.add('cart__item__content__settings__delete');
  // creation du lien sur article
  myArticle.appendChild(myDiv6);

}

let urlKanap = "http://localhost:3000/api/products/" +  test1.idProduitPanier;  // objJsonKanap.idProduitPanier

fetch(urlKanap)
 .then(function(res) {
   if (res.ok) {
     return res.json();                              // promise recupere le resultat de la requete
    }
 })
 .then((data) =>{
  const test5 = console.table(data);
  afficheKanapAPILS(data);
    
});

function removeKanapPanier(product){
  let kanap = getKanapLS();
  kanap = kanap.filter( p != product.id);
  saveKanapLS();
}

function changeQuantity(product,quantity){
let kanap = getKanapLS();
let foundProduct = basket.find(kanap =>kanap.idProduitPanier == product.idProduitPanier && kanap.colorProduitPanier== product.colorProduitPanier);
if (foundProduct != undefined){
  foundProduct.quantity += quantity;
  if (foundProduct.quantity <=0){
    removeKanapPanier(foundProduct);

  } else {
    saveKanapLS(kanap);
  }
}
}
function getNumberProduct(){
  let kanap = getKanapLS();
  let number = 0;
  for (let product of kanap){
    number+= product.quantity;
  }
  return number;
}

function getTotalPrice(){
  let kanap =getKanapLS();
  let total = 0;
  for (let product of kanap) {
    total +=product.quantity * product.price;
  }
  return total;
}