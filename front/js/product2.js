/**
 * 1 Recupere URL avec id produit lien clické
 * 2 Function getKanapAPI
 * Fetch avec id produit et affichage elements sur la page
 * cherche l'endroit et cree element si necessaire
 * Afficher   img - nom produit - prix - description produit 
 * Recupere la couleur du produit choisie par le client via la liste déroulante option
 * Recupere la quantité du produit choisie par le client via input
 * 
 * 3 Gestion pannier
 *  ecoute button - garde info en localstorage 
 *  Function addKanapPanier 
 *  Function saveKanapLocalStorage
 *  Function removeKanapPanier
 *  Function changeQuantity
 *  Function getNumberKanap
 *  Function getTotalPrice 
 *  
 *
 */
// * 1 recupere URL avec id produit lien clické
let params = new URLSearchParams(document.location.search);
let id = params.get("id");
//const test = console.table(id);


// * 2 Fetch avec id produit et affichage elements sur la page DOM 
function getKanapAPI(kanap){
   // construction element enfant div image et attribut alt
   
   const imgProduct = document.createElement("img");
   
  document.getElementsByClassName("item__img")[0].appendChild(imgProduct);
  imgProduct.src = kanap.imageUrl;
  imgProduct.alt = kanap.altTxt;
   
   
  // const col5= console.log(kanap.imageUrl);

   //nom produit
   const titleProduct = document.getElementById('title');
   titleProduct.innerHTML = kanap.name;
   //prix produit
   const prixProduct = document.getElementById('price');
   prixProduct.innerHTML = kanap.price;
   //description produit
   const descriptionProduct = document.getElementById('description');
   descriptionProduct.innerHTML = kanap.description;
   //color produit
   kanap.colors.forEach(function(color) {
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

    const selectElement = document.getElementById('colors');
    selectElement.addEventListener('change', (event) => {
    selectColor= event.target.value;
    //const col1 = console.log(selectColor);
   
    });

    //quantité produit
    // cherche id quantity et garde la valeur choisie 
    const quantite = document.getElementById('quantity').value;
    //quantité variable
    //const test3 = console.log(quantite);
    //recuprer la quantité choisie
    const input = document.querySelector('input');
    const quantity = document.getElementById('quantity');
    input.addEventListener('change', updateValue);
    function updateValue(e) {
      quantity.textContent = e.target.value;
     // const quantiteChoisie = console.log(quantity.textContent);
    }


}

let urlKanap = "http://localhost:3000/api/products/" + id;


fetch(urlKanap)
 .then(function(res) {
   if (res.ok) {
     return res.json();                              // promise recupere le resultat de la requete
    }
 })
.then((data) =>{
  const test5 = console.table(data);
  getKanapAPI(data);
    
});

/**
 *  3 Gestion Pannier 
 *  Ecoute button si cliqué 
 *  functions  saveKanapLocalstorage,  getKanapLocastorage, addKanapPanier,  removeKanapPannier, changeQuantity, 
 * 
 * 
*/ 
function saveKanapLS(kanap){
  localStorage.setItem("kanap",JSON.stringify(kanap));
}

function getKanapLS(){
  let kanap = localStorage.getItem("kanap");
  if (kanap == null){
    return[];
  } else{
    return JSON.parse(kanap);
    const parseici = console.log(kanap);
  }
}

function addKanapPanier(product){
  let kanap = getKanapLS();
  
  const test18 = console.log('kanap Ls'+ kanap); 
  const test141 = console.log('kanap Ls id '+ product[0]);
  const test142 = console.log('kanap Ls color '+ product[2]);
  let foundProduct = kanap.find(p => p[0] == product[0] && p[2] == product[2]);
  if (foundProduct != undefined) {
    foundProduct.quantity++;
  } else{
    product.quantity = 1;
    kanap.push(product);
    const test18 = console.log('kanap pannier'+ product); 
  }
  saveKanapLS(kanap);
}

function removeKanapPanier(product){
  let kanap = getKanapLS();
  kanap = kanap.filter ( p != product.id);
  saveKanapLS();
}

function changeQuantity(product,quantity){
let kanap = getKanapLS();
let foundProduct = basket.find(p => p.id == product.id && p.selectColor == product.selectColor);
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
//ajout dans le panier Ecouter le bouton 
const button = document.querySelector('button');
button.addEventListener('click', event => {
  product = new Array(id,quantity.textContent,selectColor);
  const test14 = console.log('avant localstorage'+product);
  addKanapPanier(product);
  const test13 = console.log('dans le panier et localstorage'+product);
  

});


 /* array panier avant sauvegarde localstorage
 arrayProduitPanier = new Array(id,quantity.textContent,selectColor);
 const test18 = console.log('avant localstorage'+arrayProduitPanier[0]);  
 const test19 = console.log('avant localstorage'+arrayProduitPanier[1]);
 const test20 = console.log('avant localstorage'+arrayProduitPanier[2]);

 tab1=new Array("Étudiant 1",12,10);
 tab2=new Array("Étudiant 2",10,15); 


 
 // on verifie si les donnees etaient deja presentes dans l'array pannier 
 // si oui id  color deja presents incremente la quatité
 //if arrayProduitPannier[0] == arrayProduitPannier1[0] &&  arrayProduitPannier[2] == arrayProduitPannier1[2] alors arrayProduitPanier[1]++
 arrayProduitPanier.forEach((element) =>{
   addQtProduit(element);  // arrayProduitPanier.push(arrayProduitPanier[1])
 });
 //si non enresgistrement des données dans array sauvegarde en localstorage
 //else
 // array panier  sauvegarde localstorage
 arrayProduitPanier.forEach((element) =>{
   addLocalstorage(element);   //sauvegarde localstorage
});

 let arrayPanier = JSON.stringify(arrayProduitPanier);
 localStorage.setItem("obj",arrayPanier); 
 let objPanier = localStorage.getItem("obj");
 let arrayProduitPanier1 = JSON.parse(objPanier);
 const test21 = console.log('localStorage'+ arrayProduitPanier1[0]);
 const test22 = console.log('localStorage'+ arrayProduitPanier1[1]);
 const test23 = console.log('localStorage'+ arrayProduitPanier1[2]); 
*/

