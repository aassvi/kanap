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
   
     //panier = getPanierLS();
   
   
   let panier = JSON.parse(localStorage.getItem("panier"));  
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
     myInput.value = product_panier.quantiteProduitPanier;                           // panier.quantiteProduitPanier
     const valqt = console.log('debug affiche panier quantiteProduitPanier '+product_panier.quantiteProduitPanier);
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
   
 
   function checkDelete(product){
      /**
     * function suprime 
     * Button Supprime produit 
     * Si button cliqué - produit supprimé localstorage et DOM  supprime produit du panier - 
     */
      
      const suprim = document.querySelector('.deleteItem');
      suprim.addEventListener('click', event => {
          //const testidsup = console.log('produit à supprimer '+product._id);
          removeProductPanier(product);
          window.location.reload();
          
          //const tesqt = console.table('apres function remove produit en localstorage quantity ='+quantity);
          //let myTotal = myTotal - quantity;
          //const tesTotal = console.table('apres function remove produits total produits ='+ myTotal);
      });
   
   }
   
   /**
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
       
       checkDelete(canape)
       totalprice = totalprice + Number(data.price) * Number(canape.quantiteProduitPanier);
       totalquantity = totalquantity + Number(canape.quantiteProduitPanier);
       affichetotal()
      
     });
    
   }  // fin de boucle for sur tableau objects product panier 
   
   //checkQuantity();
     /**
   * 
   * @param {*} product 
   * @param {*} product_panier 
   * 
   * Function change quantite 
   * Cibler le bon produit à suprimer/modifier avec elementClosest et dataset et color sur class="cart__item"
   */
    // function checkQuantity(product){
          //const el = document.getElementByClassName('itemQuantity');
          //const closestArticle = el.closest('article > div');
          
          //const el = document.querySelectorAll(".itemQuantity");
          //const elementClosest = console.log(el.closest(".cart__item"));
          
     
          const formQuantity = document.querySelectorAll(".itemQuantity");

          panier = getPanierLS();
         
          let foundProduct = panier.find(p =>p.idProduitPanier == panier._id && p.colorProduitPanier== panier.colorProduitPanier);
          
          const tetid = console.log('changeQuantitylocalStorage  '+ foundProduct[0]);
         
          formQuantity[foundProduct].addEventListener('change',(event) =>{
               if (formQuantity[foundProductfoundProduct].value>0){
            
                    nouvelleQuantity =  event.target.value;
                    const nouqnQT = console.log(" function ChangeQuantity nouvelle quantite =  " + nouvelleQuantity);
                    ancienneQuantity = panier.quantiteProduitPanier ;
                    const ancQT = console.log(" function ChangeQuantity ancienneQuantity =  " + ancienneQuantity);
                    //if (nouvelleQuantity != ancienneQuantity){
                   
                    // window.location.reload();
                    if (foundProduct != undefined){
                         foundProduct.quantiteProduitPanier = nouvelleQuantity;
                         if(foundProduct.quantiteProduitPanier<=0){
                         removeProductPanier(foundProduct);
                         }else{
                         savePanierLS(panier);
                         }
                    }
               }
          });    
     
     //
          //const noe = console.log(" function ChangeQuantity formQuantity =  "+ formQuantity);
          
        
          /* faire la boucle indexer element.addEvent
      for (let c= 0; c< panier.length; c++){
          formQuantity[c].addEventListener('change',(event) =>{
            if (formQuantity[c].value>0){
            
               nouvelleQuantity =  event.target.value;
               const nouqnQT = console.log(" function ChangeQuantity nouvelle quantite =  " + nouvelleQuantity);
               ancienneQuantity = panier.quantiteProduitPanier ;
               const ancQT = console.log(" function ChangeQuantity ancienneQuantity =  " + ancienneQuantity);
               //if (nouvelleQuantity != ancienneQuantity){
               changeQuantity(product,nouvelleQuantity);
               // window.location.reload();
          }
            //}
          }) 
     } 
    //    }/*
       /**
    * 
    * @param {*} product 
    * @param {*} product_panier 
    * @param {*} nouvelleQuantity 
    */
   function changeQuantity(product,nouvelleQuantity){
     let panier = getPanierLS();
    
     let foundProduct = panier.find(p =>p.idProduitPanier == product._id && p.colorProduitPanier== product_panier.colorProduitPanier);
     if (foundProduct != undefined){
       foundProduct.quantiteProduitPanier = nouvelleQuantity;
       if(foundProduct.quantiteProduitPanier<=0){
         removeProductPanier(foundProduct);
       }else{
         savePanierLS(panier);
       }
       
     }
    
   }
      
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
    * 
    * sauvegarde le panier en excluant le produit passé en parametre  
    */
   function removeProductPanier(product){
     let panier = getPanierLS();
     // const test133 = console.table('remove function  '+ product._id);
     panier = panier.filter(p => p.idProduit != product._id);
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
   
   
    const testid = console.log('localStorage'+ panier[0].idProduitPanier);
    const testqt = console.log('localStorage'+ panier.quantiteProduitPanier);
    const testco = console.log('localStorage'+ panier.colorProduitPanier);
   
   
   