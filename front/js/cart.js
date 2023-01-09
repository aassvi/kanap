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
  myArticle.dataset.color= product_panier.colorProduitPanier;                                
  // creation du lien sur article
  myId.appendChild(myArticle);
  // div 
  const myDiv = document.createElement("div");
  myDiv.classList.add('cart__item__img');
  // creation du lien sur article
  myArticle.appendChild(myDiv);
  const img = document.createElement("img");
  myArticle.appendChild(img);
  img.src=product.imageUrl
  img.alt = product.altTxt+", "+product.name;  
  myDiv.appendChild(img);
  const myDiv2 = document.createElement("div");
  myDiv2.classList.add('cart__item__content');
  myArticle.appendChild(myDiv2);
  const myDiv3 = document.createElement("div");
  myDiv3.classList.add('cart__item__content__description');
  myDiv2.appendChild(myDiv3);
  const myH2 = document.createElement("h2");
  myH2.h2 = product.name;
  myH2.append(myH2.h2);
  myDiv3.appendChild(myH2);
  const myP1 = document.createElement("p");
  myP1.p = product_panier.colorProduitPanier;                                       
  myP1.append(myP1.p);
  myDiv3.appendChild(myP1);
  const myP2 = document.createElement("p");
  myP2.innerHTML = product.price+ '€';
  myDiv3.appendChild(myP2);
  const myDiv4 = document.createElement("div");
  myDiv4.classList.add('cart__item__content__settings');
  myDiv2.appendChild(myDiv4);
  const myDiv5 = document.createElement("div");
  myDiv5.classList.add('cart__item__content__settings__quantity');
  myDiv4.appendChild(myDiv5);
  const myQuantite = document.createElement("p");
  myQuantite.innerText = 'Qté: ';                    
  myDiv5.appendChild(myQuantite);
  const myInput= document.createElement("input");                              
  myInput.type = "number";
  myInput.classList.add('itemQuantity');
  myInput.name = "itemQuantity";
  myInput.min = "1";
  myInput.max = "100";
  myInput.value = product_panier.quantiteProduitPanier; 
  myInput.innerHTML = myInput.value;                          
  myDiv5.appendChild(myInput);
  const myDiv6 = document.createElement("div");
  myDiv6.classList.add('cart__item__content__settings__delete');
  const myDeleteQuantite = document.createElement("p");
  myDeleteQuantite.classList.add('deleteItem');
  myDiv6.appendChild(myDeleteQuantite);
  myDeleteQuantite.innerText= "Supprimer";
  myDiv4.appendChild(myDiv6);
}  

/**
* Function checkQuantity permet d'écouter si une des quan tité des produits affichés change
* Cibler le bon produit à modifier avec elementClosest et dataset id et dataset  color sur class="cart__item"
*/
function checkQuantity(){
  const formQuantity = document.getElementById("cart__items");
  formQuantity.addEventListener('change',(event) =>{

    if (event.target.tagName === "INPUT") {
      const item = event.target.closest(".cart__item");
      const id = item.dataset.id;
      const color = item.dataset.color;
      nouvelleQuantity =  event.target.value;
      let panier = getPanierLS();
      let foundProduct = panier.find(p =>p.idProduitPanier == id && p.colorProduitPanier == color);
      if (foundProduct != undefined ){
        if (nouvelleQuantity >100 ||nouvelleQuantity <=0){
          alert("Nombre d'articles min est de 1 et max est de 100");
          event.target.value = foundProduct.quantiteProduitPanier;
        } else{
          foundProduct.quantiteProduitPanier = parseInt(nouvelleQuantity);                 
          savePanierLS(panier);
          window.location.reload();
        }
      }  
    }         
  });  
}
   
/**
* Function supprime produit avec button Supprime 
* Cibler le bon produit à supprimer avec elementClosest et dataset id et dataset  color sur class="cart__item"
*/   
function checkDelete(){
  document.addEventListener('click',(event) =>{
    if (event.target.className === "deleteItem") {
        const item = event.target.closest('.cart__item');
        const id = item.dataset.id;
        const color = item.dataset.color;
        let panier = getPanierLS();
        // supprime le id et color dont le bouton a ete clické 
        panier = panier.filter(p => p.idProduit != id && p.colorProduitPanier != color);
        savePanierLS(panier);
        window.location.reload();
    }         
  }); 
}


