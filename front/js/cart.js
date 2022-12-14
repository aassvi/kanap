/**
 * afficher le pannier à partir des données localstorage
 * afficher tableau recapitulatif
 * 
 */

/*lecture pannier en page pannier
let objPannier1 = localStorage.getItem("obj");
let objProduitPanier1 = JSON.parse(objPannier1);
const test12 = console.log(objProduitPanier1.quantitéProduitPannier); 
const test13 = console.log(objProduitPanier1.idProduitPanier);
const test15 = console.log(objProduitPanier1.colorProduitPanier);  

const test16 = console.log(objProduitPanier1["quantitéProduitPannier"]);  
*/
let objPanier = localStorage.getItem("obj");
let arrayProduitPanier1 = JSON.parse(objPanier);
const test21 = console.log('localStorage'+ arrayProduitPanier1[0]);
const test22 = console.log('localStorage'+ arrayProduitPanier1[1]);
const test23 = console.log('localStorage'+ arrayProduitPanier1[2]); 
// * 2 Fetch avec id produit et affichage elements sur la page


let urlKanap = "http://localhost:3000/api/products/" +  arrayProduitPanier1[0];

fetch(urlKanap)
 .then(function(res) {
   if (res.ok) {
     return res.json();                              // promise recupere le resultat de la requete
    }
 })
.then((data) =>{

    // cherche la section pointe le curseur vers id= items et cree un link sur element global 
    const myId = document.getElementById('cart__items'); 
    // creation article
    const myArticle = document.createElement("article");
    myArticle.classList.add('cart__item"');
    myArticle.dataset.id= data._id;                                 // dataset attribute id
    myArticle.dataset.color= arrayProduitPanier1[2];  // dataset attribute color produit
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
    img.src=data.imageUrl
    img.alt = data.altTxt+", "+data.name;  
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
    myH2.h2 = data.name;
    myH2.append(myH2.h2);
    myDiv3.appendChild(myH2);
    // creation p color du produit
    const myP1 = document.createElement("p");
    myP1.p = arrayProduitPanier1[2];
    myP1.append(myP1.p);
    myDiv3.appendChild(myP1);
    // creation p prix du produit
    const myP2 = document.createElement("p");
    //myP2 = 
    myP2.innerHTML = data.price+ '€';
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
    myQuantité.innerText = 'Qté :'+ arrayProduitPanier1[1];
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

});
