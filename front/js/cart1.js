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
/**
 * 
 * @returns 
 */
function getPanierLS(){
     let panier = localStorage.getItem("panier");
     //const test133 = console.table('panier function getLs '+ panier);
     if (panier == null){
       return[];
     } else{
       return tableauPanier = JSON.parse(panier);
     }
   }
   
   panier = getPanierLS();
   
 /**
    * 3. Gestion Pannier 
    *    Ecoute button supprime quantite ou delete produit
    *    Functions
    *    savePanierLS -   removeProductPanier, changeQuantity, 
   */ 
   
   /**
    * 
    * @param {*} panier 
    */
   function savePanierLS(panier){
    localStorage.setItem("panier",JSON.stringify(panier));
    if (panier == undefined){
      panier = [];
    }
  }
 

   /**
   * 
   * @param {*} product 
   * @param {*} product_panier 
   *
   * insertion elements html dans le DOM avec javascript
   */
function afficheProductAPILS(product,product_panier){
     
     const myId = document.getElementById('cart__items'); 
     // creation article //
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
     // creation div 
     const myDiv3 = document.createElement("div");
     myDiv3.classList.add('cart__item__content__description');
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
     myP2.innerHTML = product.price+ '€';
     myDiv3.appendChild(myP2);
     // creation div 
     const myDiv4 = document.createElement("div");
     myDiv4.classList.add('cart__item__content__settings');
     myDiv2.appendChild(myDiv4);
     // creation div 
     const myDiv5 = document.createElement("div");
     myDiv5.classList.add('cart__item__content__settings__quantity');
     myDiv4.appendChild(myDiv5);
     // creation p quantité
     const myQuantite = document.createElement("p");
     myQuantite.innerText = 'Qté: ';                    
     myDiv5.appendChild(myQuantite);
     // creation input quantité
     const myInput= document.createElement("input");                                //myQuantitéInput atributs
     myInput.type = "number";
     myInput.classList.add('itemQuantity');
     myInput.name = "itemQuantity";
     myInput.min = "1";
     myInput.max = "100";
     myInput.value = product_panier.quantiteProduitPanier; 
     myInput.innerHTML = myInput.value;                          // panier.quantiteProduitPanier
     myDiv5.appendChild(myInput);
     // creation div 
     const myDiv6 = document.createElement("div");
     myDiv6.classList.add('cart__item__content__settings__delete');
     // creation p quantité à supprimer 
     const myDeleteQuantite = document.createElement("p");
     myDeleteQuantite.classList.add('deleteItem');
     myDiv6.appendChild(myDeleteQuantite);
     myDeleteQuantite.innerText= "Supprimer";
     myDiv4.appendChild(myDiv6);
     // fin creation article //
    
    
   
}  
/**
   * 
   * @param {*} product 
   * @param {*} product_panier 
   * 
   * Function change quantite 
   * Cibler le bon produit à suprimer/modifier avec elementClosest et dataset et color sur class="cart__item"
*/
function checkQuantity(){
       
     const formQuantity = document.getElementById("cart__items");
     formQuantity.addEventListener('change',(event) =>{

          if (event.target.tagName === "INPUT") {
               // Récupération du div parent de l'élément cliqué
               const item = event.target.closest(".cart__item");
         
               // Récupération des données du div
               const id = item.dataset.id;
               const color = item.dataset.color;
               const ide = console.log(" function ChangeQuantity event.target.tagName id  " + id);
               const colorr = console.log(" function ChangeQuantity event.target.tagName color  =  " + color);
         
               // Affichage des données du div
               console.log(`ID : ${id} - Color : ${color}`);
               
          nouvelleQuantity =  event.target.value;
          const nouqnQT = console.log(" function ChangeQuantity nouvelle quantite =  " + nouvelleQuantity);
          
          // Mise à jour de la quantité dans l'objet du panier
           
          let panier = getPanierLS();
          let foundProduct = panier.find(p =>p.idProduitPanier == id && p.colorProduitPanier == color);
               if (foundProduct != undefined ){
                 foundProduct.quantiteProduitPanier = nouvelleQuantity;
                 if(foundProduct.quantiteProduitPanier<=0){
                   removeProductPanier(foundProduct);
                 }else{
                   savePanierLS(panier);
                   window.location.reload();
                 }
               }  
          }       
         
     })  
}
   
   
function checkDelete(){
     /**
    * function suprime 
    * Button Supprime produit 
    * Si button cliqué - produit supprimé localstorage et DOM  supprime produit du panier - 
    */
     
     
     document.addEventListener('click',(event) =>{
          if (event.target.className === "deleteItem") {
               // Récupération du div parent de l'élément cliqué
               const item = event.target.closest('.cart__item');
               // Récupération des données du div
               const id = item.dataset.id;
               const color = item.dataset.color;
               const ide = console.log(" function Delete event.target.tagName id  " + id);
               const colorr = console.log(" function Delete event.target.tagName color  =  " + color);               
              
               
               let panier = getPanierLS();
               // supprime le id et color dont le bouton a ete clické 
               panier = panier.filter(p => p.idProduit != id && p.colorProduitPanier != color);
               savePanierLS(panier);
               window.location.reload();
               }
          
     });
     
   
}

