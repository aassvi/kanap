/**
 * 1.	Récupérer les donnes dans API (fichier json) méthode GET 
 * 2.	Créer du html pour les donnees section class= items dans le DOM avec document.create 
 * 3.	Ajouter les enfants au parent  fonction appendChild
 * 4.	Afficher les données  dans le Dom (boucle )
 */


const url = ('http://localhost:3000/api/products');

 fetch(url)
 .then(function(res) {
   if (res.ok) {
     return res.json();                              // promise recupere le resultat de la requete
   }
 })
 .then(function(value) {
   document
       const items = console.table(value);          // table 
       const items1 = console.table(value[0]);       // element 1   class items  id   img,alt  h3(nameProdut)  p(description)
       const itemsname = console.table(value[0].name); 
       const itemsid = console.table(value[0]._id);
       const itemsUrl = console.table(value[0].imageUrl);
       

       

       
       // creer les balises pour les donnees nouveaux elements dans le DOM 
       // section  class items id items 
       // a
       // article avec img name description

        const newItem = document.createElement("a");     // cree une balise a pour product id  
        const newArticle = document.createElement("article");  //  cree balise article pour afficher le resulat recupere 
        const newImg = document.createElement("img");  //  cree une img  et alt pour aficher l'image du produit avec l'attribut alt
        const newH3 = document.createElement("h3");  //  cree h3 class="productName pour afficher le nom du produit 
        const newP = document.createElement("p");  //  cree un p class="productDescription pour afficher la description 
         
        // creer les nodes ?????  avec creatNode

        // append les nouveaux elements a son parent 
        
        let eltSection = document.getElementById("section");      // section est parent de <a> et <article>
        
        eltSection.appendChild(newItem);     //  nouveau element <a> est enfant de section 
        eltSection.appendChild(newArticle);     // nouveau element <article> est enfant de section 
        
        let eltArticle = document.getElementById("article");  // 
        
        eltArticle.appendChild(newImg);   
        eltArticle.appendChild(newH3);   
        eltArticle.appendChild(newP);

        // affiche les donnees avec une boucle
        document.writeln("Le nom produt est: " + itemsname);  
        affichageName.innerHtml = newH3;


        // add the newly created element and its content into the DOM
        
        // ecouter les evenements le click pour le lien kanap 

        const eltLien = document.getElementById('a');    // On récupère l'élément sur lequel on veut détecter le clic
        eltLien.addEventListener('click', function() {          // On écoute l'événement click
        
        // si lien cliqué envoie donnees du lien clické dans le lien href="./product.html?id=?


});
        
        
 })     
         
 .catch(function(err) {
   console.log('erreur: ' + err); 
 });




 /*const url = ('http://localhost:3000/api/products');

fetch(url)        
.then((reponse) => {
    console.log(reponse)
    const kanapData = reponse.json();
    console.log(kanapData);

    kanapData.then((idKanap) => {
        console.log(idKanap);
        // affichage tableau infos kanap 0
        console.table(idKanap[0]);   
        
         // sauvegarde contenu dans une constante infos kanap url image 0 
        const kanapImg = console.log(idKanap[0].imageUrl);      
        const kanapName = console.log(idKanap[0].name);
        const kanapDescription = console.log(idKanap[0].description);

        // creation elements html DOM



    





    });
});
*/