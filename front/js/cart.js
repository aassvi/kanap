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
      //console.log(`ID : ${id} - Color : ${color}`);
                
      nouvelleQuantity =  event.target.value;
      const nouqnQT = console.log(" function ChangeQuantity nouvelle quantite =  " + nouvelleQuantity);
            
      // Mise à jour de la quantité dans l'objet du panier
      let panier = getPanierLS();
      let foundProduct = panier.find(p =>p.idProduitPanier == id && p.colorProduitPanier == color);
      if (foundProduct != undefined ){
              
        if (nouvelleQuantity >100 ||nouvelleQuantity <=0){
          alert("nombre articles min est de 1 et max est de 100");
          window.location.reload();
                  
        } else{
          foundProduct.quantiteProduitPanier = parseInt(nouvelleQuantity);                 
          savePanierLS(panier);
          alert("nombre d'article actualisé dans le panier ");
            window.location.reload();
        }
      }  
    }         
  });  
}
   
/**
* function suprime 
* Button Supprime produit 
* Si button cliqué - produit supprimé localstorage et DOM  supprime produit du panier - 
*/   
function checkDelete(){
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

// functions valid input change input cases formulaire puis  valid click si formulaire valid
// First name validation function
function validateFirstName() {
  // Get the first name field value
  let firstName = document.getElementById("firstName").value;
 
  // Regular expression to check if the first name is valid
  let regex = /^[a-zA-Z]{2,}$/;

  // Check if the first name is valid
  if (regex.test(firstName)) {
    // If the first name is valid, hide the error message
    document.getElementById("firstNameErrorMsg").innerHTML= "valid";
    return true;
  } else {
    // If the first name is not valid, show the error message
    document.getElementById("firstNameErrorMsg").innerHTML = "Le prénom doit comporter des lettres, des tirets uniquement";
    return false;
  }
}

// Last name validation function
function validateLastName() {
  // Get the last name field value
  let lastName = document.getElementById("lastName").value;

  // Regular expression to check if the last name is valid
  let regex = /^[a-zA-Z]{2,}$/;

  // Check if the last name is valid
  if (regex.test(lastName)) {
    // If the last name is valid, hide the error message
    document.getElementById("lastNameErrorMsg").innerHTML = "valid";
    return true;
  } else {
    // If the last name is not valid, show the error message
    document.getElementById("lastNameErrorMsg").innerHTML = "Le nom doit comporter des lettres, des tirets uniquement";
    return false;
  }
}

// Address validation function
function validateAddress() {
  // Get the address field value
  let address = document.getElementById("address").value;

  // Regular expression to check if the address is valid
  let regex = /^[a-zA-Z0-9\s,'-]{5,}$/;

  // Check if the address is valid
  if (regex.test(address)) {
    // If the address is valid, hide the error message
    document.getElementById("addressErrorMsg").innerHTML = "valid";
    return true;
  } else {
    // If the address is not valid, show the error message
    document.getElementById("addressErrorMsg").innerHTML = "L\'adresse doit comporter des lettres des chiffres et des tirets uniquement";
    return false;
  }
}

// City validation function
function validateCity() {
  // Get the city field value
  let city = document.getElementById("city").value;

  // Regular expression to check if the city is valid
  let regex = /^[a-zA-Z\s]{2,}$/;

  // Check if the city is valid
  if (regex.test(city)) {
    // If the city is valid, hide the error message
    document.getElementById("cityErrorMsg").innerHTML = "valid";
    return true;
  } else {
    // If the city is not valid, show the error message
    document.getElementById("cityErrorMsg").innerHTML = "Le nom de la ville doit comporter des lettres, des tirets uniquement";
    return false;
  }
}

// Email validation function
function validateEmail() {
  // Get the email field value
  var email = document.getElementById("email").value;

  // Regular expression to check if the email is valid
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  // Check if the email is valid
  if (regex.test(email)) {
    // If the email is valid, hide the error message
    document.getElementById("emailErrorMsg").innerHTML = "valid";
    return true;
  } else {
    // If the email is not valid, show the error message
    document.getElementById("emailErrorMsg").innerHTML = "Email doit comporter un @ et un . quelques lettres apres";
    return false;
  }
}

// Envoi des données si elles sont valides et que le panier existe
if (panier.length === 0){
  alert("Le panier est vide pas besoin de remplir le formulaire. ");
  document.querySelector("#firstName").value="";
  document.querySelector("#lastName").value="";
  document.querySelector("#address").value="";
  document.querySelector("#city").value="";
  document.querySelector("#email").value="";

}else{  
  document.getElementById("order").addEventListener("click", function(event){
    event.preventDefault();
    // Recupere la valeur des champs true ou false
    const firstNameValid = validateFirstName();
    const lastNameValid = validateLastName();
    const addressValid = validateAddress();
    const cityValid = validateCity();
    const emailValid = validateEmail();

    console.log("test function submitForm");

    // Si tous les champs sont valides envoi les données au serveur
    if (firstNameValid && lastNameValid && addressValid && cityValid && emailValid) {
        
      // création object avec données de formulaire et le panier 
      const contact = {
          firstName: document.querySelector("#firstName").value,
          lastName : document.querySelector("#lastName").value,
          address  : document.querySelector("#address").value,
          city    : document.querySelector("#city").value,
          email    : document.querySelector("#email").value,
      };
      
      // met  object contact en localstorage
      localStorage.setItem("contact",JSON.stringify(contact));
      localStorage.getItem("contact");
    
      const productIds = [];
      for (let i = 0; i < panier.length; i++) {
        productIds.push(panier[i].idProduitPanier);
      }
      
      const dataItem = {
        contact : contact,
        products : productIds,
      };
      // envoyer object contact vers le serveur API 
      try {
        async function urlByPost() {
          console.log(JSON.stringify(dataItem));
          let response = await fetch(
            "http://localhost:3000/api/products/order",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(dataItem),
          }
          );
          let data = await response.json();
          //alert("Commande validée");
          localStorage.clear();
          document.querySelector("#firstName").value="";
          document.querySelector("#lastName").value="";
          document.querySelector("#address").value="";
          document.querySelector("#city").value="";
          document.querySelector("#email").value="";
          idOrder = data.orderId;
          console.log("idorder "+ idOrder );
          window.location.href = "./confirmation.html?id-order=" + idOrder;
        }
        urlByPost();
        } catch (err) {
          alert(`${err}`);
        }
    
    } else {
      // Formulaire non valid, n'envoi pas les données
      return false;
    }
  });
}
