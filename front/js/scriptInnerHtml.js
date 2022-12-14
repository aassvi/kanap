
// query selecteur pour le DOM

const affichageIdKanap = document.querySelector("#idKanap");
const affichageImage = document.querySelector("#imageUrl");
let affichageName = document.querySelector("#name");
const affichageDescription = document.querySelector("#description");

console.log(affichageName);

fetch("http://localhost:3000/api/products")        //http://localhost:3000/api/products
.then((reponse) => {
    console.log(reponse)
    const kanapData = reponse.json();
    console.log(kanapData);

    kanapData.then((idKanap) => {
        console.log(idKanap[1]);
        const kanapImg = console.log(idKanap[1].imageUrl);
        const kanapName = console.log(idKanap[1].name);
        const kanapDescription = console.log(idKanap[1].description);

        
        affichageImage.innerHtml = kanapImg;
        affichageName.innerHtml = kanapName;
        affichageDescription.innerHtml = kanapDescription;



    });
});

//.catch((err) => (console.log(err));

   // alimentation des variables avec les valeurs de l'APi
   img.scr = kanap.imageUrl;
   img.alt = kanap.altTxt;
   //img.scr ="/back/images/kanap07.jpeg";
   const test1 = console.log(img);
   
   img.setAttribute("scr",img.scr);

   //img.alt = kanap.altTxt+", "+kanap.name; 
   //  const test = console.log(img.scr);

  
   // creation du lien enfant image et alt au parent article 
   a.append(img);
   myArticle.appendChild(img); 
  
   
   //  let result = console.log(img.replaceAll('http://localhost:3000/', "/back/"));
   //console.log(img.replaceAll('http://localhost:3000/', "/back/"));
