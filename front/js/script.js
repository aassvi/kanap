/**
 * 1.	Récupérer les donnes dans API (fichier json) méthode GET 
 * 2.	Créer du html pour les donnees section class= items dans le DOM avec document.create 
 * 3.	Ajouter les enfants au parent  fonction appendChild
 * 4.	Afficher les données  dans le Dom (boucle )
 */


// function 

function createKanap(kanap) {
    // cherche la section pointe le curseur vers id= items et cree un link sur element global 
    document.getElementById('items'); 

    // creation element enfant a
    const  a = document.createElement("a");
    // alimente le lien avec _id de kanap API pour la page produit 
    const produitId = console.log(kanap._id);
    a.href="./product.html?id=" +kanap._id;
    const produitId2 = console.log(a.href);
    
    
     document.getElementById('items').appendChild(a);

    // creation article
    const myArticle = document.createElement("article");
    // creation du lien sur article
    a.append(myArticle);
    

    // construction element enfant article image et attribut alt
    const img = document.createElement("img");

   // alimentation des variables avec les valeurs de l'APi
    img.scr = kanap.imageUrl;
    //img.scr ="/back/images/kanap07.jpeg";
    const test1 = console.log(img);
    
    img.setAttribute("scr",img.scr);

    img.alt = kanap.altTxt+", "+kanap.name; 
      const test = console.log(img.scr);

   
    // creation du lien enfant image et alt au parent article 
    a.append(img);
    myArticle.appendChild(img); 
    
    //  let result = console.log(img.replaceAll('http://localhost:3000/', "/back/"));
    //console.log(img.replaceAll('http://localhost:3000/', "/back/"));

    // construction element enfant article h3 
    const myH3 = document.createElement("h3");
    myH3.classList.add('class="productName"');
   // alimente la variable avec le nom
    myH3.h3 = kanap.name;
    myH3.append(myH3.h3);
    myArticle.appendChild(myH3);


    // construction element enfant article p 
    const myP = document.createElement("p");
    myP.classList.add('class="productDescription"');
    // alimente la variable avec la description
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
   
});
 
//.catch((err) =>{
//  console.log('erreur: ' + err);                    // gestion erreur 
//});
//.catch((err) => (console.log(err));

   
  
 
        
        
 

         

          
 
 