/**
 * 1.	Récupérer les donnes dans API (fichier json) méthode GET 
 * 2.	Créer du html pour les donnees section class= items dans le DOM avec document.create 
 * 3.	Ajouter les enfants au parent  fonction appendChild
 * 4.	Afficher les données  dans le Dom (boucle )
 */


/**
 * Function createKanap creée les elements dans le DOM 
 * @param {*} kanap 
 */

function createKanap(kanap) {
  document.getElementById('items'); 
  const  a = document.createElement("a");
  a.href="./product.html?id=" +kanap._id;
  document.getElementById('items').appendChild(a);
  const myArticle = document.createElement("article");
  a.append(myArticle);
  const img = document.createElement("img");
  myArticle.appendChild(img);
  img.src=kanap.imageUrl
  img.alt = kanap.altTxt+", "+kanap.name;  
  const myH3 = document.createElement("h3");
  myH3.classList.add('productName');
  myH3.h3 = kanap.name;
  myH3.append(myH3.h3);
  myArticle.appendChild(myH3);
  const myP = document.createElement("p");
  myP.classList.add('productDescription');
  myP.p = kanap.description;
  myP.append(myP.p);
  myArticle.appendChild(myP);
}
   
const url = ("http://localhost:3000/api/products");


fetch(url)
 .then(function(res) {
   if (res.ok) {
     return res.json();                              // promise recupere le resultat de la requete
    }
 })
.then((data) =>{
  const test4 = console.table(data);
    data.forEach((element) =>{
        createKanap(element);
    });
   
})
.catch((error) => {
  console.error(error);                              // gestion error
}); 

   
  
 
        
        
 

         

          
 
 