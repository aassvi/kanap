/**
 * 1 Recupere URL avec id produit lien clické
 * 2 Function getKanapAPI
 * Fetch avec id produit et affichage elements sur la page
 * cherche l'endroit et cree element si necessaire
 * Afficher   img - nom produit - prix - description produit 
 * Recupere la couleur du produit choisie par le client via la liste déroulante option
 * Recupere la quantité du produit choisie par le client via input
 * 
 * 3 Gestion pannier - produit sur la page et produits dans le panier
 *  ecoute button - garde info en localstorage 
 *  Function addKanapPanier 
 *  Function saveKanapLS
 *  Function getKanapLS
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
    if (selectColor == ""){
      selectColor =undefined ;
      const col1 = console.log("erreur color" +selectColor);
    }
  });

  //quantité produit
  // cherche id quantity et garde la valeur choisie 
  //const quantite = document.getElementById('quantity').value;
  //quantité variable
  //const test3 = console.log(quantite);
  //recuprer la quantité choisie
  //const input = document.querySelector('input');
  const input = document.getElementById('quantity');
  const inputmin = document.getElementById('quantity').min;
  const inputmax = document.getElementById('quantity').max;
        
  input.addEventListener('input', updateValue);
  function updateValue(e) {
    quantityValue = e.target.value;
    quantity = parseInt(quantityValue);
    if ( quantity < 0 ||  quantity > 100) {
      const quantiteChoisie = console.log("erreur quantite" + quantity);
      quantity= 0;
    }
  }
  //input.addEventListener('input', function (e){
  // quantite1 = e.target.value;
  //const quantite1 = console.log(quantite1);
  //});
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
 * 3. Gestion Pannier 
 *    Ecoute button 
 *    Functions
 *    saveKanapLocalstorage - getKanapLocastorage - addKanapPanier,  removeKanapPannier, changeQuantity, 
 * 
*/ 
function saveKanapLS(kanap){
  localStorage.setItem("kanap",JSON.stringify(kanap));
  const test133 = console.table('savekanap function set '+ kanap);
}

function getKanapLS(){
  let kanap = localStorage.getItem("kanap");
  const test133 = console.table('kanap function getLs quantite '+ kanap);
  if (kanap == null){
    return[];
  } else{
    return JSON.parse(kanap);
  
  }
}

function addKanapPanier(product){
  let kanap = getKanapLS();
  const test133 = console.table('addkanap Ls get  '+ kanap[0]);
  const test143 = console.log('kanap  nouvelle quantite '+ product.quantiteProduitPanier);
  //const test141 = console.log('kanap  nouveau id '+ product.idProduitPanier);
  //const test142 = console.log('kanap  nouvelle color '+ product.colorProduitPanier);
  
  let foundProduct = kanap.find(p =>p.idProduitPanier == product.idProduitPanier && p.colorProduitPanier == product.colorProduitPanier);
  if (foundProduct != undefined) {
    const test18 = console.log('quantite nouvelle'+ product.quantiteProduitPanier); 
    const test121 = console.log('quantite ls  '+ foundProduct.quantiteProduitPanier); 
    foundProduct.quantiteProduitPanier += product.quantiteProduitPanier;
    const test125 = console.log('sum ls quantite + nouvelle quantite '+ foundProduct.quantiteProduitPanier); 

  } else{
    //kanap.quantiteProduitPanier = product.quantiteProduitPanier;
    kanap.push(product);
   
  }
  saveKanapLS(kanap);
  //Créer un local storage  memorise l'object
  //let objTest = JSON.stringify(kanap);
  //localStorage.setItem("kanap",objTest);
  //const test14 = console.log('apres function localstorage'+kanap.quantiteProduitPanier);
}


//ajout dans le panier Ecouter le bouton 
const button = document.querySelector('button');
button.addEventListener('click', event => {
  
    let product = {
        "idProduitPanier":id,
        "quantiteProduitPanier": quantity,
        "colorProduitPanier":selectColor
      }

  const test14 = console.log('avant localstorage'+product.quantiteProduitPanier);
  if (product.quantiteProduitPanier > 0 && product.quantiteProduitPanier != undefined && product.colorProduitPanier != undefined){
    addKanapPanier(product);
    const test15 = console.table('en localstorage'+product.idProduitPanier);
  }
  //Créer un local storage  memorise l'object
  let objTest = JSON.stringify(product);
  localStorage.setItem("obj",objTest);
  });

  /*let test = {
  "idTest":"qss12",
  "quantiteTest": 2,
  "colorTest":"blanc"
 }
 */

//Créer un local storage  memorise l'object
//let objTest = JSON.stringify(product);
//localStorage.setItem("obj",objTest);

/*lecture pannier en page pannier
let objTest1 = localStorage.getItem("obj");
let test1 = JSON.parse(objTest1);

const test12 = console.log('localStorage'+ test1.quantiteTest); 
const test14 = console.log('localStorage'+ test1.idTest); 
const test16 = console.log('localStorage'+ test1.colorTest);
*/