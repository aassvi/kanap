/**
 * 1.	Récupérer les donnes dans API (fichier json) méthode GET 
 * 2.	Créer du html pour les donnees section class= items dans le DOM avec document.create 
 * 3.	Ajouter les enfants au parent  fonction appendChild
 * 4.	Afficher les données  dans le Dom (boucle )
 */


// function 

function createKanap(kanap)
 {
    // cherche la section pointe le curseur vers id= items et cree un link sur element global 
    document.getElementById('items'); 
    
    // creation element enfant a
    const link = document.createElement("a");
    // alimente le lien avec API
    link.href="./product.html?id= +kanap._id";

    document.getElementById('items').appendChild(link); 

    // creation article
    const myArticle = document.createElement("article");
    // creation du lien sur article
    link.appendChild(myArticle);

    // construction element enfant article image et attribut alt
    const myImg = document.createElement("image");
    const myImgAlt = document.createElement("alt");

    // creation du lien enfant image et alt au parent article 
    myArticle.appendChild(myImg);
    myArticle.appendChild(myImgAlt);
   // alimentation des variables avec les valeurs de l'APi
    myImg.scr = kanap.imgUrl;
    myImgAlt.alt = kanap.altTxt; 


    // construction element enfant article image et attribut alt
    const myH3 = document.createElement("h3");
   
    myH3.h3 = kanap.name;
    myArticle.appendChild(myH3);

    // construction element enfant article image et attribut alt
    const myP = document.createElement("p");
    
    myP.p = kanap.description;
    myArticle.appendChild(myP);


    // inserer les elements dans le DOM
    // ajoute le nouvel élément items créé et son contenu dans le DOM
    
  
}
   
 const url = ('http://localhost:3000/api/products');


 fetch(url)
 .then(function(res) {
   if (res.ok) {
     return res.json();                              // promise recupere le resultat de la requete
    }
 })
.then((data) =>{
    const items = console.table(data); 
    data.forEach((kanap) =>{
        createKanap(kanap);
    });
  

});
 


   
        
 
        
        
 

         

          
 
 