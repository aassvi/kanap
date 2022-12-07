/**
 * requête HTTP avec la méthode GET
 * service http://localhost:3000/api/products
 * requete echo
 * then promise recupere le resultat de la requete dans fichier json
 * then  console affiche le resulat du fichier json
 */
fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();                              // promise recupere le resultat de la requete
    }
  })
  .then(function(value) {
    console.log(value);                             // affiche le resulat en fichier
    console.table(value);                          // affiche le resultat en tableau
  })
  .catch(function(err) {
    // Une erreur est survenue                      // gestion erreur 
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
        .getElementByClassName("items")                               //class items 
        const itemContent = document.getElementsByClassName('items'); // recupere le contenu de la class items 
        const firstItem = itemContent[0];      // endroit ou se trouve la donnee (type de donne)
                                                        // id   img,alt  h3(nameProdut)  p(description)
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}

document.body.onload = addElement;                  // ajout des donnees au DOM creation lignes html

function addElement() {                            // ajout element html

  const newItem = document.createElementById(items);     // cree une balise a pour product id  
  
  const newArticle = document.createElement("article");  //  cree balise article pour afficher le resulat recupere 
 
  const newImg = document.createElement("img");  //  cree une img  et alt pour aficher l'image du produit avec l'attribut alt
  
  const newH3 = document.createElement("h3");  //  cree h3 class="productName pour afficher le nom du produit 
  const newP = document.createElement("p");  //  cree un p class="productDescription pour afficher la description 

  const newContent =   //  cree le node text pour ce text  et l'affiche la donnée
                  // document.writeln("Le nom id item est:  " +products.id); products ou items ???
                  // document.writeln("Le nom produt est: " + products.name);  
                  // document.writeln("Le prix produt est: " + products.imagUrl);
                  // document.writeln("Le nom id item est:  " +products.colours);  //tableau de coulours                               
  newDiv.appendChild(newContent);     // add the text node to the newly created 

  // add the newly created element and its content into the DOM
  const currentArticle = document.getElementById("article");
  //document.body.insertBefore(newArticle, currentArticle);
}
 

/**
 * requête HTTP avec la méthode GET
 * service http://localhost:3000/api/products
 * requete item 
 * then promise recupere le resultat de la requete dans fichier json
 * then   affiche le resulat du fichier json dans un nouveau element html en dynamique 
 
function askItems() {
fetch("http://localhost:3000/api/products")
  .then(function(res) {
    if (res.ok) {
      return res.json();                              // promise recupere le resultat de la requete
    }
  })
  .then(function(value) {
    document
        .getElementById("items")                        //class items 
        .innerText = value.queryString.greetings;       // endroit ou se trouve la donnee (type de donne)
  })
  .catch(function(err) {
    // Une erreur est survenue
  });
}

document
  .getElementById("items")
  .addEventListener("click", askItems);   // button pannier ajout article

  */