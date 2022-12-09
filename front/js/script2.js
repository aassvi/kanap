// teste 
let file = "fetch_info.txt";





/**
 * requête HTTP avec la méthode GET
 * service http://localhost:3000/api/products
 * requete echo
 * then promise recupere le resultat de la requete dans fichier json
 * then  console affiche le resulat du fichier json
 */

const url = ('http://localhost:3000/api/products');

fetch(url)        //http://localhost:3000/api/products
  .then(function(res) {
    if (res.ok) {
      return res.json();                              // promise recupere le resultat de la requete
    }
  })
  .then(function(value) {
    //return console.log(value);       //                       // affiche le resulat en fichier
    return console.table(value);                          // affiche le resultat en tableau
  })
  .catch(function(err) {
    console.log('erreur: ' + err);                    // gestion erreur 
  });


// autre manière d'afficher 

  fetch("http://localhost:3000/api/products")        //http://localhost:3000/api/products
  .then(reponse1 => reponse1.json())
  .then(reponse => console.log(reponse.name))                      // affiche le resultat en tableau
 

/**
 *  functions create node nouveau element et function append element  
 *  cree des elements dans le DOM
*/
function createNode(element) {
    return document.createElement(element);
}
// inserer dans le structure arbre du DOM pour pouvoir les trouver
function append(parent, el) {
  return parent.appendChild(el);
}


// la constante article pour ecrire dynamique les elements de l'API dans le DOM
const article = document.getElementById('items');

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let items = console.log(data);
  return (function(items) {
   
    let img = createNode('img');
    let h3 = createNode('h3');
    let p = createNode('p');
    
    
    append(article, img);
    append(article, h3);
    append(article, li);
  })
})
.catch(function(error) {
  console.log(error);
});

/**
 * requête HTTP avec la méthode GET
 * service http://localhost:3000/api/products
 * requete item 
 * then promise recupere le resultat de la requete dans fichier json
 * then   affiche le resulat du fichier json dans un nouveau element html en dynamique 
 * 
 */ 
function askItems() {
fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();                              // promise recupere le resultat de la requete
    }
  })
  .then(function(value) {
    document
        const items = console.log(value);                              //class items 
        const itemContent = document.getElementsByClassName('items'); // recupere le contenu de la class items 
        const firstItem = itemContent[0];      // endroit ou se trouve la donnee (type de donnee)
                                                        // id   img,alt  h3(nameProdut)  p(description)
  })
  .catch(function(err) {
    console.log('erreur: ' + err); 
  });
}

//document.body.onload = addElement;                  // ajout des donnees au DOM creation lignes html

function addElement() {                            // ajout element html

  const newItem = document.createElementById(items);     // cree une balise a pour product id  
  
  const newArticle = document.createElement("article");  //  cree balise article pour afficher le resulat recupere 
 
  const newImg = document.createElement("img");  //  cree une img  et alt pour aficher l'image du produit avec l'attribut alt
  
  const newH3 = document.createElement("h3");  //  cree h3 class="productName pour afficher le nom du produit 
  const newP = document.createElement("p");  //  cree un p class="productDescription pour afficher la description 

                                //    cree le node text pour ce text  et l'affiche la donnée
                   document.writeln("Le nom id item est:  " + items.id);
                   document.writeln("Le nom produt est: " + items.name);  
                   document.writeln("Le prix produt est: " + items.imagUrl);
                   document.writeln("Le nom id item est:  " + items.colours);  //tableau de coulours                               

                   
  newArticle.appendChild(newItem);     // add the text node to the newly created 
  newArticle.appendChild(newarticle);   
  newArticle.appendChild(newimg);   
  newArticle.appendChild(newh3);   
  newArticle.appendChild(newp);   

  // add the newly created element and its content into the DOM
  const currentArticle = document.getElementById("article");
  //document.body.insertBefore(newArticle, currentArticle);
}
 