/**
* 
* Affiche le nombre total de produits(articles) et prix total dans le DOM
*/
function affichetotal(){
  const tQ = document.getElementById('totalQuantity');
  tQ.replaceChildren(totalquantity);
  const totalPrix = document.getElementById('totalPrice');
  totalPrix.replaceChildren(totalprice);
}
/**
*  Boucle sur le tableau panier pour afficher les produits avec id localstorage
* 
*/
   let totalprice = 0;
   let totalquantity = 0;
   for (var i = 0; i < panier.length; i++) {
     const canape = panier[i];
     let urlKanap = "http://localhost:3000/api/products/" +  canape.idProduitPanier;  
    
     fetch(urlKanap)
     .then(function(res) {
       if (res.ok) {
         return res.json();                              // promise recupere le resultat de la requete
         }
     })
     .then((data) =>{
       const test5 = console.table(data);
       afficheProductAPILS(data,canape);           // data API et canapes dans le Localstorage
       totalprice = totalprice + Number(data.price) * Number(canape.quantiteProduitPanier);
       totalquantity = totalquantity + Number(canape.quantiteProduitPanier);
       affichetotal()
      
     });
     checkQuantity();
     checkDelete();

}  // fin de boucle for sur tableau objects product panier 


//***************************************      section formulaire  ********************************************************/

// test 

let myForm = document.querySelector("form");

myForm.addEventListener('submit', function(e){
  const firstName = document.getElementById("firstName");
  const firstNameRegex = /^[a-zA-Z-\s]+$/;
  if (firstName.value.trim() == ""){
    e.preventDefault();
  } else if (firstNameRegex.test(firstName.value) == false) {
    const firstNameErrorMsg = document.getElementById("firstNameErrorMsg");
    firstNameErrorMsg.innerHTML='Le prénom doit comporter des lettres, des tirets uniquement';
    e.preventDefault();
  } else if (firstNameRegex.test(firstName.value) == true) {
      firstNameErrorMsg.innerHTML="";
  }
  
  const lastName = document.getElementById("lastName");
  const lastNameRegex = /^[a-zA-Z-\s]+$/;
  if (lastName.value.trim() == ""){
    e.preventDefault();
  } else if (lastNameRegex.test(lastName.value) == false) {
    const lastNameErrorMsg = document.getElementById("lastNameErrorMsg");
    lastNameErrorMsg.innerHTML='Le nom doit comporter des lettres, des tirets uniquement';
    e.preventDefault();
  }else if (lastNameRegex.test(lastName.value) == true) {
    lastNameErrorMsg.innerHTML="";
  }
  const address = document.getElementById("address");
  const addressRegex =  /^[a-zA-Z0-9\s,.'-]{3,}$/;
  if (address.value.trim() == ""){
    const addressErrorMsg = document.getElementById("addressErrorMsg");
    addressErrorMsg.innerHTML='L\'adresse est requise';
    e.preventDefault();
  } else if (addressRegex.test(address.value) == false) {
    const addressErrorMsg = document.getElementById("address");
    addressErrorMsg.innerHTML='L\'adresse doit comporter des lettres des chiffres et des tirets uniquement';
    e.preventDefault();
  }
  else if (addressRegex.test(address.value) == true) {
    addressErrorMsg.innerHTML="";
  }
  const city = document.getElementById("city");
  const cityRegex = /^[a-zA-Z-\s]+$/;
  if (city.value.trim() == ""){
    const cityErrorMsg = document.getElementById("cityErrorMsg");
    cityErrorMsg.innerHTML='Le nom de la ville est requise';
    e.preventDefault();
  } else if (cityRegex.test(city.value) == false) {
    const cityErrorMsg = document.getElementById("cityErrorMsg");
    cityErrorMsg.innerHTML='La ville doit comporter des lettres, des tirets uniquement';
    e.preventDefault();
  }
  else if (cityRegex.test(city.value) == true) {
    cityErrorMsg.innerHTML="";
  }  
  const email = document.getElementById("email");
  const emailRegex = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  if (email.value.trim() == ""){
    e.preventDefault();
  } else if (emailRegex.test(email.value) == false) {
    e.preventDefault();
  }
  
  // création object avec données de formulaire et le panier 
  let contact = {
    "firstName": document.querySelector("#firstName").value,
    "lastName" : document.querySelector("#lastName").value,
    "address"  : document.querySelector("#address").value,
    "city"     : document.querySelector("#city").value,
    "email"    : document.querySelector("#email").value
  }

  // met  object contact en localstorage
  
  localStorage.setItem("contact",JSON.stringify(contact));
  let objcontact = localStorage.getItem("contact");

  const t1 = console.log("contact----------------------------");
  const T2 = console.log(contact);

  // création tableau produits avec les données du panier
  let produits = panier;
  console.log("produits");
  console.log(produits);

  // envoyer object contact vers le serveur API 
   
  const promised01 = fetch("http://localhost:3000/api/products/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contact: contact,
      produits: produits
    }),
  });
  
  // pour voir le résultat du serveur dans la console 
  promised01.then(async(response)=>{

    try{
      console.log("reponse");
      console.log(reponse);
      const contenu = await response.json();
      console.log("contenu");
      console.log(contenu);
    }catch(e){
      console.log(e);
    }

  })

  // pour voir ce qu'il y a réelement sur le serveur
  const promise02 =fetch("http://localhost:3000/api/products/")
  promised01.then(async(response)=>{

    try{
      console.log("promise02");
      console.log(promise02);
      const donneeSurServeur = await response.json();
      console.log("donneeSurServeur ");
      console.log(donneeSurServeur );
    }catch(e){
      console.log(e);
    }
  })

});


   



