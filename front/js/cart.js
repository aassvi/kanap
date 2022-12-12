/**
 * afficher le pannier à partir des données localstorage
 * 
 * 
 */

//lecture pannier en page pannier
let objPannier1 = localStorage.getItem("obj");
let objProduitPanier1 = JSON.parse(objPannier1);
const test12 = console.log(objProduitPanier1.quantitéProduitPannier); 
const test13 = console.log(objProduitPanier1.idProduitPanier); 



// cherche la section pointe le curseur vers id= items et cree un link sur element global 
const myId = document.getElementById('cart__items'); 
// creation article
const myArticle = document.createElement("article");
myArticle.classList.add('cart__item"');
myArticle.classList.add('data-id="{product-ID}"');
myArticle.classList.add('data-color="{product-color}');
// creation du lien sur article
myId.appendChild(myArticle);
// div 
const myDiv = document.createElement("div");
myDiv.classList.add('cart__item__img');
// creation du lien sur article
myArticle.appendChild(myDiv);
// creation img
const img = document.createElement("img");
//img.scr = kanap.imageUrl;
//img.setAttribute("scr",img.scr);
//img.alt = kanap.altTxt+", "+kanap.name; 
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
//myH2 = 
myDiv3.appendChild(myH2);
// creation p color du produit
const myP1 = document.createElement("p");
//myP1 = 
myDiv3.appendChild(myP1);
// creation p prix du produit
const myP2 = document.createElement("p");
//myP2 = 
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
myQuantité.innerText = 'Qté :';
//myP1 = 
myDiv5.appendChild(myQuantité);
// creation input quantité
const myQuantitéInput= document.createElement("p");
//myQuantitéInput.input = 
myDiv5.appendChild(myQuantitéInput);

// creation div class="cart__item__content__settings__delete"
const myDiv6 = document.createElement("div");
myDiv6.classList.add('cart__item__content__settings__delete');
// creation du lien sur article
myArticle.appendChild(myDiv6);