//Function affiche le nombre total de produits(articles) et prix total dans le DOM

function affichetotal(){
  const tQ = document.getElementById('totalQuantity');
  tQ.replaceChildren(totalquantity);
  const totalPrix = document.getElementById('totalPrice');
  totalPrix.replaceChildren(totalprice);
}

//Boucle sur le tableau panier pour afficher les produits avec id localstorage
let totalprice = 0;
let totalquantity = 0;
for (var i = 0; i < panier.length; i++) {
  const canape = panier[i];
  let urlKanap = "http://localhost:3000/api/products/" +  canape.idProduitPanier;  
    
  fetch(urlKanap)
  .then(function(res) {
    if (res.ok) {
      return res.json();                             
    }
  })
  .then((data) =>{
    const test5 = console.table(data);
    afficheProductAPILS(data,canape);           
    totalprice = totalprice + Number(data.price) * Number(canape.quantiteProduitPanier);
    totalquantity = totalquantity + Number(canape.quantiteProduitPanier);
    affichetotal()
      
  });
  checkQuantity();
  checkDelete();
}  


//***************************************      section formulaire  ********************************************************/

/**
 * Fonctions valid saisie des champs du formulaire  valid click button Commander si formulaire valid
 * First name validation function
 * @returns boolean  true si le champs est au bon format false si il n'y est pas 
 */
function validateFirstName() {
  let firstName = document.getElementById("firstName").value;
  let regex = /^[a-zA-Z]{2,}$/;
  // Vérifie que le first name est valid
  if (regex.test(firstName)) {
    // Si valid cache l'error du message
    document.getElementById("firstNameErrorMsg").innerHTML= "valid";
    return true;
  } else {
    // Sinon si il est valid montre le message d'erreur
    document.getElementById("firstNameErrorMsg").innerHTML = "Le prénom doit comporter des lettres, des tirets uniquement";
    return false;
  }
}

// Last name validation function
function validateLastName() {
  let lastName = document.getElementById("lastName").value;
  let regex = /^[a-zA-Z]{2,}$/;
  if (regex.test(lastName)) {
    document.getElementById("lastNameErrorMsg").innerHTML = "valid";
    return true;
  } else {
    document.getElementById("lastNameErrorMsg").innerHTML = "Le nom doit comporter des lettres, des tirets uniquement";
    return false;
  }
}

// Address validation function
function validateAddress() {
  let address = document.getElementById("address").value; 
  let regex = /^[a-zA-Z0-9\s,'-]{5,}$/;
  if (regex.test(address)) {
    document.getElementById("addressErrorMsg").innerHTML = "valid";
    return true;
  } else {
    document.getElementById("addressErrorMsg").innerHTML = "L\'adresse doit comporter des lettres des chiffres et des tirets uniquement";
    return false;
  }
}

// City validation function
function validateCity() {
  let city = document.getElementById("city").value;
  let regex = /^[a-zA-Z\s]{2,}$/;
  if (regex.test(city)) {
    document.getElementById("cityErrorMsg").innerHTML = "valid";
    return true;
  } else {
    document.getElementById("cityErrorMsg").innerHTML = "Le nom de la ville doit comporter des lettres, des tirets uniquement";
    return false;
  }
}


function validateEmail() {
  var email = document.getElementById("email").value;
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (regex.test(email)) {
    document.getElementById("emailErrorMsg").innerHTML = "valid";
    return true;
  } else {
    document.getElementById("emailErrorMsg").innerHTML = "Email doit comporter un @ et un . quelques lettres apres";
    return false;
  }
}

// Envoi les données si elles sont valides et que le panier existe
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
      // envoyer object contact et tableau des ids produit vers le serveur API - function async retournes la promise, l'operateur await attend le résultat de la promise avant execution de la function
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
          alert("Commande validée");
          localStorage.clear();
          document.querySelector("#firstName").value="";
          document.querySelector("#lastName").value="";
          document.querySelector("#address").value="";
          document.querySelector("#city").value="";
          document.querySelector("#email").value="";
          idOrder = data.orderId;
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
