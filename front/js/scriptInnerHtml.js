
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
